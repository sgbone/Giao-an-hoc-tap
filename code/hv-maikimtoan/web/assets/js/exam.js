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

      const head = document.createElement("div");
      head.className = "q-head";
      head.innerHTML = `<span class="q-no">Câu ${pos + 1}</span><span class="q-text">${item.q}</span>`;
      card.appendChild(head);

      item.options.forEach((opt, oi) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "q-opt";
        btn.innerHTML = `<span class="q-letter">${LETTERS[oi]}</span><span>${opt}</span>`;
        btn.addEventListener("click", () => {
          answers[origIdx] = oi;
          card.querySelectorAll(".q-opt").forEach((o) => o.classList.remove("selected"));
          btn.classList.add("selected");
          updateProgress();
        });
        card.appendChild(btn);
      });
      root.appendChild(card);
    });
    updateProgress();
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
    if (started && !submitted && !document.fullscreenElement) {
      raiseViolation("Bạn đã thoát chế độ toàn màn hình.");
    }
  }
  function onVisibility() {
    if (started && !submitted && document.hidden) {
      raiseViolation("Bạn đã rời khỏi tab hoặc thu nhỏ cửa sổ.");
    }
  }
  function blockEvent(e) { e.preventDefault(); return false; }
  function onKey(e) {
    const k = e.key;
    // chặn devtools & copy/paste/print
    if (
      k === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(k.toUpperCase())) ||
      (e.ctrlKey && ["c", "v", "x", "u", "s", "p", "a"].includes(k.toLowerCase()))
    ) {
      e.preventDefault();
      return false;
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
    window.removeEventListener("beforeunload", onBeforeUnload);
  }

  function raiseViolation(reason) {
    if (submitted) return;
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
    try { await document.documentElement.requestFullscreen(); } catch (e) {}
    warn.hidden = true;
  });

  /* ---------- nộp bài ---------- */
  $("btn-submit").addEventListener("click", () => confirmSubmit());
  $("btn-submit-bottom").addEventListener("click", () => confirmSubmit());

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
          durationSec: elapsed, violations, autoSubmit: !!auto
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
