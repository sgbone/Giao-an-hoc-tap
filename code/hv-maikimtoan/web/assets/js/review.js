/* =========================================================
   Trang ÔN TẬP — engine trắc nghiệm tự chấm điểm
   Đọc dữ liệu từ window.QUIZ (định nghĩa trong từng trang)
   ========================================================= */

(function () {
  const data = window.QUIZ;
  if (!data) return;

  // ----- xáo trộn (Fisher-Yates) -----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // xáo các đáp án trong 1 câu, giữ đúng đáp án đúng
  function shuffleOpts(item) {
    const correctVal = item.options[item.answer];
    const opts = shuffle(item.options);
    return { q: item.q, options: opts, answer: opts.indexOf(correctVal), explain: item.explain };
  }

  // ----- chuẩn bị danh sách câu hỏi -----
  let questions = data.questions.slice();
  if (data.shuffle || data.pick) questions = shuffle(questions);
  if (data.pick && data.pick < questions.length) questions = questions.slice(0, data.pick);
  if (data.shuffleOptions) questions = questions.map(shuffleOpts);

  const root = document.getElementById("quiz-root");
  const total = questions.length;
  let answered = 0;
  let correct = 0;

  // ----- thẻ điểm -----
  const scoreNum = document.getElementById("score-num");
  const scoreFill = document.getElementById("score-fill");
  const scoreMsg = document.getElementById("score-msg");
  document.getElementById("score-total").textContent = total;

  const LETTERS = ["A", "B", "C", "D", "E"];

  function updateScore() {
    scoreNum.textContent = correct;
    const pct = Math.round((answered / total) * 100);
    scoreFill.style.width = pct + "%";
    if (answered === 0) scoreMsg.textContent = "Bắt đầu làm nào!";
    else if (answered < total) scoreMsg.textContent = `Đã làm ${answered}/${total} câu`;
    else scoreMsg.textContent = "Hoàn thành! 🎉";
  }

  // ----- render từng câu -----
  questions.forEach((item, qi) => {
    const card = document.createElement("div");
    card.className = "q-card";

    const head = document.createElement("div");
    head.className = "q-head";
    head.innerHTML = `<span class="q-no">Câu ${qi + 1}</span><span class="q-text">${item.q}</span>`;
    card.appendChild(head);

    item.options.forEach((opt, oi) => {
      const btn = document.createElement("button");
      btn.className = "q-opt";
      btn.innerHTML = `<span class="q-letter">${LETTERS[oi]}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => {
        if (card.classList.contains("answered")) return;
        card.classList.add("answered");
        answered++;

        const opts = card.querySelectorAll(".q-opt");
        opts.forEach(o => (o.disabled = true));

        if (oi === item.answer) {
          btn.classList.add("correct");
          correct++;
        } else {
          btn.classList.add("wrong");
          opts[item.answer].classList.add("correct");
        }
        updateScore();
        if (answered === total) showSummary();
      });
      card.appendChild(btn);
    });

    const ex = document.createElement("div");
    ex.className = "q-explain";
    ex.innerHTML = `💡 <b>Giải thích:</b> ${item.explain}`;
    card.appendChild(ex);

    root.appendChild(card);
  });

  // ----- tổng kết -----
  function showSummary() {
    const pct = Math.round((correct / total) * 100);
    let emoji, msg;
    if (pct === 100) { emoji = "🏆"; msg = "Tuyệt đối! Em nắm bài cực chắc!"; }
    else if (pct >= 80) { emoji = "🌟"; msg = "Rất giỏi! Chỉ sai vài câu nhỏ thôi."; }
    else if (pct >= 50) { emoji = "💪"; msg = "Khá rồi! Xem lại mấy câu sai để chắc hơn nhé."; }
    else { emoji = "📚"; msg = "Cần ôn lại bài học rồi quay lại làm tiếp nha!"; }

    const box = document.createElement("div");
    box.className = "review-summary show";
    box.innerHTML = `
      <div class="rs-emoji">${emoji}</div>
      <div class="rs-score" style="color: var(--accent)">${correct}/${total}</div>
      <h2>Đúng ${pct}%</h2>
      <p class="muted">${msg}</p>
      <button class="retry-btn" onclick="location.reload()">↻ Làm lại</button>
    `;
    root.appendChild(box);
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  updateScore();

  /* ---------- Thanh tiến độ đọc ---------- */
  const bar = document.getElementById("progress-bar");
  if (bar) {
    window.addEventListener("scroll", () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (window.scrollY / h * 100) + "%";
    }, { passive: true });
  }

  /* ---------- Nền code rain (giống trang chính) ---------- */
  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w, h, cols, drops;
    const glyphs = "{}();<>=+-*/#01abcdefINT".split("");
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / 22);
      drops = new Array(cols).fill(0).map(() => Math.random() * -h);
    }
    resize();
    window.addEventListener("resize", resize);
    (function draw() {
      ctx.fillStyle = "rgba(11,16,32,0.10)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "15px 'Fira Code', monospace";
      for (let i = 0; i < cols; i++) {
        const g = glyphs[Math.floor(Math.random() * glyphs.length)];
        ctx.fillStyle = Math.random() > 0.97 ? "rgba(94,234,212,0.55)" : "rgba(129,140,248,0.22)";
        ctx.fillText(g, i * 22, drops[i]);
        drops[i] = drops[i] > h + Math.random() * 200 ? 0 : drops[i] + (1.1 + Math.random() * 1.6);
      }
      requestAnimationFrame(draw);
    })();
  }
})();
