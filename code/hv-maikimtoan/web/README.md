# Web học Lập trình C — Buổi 1 → 4

Trang web tĩnh (HTML/CSS/JS thuần, không cần build, không cần internet).
Toàn bộ bài học nằm trên **một trang** ở `/`; mỗi buổi có trang ôn tập riêng.

## 📂 Cấu trúc thư mục

```
web/
├── index.html            # trang chính (Buổi 1 → 4)  ->  /
├── vercel.json           # cấu hình Vercel (cleanUrls)
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css    # toàn bộ giao diện
│   └── js/
│       ├── main.js       # tương tác trang chính (highlight, chạy thử, reveal…)
│       └── review.js     # engine trắc nghiệm tự chấm điểm
└── ontap/                # các trang ôn tập  ->  /ontap/buoi-1 …
    ├── buoi-1.html
    ├── buoi-2.html
    ├── buoi-3.html
    └── buoi-4.html
```

## 🌐 Đường dẫn (sau khi deploy)

| Trang | URL |
|-------|-----|
| Bài học (Buổi 1→4) | `/` |
| Ôn tập Buổi 1 | `/ontap/buoi-1` |
| Ôn tập Buổi 2 | `/ontap/buoi-2` |
| Ôn tập Buổi 3 | `/ontap/buoi-3` |
| Ôn tập Buổi 4 | `/ontap/buoi-4` |

## 💻 Chạy thử ở máy

```bash
cd web
python3 -m http.server 8080
# mở http://localhost:8080/
```

## ▲ Deploy lên Vercel

1. Project → **Root Directory** = `code/hv-maikimtoan/web`, Framework = **Other**.
2. Deploy. `cleanUrls` tự bỏ đuôi `.html` (vd `/ontap/buoi-1`).
3. Thêm domain ở Settings → Domains.

## ➕ Thêm buổi mới

1. Thêm các `<section>` của buổi vào `index.html` (theo mẫu buổi trước).
2. Thêm link điều hướng trong sidebar + khối "Ôn tập nhanh".
3. Tạo `ontap/buoi-N.html` (copy 1 trang ôn tập sẵn, đổi `window.QUIZ`).
4. Nếu cần code mẫu mới: thêm vào `SNIPPETS`/`OUTPUTS` trong `assets/js/main.js`.
