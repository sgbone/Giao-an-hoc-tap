# Web học Lập trình C — Buổi 1 & 2

Trang web tĩnh (HTML/CSS/JS thuần, không cần build, không cần internet).

## 📂 Cấu trúc

```
web/
├── vercel.json          # cấu hình Vercel (trailing slash + clean URLs)
└── buoi1-2/             # nội dung trang -> chạy ở path /buoi1-2
    ├── index.html
    ├── styles.css
    └── script.js
```

## 🌐 Chạy thử ở máy

Mở thẳng `buoi1-2/index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
cd web
python3 -m http.server 8080
# mở http://localhost:8080/buoi1-2/
```

## ▲ Deploy lên Vercel — domain c-toanmk.ducanh.pro/buoi1-2

1. Tạo project mới trên Vercel, kết nối repo này.
2. Ở phần cấu hình project, đặt **Root Directory** = `code/hv-maikimtoan/web`.
3. Framework Preset: **Other** (đây là site tĩnh, không cần build).
4. Deploy. Lúc này nội dung nằm ở path `/buoi1-2`.
5. Vào **Settings → Domains**, thêm domain `c-toanmk.ducanh.pro`.
   Trang sẽ truy cập được tại: **https://c-toanmk.ducanh.pro/buoi1-2**

> `vercel.json` đã bật `trailingSlash` nên cả `/buoi1-2` và `/buoi1-2/`
> đều hoạt động và các file `styles.css`, `script.js` luôn load đúng.

## ➕ Thêm buổi sau

Tạo thêm thư mục cùng cấp, ví dụ `buoi3-4/`, rồi truy cập `/buoi3-4`.
