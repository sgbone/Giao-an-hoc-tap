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
}`,

  /* ----- Buổi 3 ----- */
  scanf: `#include <stdio.h>

int main() {
    int tuoi;
    printf("Nhap tuoi cua ban: ");
    scanf("%d", &tuoi);
    printf("Tuoi cua ban la: %d\\n", tuoi);
    return 0;
}`,

  calc: `#include <stdio.h>

int main() {
    float a, b;
    printf("Nhap so a: ");
    scanf("%f", &a);
    printf("Nhap so b: ");
    scanf("%f", &b);

    printf("Tong: %.2f\\n", a + b);
    printf("Hieu: %.2f\\n", a - b);
    printf("Tich: %.2f\\n", a * b);
    printf("Thuong: %.2f\\n", a / b);
    return 0;
}`,

  intdiv: `#include <stdio.h>

int main() {
    printf("5 / 2 = %d\\n", 5 / 2);
    printf("5 %% 2 = %d\\n", 5 % 2);
    printf("5.0 / 2 = %.1f\\n", 5.0 / 2);
    return 0;
}`,

  /* ----- Buổi 4 ----- */
  ifelse: `#include <stdio.h>

int main() {
    int n;
    printf("Nhap so nguyen: ");
    scanf("%d", &n);

    if (n > 0) {
        printf("So duong\\n");
    } else if (n < 0) {
        printf("So am\\n");
    } else {
        printf("So 0\\n");
    }
    return 0;
}`,

  evenodd: `#include <stdio.h>

int main() {
    int n;
    printf("Nhap so n: ");
    scanf("%d", &n);

    if (n % 2 == 0) {
        printf("%d la so chan\\n", n);
    } else {
        printf("%d la so le\\n", n);
    }
    return 0;
}`,

  /* ----- Buổi 5 ----- */
  forloop: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`,

  whileloop: `#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("%d ", i);
        i++;
    }
    return 0;
}`,

  sumn: `#include <stdio.h>

int main() {
    int n, tong = 0;
    printf("Nhap N: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        tong = tong + i;
    }
    printf("Tong = %d\\n", tong);
    return 0;
}`,

  /* ----- Buổi 6 ----- */
  star: `#include <stdio.h>

int main() {
    int n = 4;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`,

  /* ----- Buổi 7 ----- */
  arrio: `#include <stdio.h>

int main() {
    int n, a[100];
    printf("Nhap so phan tu: ");
    scanf("%d", &n);

    for (int i = 0; i < n; i++) {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }

    printf("Mang vua nhap: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    return 0;
}`,

  arrsum: `#include <stdio.h>

int main() {
    int n = 5;
    int a[5] = {4, 7, 2, 9, 5};
    int tong = 0, max = a[0];

    for (int i = 0; i < n; i++) {
        tong = tong + a[i];
        if (a[i] > max) {
            max = a[i];
        }
    }
    printf("Tong = %d\\n", tong);
    printf("Max = %d\\n", max);
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
  ],
  "scanf-out": [
    "Nhap tuoi cua ban: 18",
    "Tuoi cua ban la: 18",
    "",
    "Process exited after 2.51s with return value 0",
    "Press any key to continue . . ."
  ],
  "calc-out": [
    "Nhap so a: 6",
    "Nhap so b: 4",
    "Tong: 10.00",
    "Hieu: 2.00",
    "Tich: 24.00",
    "Thuong: 1.50",
    "",
    "Process exited after 3.20s with return value 0",
    "Press any key to continue . . ."
  ],
  "intdiv-out": [
    "5 / 2 = 2",
    "5 % 2 = 1",
    "5.0 / 2 = 2.5",
    "",
    "Process exited after 0.02s with return value 0",
    "Press any key to continue . . ."
  ],
  "ifelse-out": [
    "Nhap so nguyen: -7",
    "So am",
    "",
    "Process exited after 1.84s with return value 0",
    "Press any key to continue . . ."
  ],
  "evenodd-out": [
    "Nhap so n: 10",
    "10 la so chan",
    "",
    "Process exited after 1.62s with return value 0",
    "Press any key to continue . . ."
  ],
  "forloop-out": [
    "1", "2", "3", "4", "5",
    "",
    "Process exited after 0.02s with return value 0",
    "Press any key to continue . . ."
  ],
  "whileloop-out": [
    "1 2 3 4 5 ",
    "",
    "Process exited after 0.02s with return value 0",
    "Press any key to continue . . ."
  ],
  "sumn-out": [
    "Nhap N: 5",
    "Tong = 15",
    "",
    "Process exited after 1.90s with return value 0",
    "Press any key to continue . . ."
  ],
  "star-out": [
    "*",
    "**",
    "***",
    "****",
    "",
    "Process exited after 0.02s with return value 0",
    "Press any key to continue . . ."
  ],
  "arrio-out": [
    "Nhap so phan tu: 4",
    "a[0] = 5",
    "a[1] = 2",
    "a[2] = 8",
    "a[3] = 1",
    "Mang vua nhap: 5 2 8 1 ",
    "",
    "Process exited after 4.10s with return value 0",
    "Press any key to continue . . ."
  ],
  "arrsum-out": [
    "Tong = 27",
    "Max = 9",
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
const sections = [...navLinks]
  .filter(a => a.getAttribute("href").startsWith("#"))
  .map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
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
const menuToggle = document.getElementById("menu-toggle");
const backdrop = document.getElementById("sidebar-backdrop");

function setNav(open){
  document.body.classList.toggle("nav-open", open);
  if (menuToggle){
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
    const label = menuToggle.querySelector(".mt-label");
    if (label) label.textContent = open ? "Đóng" : "Menu";
  }
}

if (menuToggle){
  menuToggle.addEventListener("click", () =>
    setNav(!document.body.classList.contains("nav-open")));
}
if (backdrop) backdrop.addEventListener("click", () => setNav(false));
navLinks.forEach(l => l.addEventListener("click", () => setNav(false)));
// Esc để đóng menu
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains("nav-open")) setNav(false);
});

/* ---------- Hiệu ứng gõ tiêu đề hero ---------- */
(function typeHeroTitle(){
  const el = document.getElementById("typed");
  if (!el) return;
  const words = window.HERO_WORDS || ["1 — Hello World", "2 — Biến & kiểu dữ liệu"];
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
  if (!el) return;
  const code = SNIPPETS[el.dataset.snippet] || SNIPPETS.hello;
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
