/* =========================================================
   Học Lập Trình C — Buổi 1 & 2
   Tương tác: highlight code, gõ chữ, chạy thử, quiz, reveal
   ========================================================= */

/* ---------- Kho code mẫu ---------- */
const SNIPPETS = {
  hello: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,

  error: `int main() {
    printf("Hi")
    return 0;
}`,

  fixed: `int main() {
    printf("Hi");
    return 0;
}`,

  vars: `#include <stdio.h>

int main() {
    int tuoi = 18;
    float chieuCao = 1.65;
    char gioiTinh = 'N';

    printf("Tuoi: %d\\n", tuoi);
    printf("Chieu cao: %.2f\\n", chieuCao);
    printf("Gioi tinh: %c\\n", gioiTinh);

    return 0;
}`
};

/* ---------- Kết quả console khi "chạy thử" ---------- */
const OUTPUTS = {
  "hello-out": [
    "Hello, World!",
    "",
    "Process exited after 0.02s with return value 0",
    "Press any key to continue . . ."
  ],
  "vars-out": [
    "Tuoi: 18",
    "Chieu cao: 1.65",
    "Gioi tinh: N",
    "",
    "Process exited after 0.03s with return value 0",
    "Press any key to continue . . ."
  ]
};

/* ---------- Bộ tô màu cú pháp C đơn giản ---------- */
const C_KEYWORDS = ["int","float","char","double","void","return","if","else",
  "for","while","do","switch","case","break","continue","struct","const","long","short","unsigned"];

function escapeHtml(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function highlightC(raw){
  // tách & bảo vệ comment + chuỗi trước, rồi tô phần còn lại
  let out = "";
  let i = 0;
  while (i < raw.length){
    const ch = raw[i];

    // comment dòng //
    if (ch === "/" && raw[i+1] === "/"){
      let j = raw.indexOf("\n", i); if (j === -1) j = raw.length;
      out += `<span class="tok-com">${escapeHtml(raw.slice(i, j))}</span>`;
      i = j; continue;
    }
    // chuỗi "..."
    if (ch === '"'){
      let j = i + 1;
      while (j < raw.length && !(raw[j] === '"' && raw[j-1] !== "\\")) j++;
      out += `<span class="tok-str">${escapeHtml(raw.slice(i, j+1))}</span>`;
      i = j + 1; continue;
    }
    // ký tự '...'
    if (ch === "'"){
      let j = i + 1;
      while (j < raw.length && !(raw[j] === "'" && raw[j-1] !== "\\")) j++;
      out += `<span class="tok-str">${escapeHtml(raw.slice(i, j+1))}</span>`;
      i = j + 1; continue;
    }
    // preprocessor #include ...
    if (ch === "#"){
      let j = raw.indexOf("\n", i); if (j === -1) j = raw.length;
      const line = raw.slice(i, j);
      // tô riêng phần <...>
      const m = line.match(/^(#\s*\w+)(\s*)(<[^>]*>)?(.*)$/);
      if (m){
        out += `<span class="tok-pre">${escapeHtml(m[1])}</span>${escapeHtml(m[2])}`;
        if (m[3]) out += `<span class="tok-str">${escapeHtml(m[3])}</span>`;
        out += escapeHtml(m[4] || "");
      } else {
        out += `<span class="tok-pre">${escapeHtml(line)}</span>`;
      }
      i = j; continue;
    }
    // số
    if (/[0-9]/.test(ch) && !/[A-Za-z_]/.test(raw[i-1] || "")){
      let j = i;
      while (j < raw.length && /[0-9.]/.test(raw[j])) j++;
      out += `<span class="tok-num">${escapeHtml(raw.slice(i, j))}</span>`;
      i = j; continue;
    }
    // từ (keyword / function / id)
    if (/[A-Za-z_]/.test(ch)){
      let j = i;
      while (j < raw.length && /[A-Za-z0-9_]/.test(raw[j])) j++;
      const word = raw.slice(i, j);
      // bỏ qua khoảng trắng để xem có dấu ( phía sau -> hàm
      let k = j; while (k < raw.length && raw[k] === " ") k++;
      if (C_KEYWORDS.includes(word)){
        out += `<span class="tok-key">${word}</span>`;
      } else if (raw[k] === "("){
        out += `<span class="tok-fn">${word}</span>`;
      } else {
        out += escapeHtml(word);
      }
      i = j; continue;
    }
    // dấu câu
    if ("{}()[];,".includes(ch)){
      out += `<span class="tok-pun">${escapeHtml(ch)}</span>`;
      i++; continue;
    }
    out += escapeHtml(ch);
    i++;
  }
  return out;
}

/* ---------- Nạp & tô màu tất cả code block ---------- */
document.querySelectorAll("pre.code[data-code]").forEach(el => {
  const key = el.getAttribute("data-code");
  if (SNIPPETS[key]) el.innerHTML = highlightC(SNIPPETS[key]);
});

/* ---------- Nút Copy ---------- */
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const block = btn.closest(".code-block");
    const codeEl = block.querySelector("pre.code");
    const text = codeEl.innerText;
    navigator.clipboard?.writeText(text).then(() => {
      btn.textContent = "✓ Đã copy";
      btn.classList.add("done");
      setTimeout(() => { btn.textContent = "Copy"; btn.classList.remove("done"); }, 1600);
    }).catch(() => {
      btn.textContent = "Ctrl+C để copy";
      setTimeout(() => btn.textContent = "Copy", 1600);
    });
  });
});

