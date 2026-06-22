# Web học Lập trình C — Buổi 1 & 2

Trang web tĩnh (HTML/CSS/JS thuần, không cần build, không cần internet).

## 📂 Cấu trúc

```
web/
├── index.html        # trang chính
├── styles.css        # giao diện
├── script.js         # tương tác (highlight code, chạy thử, quiz...)
├── vercel.json       # cấu hình Vercel (cho path /buoi1-2)
└── README.md
```

## 🌐 Chạy thử ở máy

Mở thẳng `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
cd web
python3 -m http.server 8080
# mở http://localhost:8080/
```

## ▲ Deploy lên Vercel

1. Tạo project, **Root Directory** = `code/hv-maikimtoan/web`, Framework = **Other**.
2. Deploy. Trang chạy ở cả `/` và `/buoi1-2` (nhờ rewrite trong `vercel.json`).
3. Thêm domain `c-toanmk.ducanh.pro` ở Settings → Domains.
4. Truy cập: **https://c-toanmk.ducanh.pro/buoi1-2**

> `vercel.json` rewrite `/buoi1-2` → `index.html`. File CSS/JS đặt ở thư mục gốc
> nên đường dẫn tương đối luôn load đúng.
