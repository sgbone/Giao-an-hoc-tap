/* =========================================================
   PHÒNG KIỂM TRA — chế độ nghiêm ngặt
   - Toàn màn hình, chống chuyển tab / copy / chuột phải
   - Chấm điểm phía server, gửi kết quả về Discord
   ========================================================= */
(function () {
  const MAX_VIOLATIONS = 4;        // vi phạm tối đa trước khi tự nộp
  const LETTERS = ["A", "B", "C", "D", "E"];

  const $ = (id) => document.getElementById(id);
  const intro = $("intro"), examEl = $("exam"), resultEl = $("result"), warn = $("warn");

  let exam = null;             // dữ liệu đề (không có đáp án)
  let order = [];             // thứ tự hiển thị (đã xáo)
  const answers = {};          // { originalIndex: chosenOptionIndex }
  let started = false, submitted = false;
  let violations = 0;
  let startTime = 0, durationSec = 0, timerId = null;
  let graceUntil = 0;     // thời gian "ân hạn" — bỏ qua vi phạm thoáng qua
  let everFs = false;     // đã từng vào toàn màn hình thật chưa
  let currentIndex = 0;   // câu đang hiển thị (chế độ 1 câu/màn)
  const vlog = {};        // thống kê vi phạm theo loại { "Thoát toàn màn hình": 2, ... }
  function logViol(type) { vlog[type] = (vlog[type] || 0) + 1; }
  function examActive() { return started && !submitted && !examEl.hidden && Date.now() >= graceUntil; }

  /* ---------- tiện ích ---------- */
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return m + ":" + s;
  }

  /* ---------- bắt đầu ---------- */
  $("btn-start").addEventListener("click", async () => {
    const name = $("name").value.trim();
    if (name.length < 2) { alert("Vui lòng nhập họ tên của em!"); $("name").focus(); return; }
    const examId = $("exam-select").value;

    // vào toàn màn hình (cần thao tác người dùng)
    try {
      await (document.documentElement.requestFullscreen
        ? document.documentElement.requestFullscreen()
        : Promise.reject());
    } catch (e) {
      if (!confirm("Trình duyệt không vào được toàn màn hình. Vẫn tiếp tục làm bài?")) return;
    }
    everFs = !!document.fullscreenElement;

    $("btn-start").disabled = true;
    $("btn-start").textContent = "Đang tải đề...";
    let data;
    try {
      const r = await fetch("/api/exam?id=" + encodeURIComponent(examId), { cache: "no-store" });
      if (!r.ok) throw new Error();
      data = await r.json();
    } catch (e) {
      alert("Không tải được đề. Kiểm tra mạng hoặc thử lại.");
      $("btn-start").disabled = false;
      $("btn-start").textContent = "🚀 Bắt đầu làm bài";
      return;
    }

    exam = data;
    exam.name = name;
    renderExam();
    intro.hidden = true;
    examEl.hidden = false;
    document.body.classList.add("exam-mode");

    started = true;
    startTime = Date.now();
    durationSec = (exam.durationMin || 30) * 60;
    graceUntil = Date.now() + 3000;   // 3s đầu bỏ qua dao động fullscreen
    tickTimer();
    timerId = setInterval(tickTimer, 1000);
    attachGuards();
    window.scrollTo(0, 0);
  });

  /* ---------- render đề ---------- */
  function renderExam() {
    $("exam-title").textContent = exam.title;
    $("q-total").textContent = exam.total;
    const root = $("questions");
    root.innerHTML = "";
    order = shuffle([...Array(exam.questions.length).keys()]);

    order.forEach((origIdx, pos) => {
      const item = exam.questions[origIdx];
      const card = document.createElement("div");
      card.className = "q-card";
      card.dataset.id = origIdx;

      card.dataset.multi = item.multi ? "1" : "";

      const head = document.createElement("div");
      head.className = "q-head";
      const tag = item.multi ? ` <span class="multi-tag">Chọn nhiều đáp án</span>` : "";
      head.innerHTML = `<span class="q-no">Câu ${pos + 1}</span><span class="q-text">${item.q}${tag}</span>`;
      card.appendChild(head);

      const opts = item.options;
      const perm = shuffle([...opts.keys()]);  // xáo vị trí đáp án mỗi câu
      card._perm = perm;
      perm.forEach((origOptIdx, d) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "q-opt";
        btn.innerHTML = `<span class="q-letter">${LETTERS[d]}</span><span>${opts[origOptIdx]}</span>`;
        btn.addEventListener("click", () => applySelect(card, origIdx, d));
        card.appendChild(btn);
      });
      root.appendChild(card);
    });
    currentIndex = 0;
    $("q-total2").textContent = exam.total;
    showQuestion(0);
    updateProgress();
  }

  function applySelect(card, origIdx, displayPos) {
    const origOptIdx = card._perm[displayPos];   // chỉ số đáp án GỐC
    const opts = card.querySelectorAll(".q-opt");
    if (card.dataset.multi === "1") {
      // chọn nhiều: bật/tắt từng đáp án
      let arr = Array.isArray(answers[origIdx]) ? answers[origIdx] : [];
      const pos = arr.indexOf(origOptIdx);
      if (pos >= 0) { arr.splice(pos, 1); if (opts[displayPos]) opts[displayPos].classList.remove("selected"); }
      else { arr.push(origOptIdx); if (opts[displayPos]) opts[displayPos].classList.add("selected"); }
      if (arr.length) answers[origIdx] = arr; else delete answers[origIdx];
    } else {
      // chọn một: thay thế lựa chọn
      answers[origIdx] = origOptIdx;
      opts.forEach((o) => o.classList.remove("selected"));
      if (opts[displayPos]) opts[displayPos].classList.add("selected");
    }
    updateProgress();
  }

  function cards() { return $("questions").children; }

  function showQuestion(i) {
    const list = cards();
    if (!list.length) return;
    currentIndex = Math.max(0, Math.min(i, list.length - 1));
    for (let k = 0; k < list.length; k++) list[k].classList.toggle("active", k === currentIndex);
    $("q-cur").textContent = currentIndex + 1;
    $("btn-prev").disabled = currentIndex === 0;
    $("btn-next").disabled = currentIndex === list.length - 1;
    window.scrollTo(0, 0);
  }
  function goNext() { if (currentIndex < cards().length - 1) showQuestion(currentIndex + 1); }
  function goPrev() { if (currentIndex > 0) showQuestion(currentIndex - 1); }

  // chọn đáp án cho câu đang hiển thị bằng bàn phím
  function selectCurrent(oi) {
    const card = cards()[currentIndex];
    if (!card) return;
    const origIdx = Number(card.dataset.id);
    if (oi < card._perm.length) applySelect(card, origIdx, oi);
  }

  function updateProgress() {
    $("q-done").textContent = Object.keys(answers).length;
  }

  /* ---------- đồng hồ ---------- */
  function tickTimer() {
    const elapsed = (Date.now() - startTime) / 1000;
    const remain = durationSec - elapsed;
    const t = $("timer");
    t.textContent = fmt(remain);
    t.classList.toggle("danger", remain <= 60);
    if (remain <= 0) doSubmit(false, true);
  }

  /* ---------- chống gian lận ---------- */
  function onFsChange() {
    if (document.fullscreenElement) { everFs = true; return; }  // vừa VÀO fullscreen
    if (!started || submitted) return;
    if (!everFs) return;                  // chưa từng vào FS thật (vd trong khung preview) → bỏ qua
    if (Date.now() < graceUntil) return;  // đang trong thời gian ân hạn
    raiseViolation("Bạn đã thoát chế độ toàn màn hình.", "Thoát toàn màn hình");
  }
  function onVisibility() {
    if (!started || submitted) return;
    if (Date.now() < graceUntil) return;
    if (document.hidden) raiseViolation("Bạn đã rời khỏi tab hoặc thu nhỏ cửa sổ.", "Chuyển tab / thu nhỏ cửa sổ");
  }
  // chặn hành vi chuột/copy; ghi nhận loại vi phạm (không tính vào ngưỡng tự nộp)
  function blockEvent(e) {
    e.preventDefault();
    if (examActive()) {
      const map = { contextmenu: "Bấm chuột phải", copy: "Thử copy", cut: "Thử cắt (cut)", paste: "Thử dán (paste)" };
      logViol(map[e.type] || "Hành vi bị chặn");
    }
    return false;
  }
  // CHẶN MỌI THAO TÁC CHUỘT khi đang thi (chỉ cho phép nút điều hướng & overlay cảnh báo)
  function onMouse(e) {
    if (!started || submitted) return;
    const t = e.target;
    if (t && t.closest && (t.closest(".exam-nav") || t.closest("#warn"))) return; // cho phép
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "click" && examActive()) logViol("Dùng chuột thao tác (đã bị chặn)");
    return false;
  }
  function onKey(e) {
    const k = e.key;
    // chặn devtools & copy/paste/print
    if (
      k === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(k.toUpperCase())) ||
      (e.ctrlKey && ["c", "v", "x", "u", "s", "p", "a"].includes(k.toLowerCase()))
    ) {
      e.preventDefault();
      if (examActive()) logViol("Dùng phím tắt bị chặn (devtools/copy)");
      return false;
    }
    // điều khiển làm bài bằng bàn phím
    if (!started || submitted || examEl.hidden) return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    const up = k.toUpperCase();
    if (["A", "B", "C", "D", "E"].includes(up)) {
      e.preventDefault();
      selectCurrent(LETTERS.indexOf(up));
    } else if (["1", "2", "3", "4", "5"].includes(k)) {
      e.preventDefault();
      selectCurrent(parseInt(k, 10) - 1);
    } else if (k === "ArrowRight") {
      e.preventDefault();
      if (currentIndex === cards().length - 1) confirmSubmit(); else goNext();
    } else if (k === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (k === "Enter") {
      e.preventDefault();
      if (currentIndex === cards().length - 1) confirmSubmit(); else goNext();
    }
  }
  function onBeforeUnload(e) {
    if (started && !submitted) { e.preventDefault(); e.returnValue = ""; return ""; }
  }

  function attachGuards() {
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("contextmenu", blockEvent);
    document.addEventListener("copy", blockEvent);
    document.addEventListener("cut", blockEvent);
    document.addEventListener("paste", blockEvent);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onMouse, true);
    document.addEventListener("click", onMouse, true);
    document.addEventListener("dblclick", onMouse, true);
    window.addEventListener("beforeunload", onBeforeUnload);
  }
  function detachGuards() {
    document.removeEventListener("fullscreenchange", onFsChange);
    document.removeEventListener("visibilitychange", onVisibility);
    document.removeEventListener("contextmenu", blockEvent);
    document.removeEventListener("copy", blockEvent);
    document.removeEventListener("cut", blockEvent);
    document.removeEventListener("paste", blockEvent);
    document.removeEventListener("keydown", onKey);
    document.removeEventListener("mousedown", onMouse, true);
    document.removeEventListener("click", onMouse, true);
    document.removeEventListener("dblclick", onMouse, true);
    window.removeEventListener("beforeunload", onBeforeUnload);
  }

  function raiseViolation(reason, type) {
    if (submitted) return;
    if (!started || examEl.hidden) return;   // chưa vào màn hình làm bài thì không tính
    if (Date.now() < graceUntil) return;     // còn trong thời gian ân hạn
    if (type) logViol(type);
    violations++;
    if (violations >= MAX_VIOLATIONS) {
      $("warn-text").innerHTML =
        `<b>Vi phạm quá ${MAX_VIOLATIONS} lần!</b><br>Bài thi sẽ tự động nộp.`;
      $("warn-count").textContent = `Số lần vi phạm: ${violations}`;
      $("warn-actions").innerHTML = "";
      warn.hidden = false;
      setTimeout(() => doSubmit(false, true), 1500);
      return;
    }
    $("warn-text").innerHTML =
      `⚠️ <b>Cảnh báo!</b><br>${reason}<br>Vui lòng KHÔNG rời khỏi bài thi.`;
    $("warn-count").textContent =
      `Vi phạm: ${violations}/${MAX_VIOLATIONS} (quá ${MAX_VIOLATIONS} lần sẽ tự nộp)`;
    warn.hidden = false;
  }

  // nút "Vào lại toàn màn hình" trên overlay cảnh báo
  $("warn-resume").addEventListener("click", async () => {
    try { await document.documentElement.requestFullscreen(); everFs = true; } catch (e) {}
    graceUntil = Date.now() + 1500;   // tránh báo lại ngay khi vừa vào lại
    warn.hidden = true;
  });

  /* ---------- điều hướng & nộp bài ---------- */
  $("btn-prev").addEventListener("click", goPrev);
  $("btn-next").addEventListener("click", goNext);
  $("btn-submit").addEventListener("click", () => confirmSubmit());

  function confirmSubmit() {
    const left = exam.total - Object.keys(answers).length;
    const msg = left > 0
      ? `Em còn ${left} câu chưa làm. Vẫn nộp bài?`
      : "Nộp bài và kết thúc?";
    if (confirm(msg)) doSubmit(false, false);
  }

  async function doSubmit(_unused, auto) {
    if (submitted) return;
    submitted = true;
    if (timerId) clearInterval(timerId);
    detachGuards();
    warn.hidden = true;

    const elapsed = Math.round((Date.now() - startTime) / 1000);
    examEl.hidden = true;
    resultEl.hidden = false;
    document.body.classList.remove("exam-mode");
    resultEl.innerHTML = `<h2>⏳ Đang chấm điểm...</h2>`;

    if (document.fullscreenElement) { try { await document.exitFullscreen(); } catch (e) {} }

    let res;
    try {
      const r = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId: exam.id, name: exam.name, answers,
          durationSec: elapsed, violations, violationDetails: vlog, autoSubmit: !!auto
        })
      });
      res = await r.json();
    } catch (e) {
      resultEl.innerHTML = `<h2>❌ Lỗi gửi bài</h2><p class="muted">Không kết nối được máy chủ. Hãy báo giáo viên. Mạng có thể bị gián đoạn.</p>`;
      return;
    }
    showResult(res, elapsed, auto);
  }

  function showResult(res, elapsed, auto) {
    const pct = res.pct;
    let emoji, msg;
    if (pct >= 80) { emoji = "🏆"; msg = "Xuất sắc!"; }
    else if (pct >= 50) { emoji = "💪"; msg = "Đạt — cố thêm nhé!"; }
    else { emoji = "📚"; msg = "Chưa đạt, ôn lại rồi thi lại nha!"; }

    const grid = (res.results || [])
      .map((ok, i) => `<span class="rg ${ok ? "ok" : "no"}">${i + 1}</span>`)
      .join("");

    const vKeys = Object.keys(vlog);
    const vBlock = vKeys.length
      ? `<h4 class="sub">🚨 Vi phạm đã ghi nhận:</h4><ul class="explain">${
          vKeys.map((t) => `<li>${escapeHtml(t)}: <b>${vlog[t]}</b> lần</li>`).join("")
        }</ul>`
      : "";

    resultEl.innerHTML = `
      <div style="text-align:center">
        <div style="font-size:54px">${emoji}</div>
        <h2 style="margin:6px 0">${res.score}/${res.total} &nbsp;·&nbsp; ${pct}%</h2>
        <p class="muted">${msg}</p>
      </div>
      <div class="res-meta">
        <span>👤 ${escapeHtml(exam.name)}</span>
        <span>⏱️ ${fmt(elapsed)}</span>
        <span>🚨 Vi phạm: ${violations}${auto ? " (tự nộp)" : ""}</span>
        <span>${res.sent ? "✅ Đã gửi kết quả về Discord" : "⚠️ Chưa gửi được Discord"}</span>
      </div>
      ${vBlock}
      <h4 class="sub">Lưới đúng/sai (theo thứ tự câu khi làm):</h4>
      <div class="res-grid">${grid}</div>
      <p class="muted" style="margin-top:16px">Kết quả chi tiết đã được gửi cho giáo viên. Em có thể đóng trang này.</p>
    `;
    window.scrollTo(0, 0);
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
})();