/* ---------- Nút "Chạy thử" -> gõ output ra console ---------- */
document.querySelectorAll(".run-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-output");
    const consoleEl = document.getElementById(id);
    const body = consoleEl.querySelector(".console-body");
    const lines = OUTPUTS[id] || [];

    consoleEl.hidden = false;
    body.innerHTML = "";
    btn.disabled = true;
    btn.textContent = "⏳ Đang chạy...";

    let idx = 0;
    const tick = () => {
      if (idx >= lines.length){
        btn.disabled = false;
        btn.textContent = "↻ Chạy lại";
        return;
      }
      const text = lines[idx];
      const div = document.createElement("div");
      div.className = "ln" + (text.startsWith("Process") || text.startsWith("Press") ? " sys" : "");
      div.textContent = text === "" ? " " : text;
      div.style.animationDelay = "0s";
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
      idx++;
      setTimeout(tick, 260);
    };
    tick();
  });
});

/* ---------- Quiz ---------- */
document.querySelectorAll(".quiz").forEach(quiz => {
  const opts = quiz.querySelectorAll(".quiz-opt");
  opts.forEach(opt => {
    opt.addEventListener("click", () => {
      if (quiz.classList.contains("answered")) return;
      quiz.classList.add("answered");
      if (opt.hasAttribute("data-correct")){
        opt.classList.add("correct");
      } else {
        opt.classList.add("wrong");
        // làm nổi đáp án đúng
        quiz.querySelector("[data-correct]").classList.add("correct");
      }
    });
  });
});

/* ---------- Reveal khi cuộn ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("shown"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Thanh tiến độ đọc ---------- */
const bar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.width = (window.scrollY / h * 100) + "%";
}, { passive: true });

/* ---------- Highlight nav theo section ---------- */
const navLinks = document.querySelectorAll(".nav-link");
const sections = [...navLinks].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
const navIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      navLinks.forEach(l => l.classList.remove("active"));
      const link = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (link) link.classList.add("active");
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });
sections.forEach(s => navIO.observe(s));

/* ---------- Menu mobile ---------- */
const sidebar = document.getElementById("sidebar");
document.getElementById("menu-toggle").addEventListener("click", () => sidebar.classList.toggle("open"));
navLinks.forEach(l => l.addEventListener("click", () => sidebar.classList.remove("open")));

/* ---------- Hiệu ứng gõ tiêu đề hero ---------- */
(function typeHeroTitle(){
  const el = document.getElementById("typed");
  const words = ["1 — Hello World", "2 — Biến & kiểu dữ liệu"];
  let w = 0, c = 0, deleting = false;
  function loop(){
    const word = words[w];
    el.textContent = deleting ? word.slice(0, c--) : word.slice(0, c++);
    if (!deleting && c > word.length){ deleting = true; return setTimeout(loop, 1800); }
    if (deleting && c < 0){ deleting = false; w = (w + 1) % words.length; c = 0; return setTimeout(loop, 350); }
    setTimeout(loop, deleting ? 45 : 85);
  }
  loop();
})();

/* ---------- Gõ code trong terminal hero ---------- */
(function typeHeroCode(){
  const el = document.getElementById("hero-code");
  const code = SNIPPETS.hello;
  let i = 0;
  function type(){
    if (i <= code.length){
      el.innerHTML = highlightC(code.slice(0, i)) + '<span class="cursor">▋</span>';
      i++;
      setTimeout(type, 26);
    } else {
      el.innerHTML = highlightC(code);
    }
  }
  type();
})();

/* ---------- Nền: các ký tự code bay nhẹ ---------- */
(function codeRain(){
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, cols, drops;
  const glyphs = "{}();<>=+-*/#01abcdefINT".split("");

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    cols = Math.floor(w / 22);
    drops = new Array(cols).fill(0).map(() => Math.random() * -h);
  }
  resize();
  window.addEventListener("resize", resize);

  function draw(){
    ctx.fillStyle = "rgba(11,16,32,0.10)";
    ctx.fillRect(0, 0, w, h);
    ctx.font = "15px 'Fira Code', monospace";
    for (let i = 0; i < cols; i++){
      const g = glyphs[Math.floor(Math.random() * glyphs.length)];
      const x = i * 22;
      const y = drops[i];
      ctx.fillStyle = Math.random() > 0.97 ? "rgba(94,234,212,0.55)" : "rgba(129,140,248,0.22)";
      ctx.fillText(g, x, y);
      drops[i] = y > h + Math.random() * 200 ? 0 : y + (1.1 + Math.random() * 1.6);
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
