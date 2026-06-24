/* Ngân hàng ĐỀ KIỂM TRA (server-side, CÓ đáp án).
   File bắt đầu bằng "_" nên Vercel KHÔNG expose thành route.
   Client không bao giờ nhận được trường "answer". */

const EXAMS = {
  "buoi-1-2": {
    "title": "Kiểm tra Buổi 1–2",
    "durationMin": 50,
    "questions": [
      {
        "q": "Lệnh nào dùng để in ra màn hình?",
        "options": [
          "printf",
          "scanf",
          "include"
        ],
        "answer": 0
      },
      {
        "q": "Đuôi file đúng để lưu chương trình C là gì?",
        "options": [
          ".cpp",
          ".c",
          ".txt"
        ],
        "answer": 1
      },
      {
        "q": "Phím tắt <b>Biên dịch &amp; chạy</b> trong Dev-C++?",
        "options": [
          "F9",
          "F10",
          "F11"
        ],
        "answer": 2
      },
      {
        "q": "Ký tự <code>\\n</code> trong printf có tác dụng gì?",
        "options": [
          "In chữ n",
          "Xuống dòng",
          "Xóa màn hình"
        ],
        "answer": 1
      },
      {
        "q": "Cuối mỗi câu lệnh trong C bắt buộc có ký tự gì?",
        "options": [
          "Dấu phẩy ,",
          "Dấu chấm .",
          "Dấu chấm phẩy ;"
        ],
        "answer": 2
      },
      {
        "q": "Dòng nào khai báo dùng thư viện nhập/xuất chuẩn?",
        "options": [
          "#include &lt;stdio.h&gt;",
          "int main()",
          "return 0;"
        ],
        "answer": 0
      },
      {
        "q": "Chương trình C bắt đầu chạy từ đâu?",
        "options": [
          "Dòng #include",
          "Hàm int main()",
          "Dòng cuối cùng"
        ],
        "answer": 1
      },
      {
        "q": "<code>return 0;</code> ở cuối main nghĩa là gì?",
        "options": [
          "Kết thúc thành công",
          "In ra số 0",
          "Bắt đầu chương trình"
        ],
        "answer": 0
      },
      {
        "q": "Kiểu <code>int</code> dùng để lưu gì?",
        "options": [
          "Số nguyên",
          "Số thực",
          "Một câu"
        ],
        "answer": 0
      },
      {
        "q": "Kiểu nào lưu được số thực như 3.14?",
        "options": [
          "float",
          "int",
          "char"
        ],
        "answer": 0
      },
      {
        "q": "Kiểu <code>char</code> lưu được gì?",
        "options": [
          "Một ký tự duy nhất",
          "Một câu dài",
          "Một số thực"
        ],
        "answer": 0
      },
      {
        "q": "Ký hiệu định dạng nào dùng cho <code>int</code>?",
        "options": [
          "%d",
          "%f",
          "%c"
        ],
        "answer": 0
      },
      {
        "q": "Ký hiệu định dạng nào dùng cho <code>float</code>?",
        "options": [
          "%c",
          "%f",
          "%d"
        ],
        "answer": 1
      },
      {
        "q": "Ký hiệu định dạng nào dùng cho <code>char</code>?",
        "options": [
          "%c",
          "%d",
          "%s"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Đoạn sau in ra gì?<pre class=\"q-code\">printf(\"Hello, World!\\n\");</pre>",
        "options": [
          "Hello, World!",
          "Hello, World!\\n",
          "Báo lỗi"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Kết quả là?<pre class=\"q-code\">printf(\"%d\", 5 + 3);</pre>",
        "options": [
          "8",
          "53",
          "5 + 3"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int a = 7;\nprintf(\"%d\", a);</pre>",
        "options": [
          "7",
          "a",
          "%d"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%c\", 'A');</pre>",
        "options": [
          "A",
          "'A'",
          "65"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%.2f\", 3.14159);</pre>",
        "options": [
          "3.14",
          "3.14159",
          "3"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d %d\", 2, 5);</pre>",
        "options": [
          "2 5",
          "25",
          "%d %d"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Kết quả cuối cùng của <code>a</code>?<pre class=\"q-code\">int a = 5;\na = 10;\nprintf(\"%d\", a);</pre>",
        "options": [
          "10",
          "5",
          "15"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"AB\\nC\");</pre>",
        "options": [
          "AB, xuống dòng, rồi C (2 dòng)",
          "ABC trên cùng 1 dòng",
          "AB\\nC nguyên văn"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">float x = 2.5;\nprintf(\"%.1f\", x);</pre>",
        "options": [
          "2.5",
          "2.50",
          "2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">char k = 'Z';\nprintf(\"%c\", k);</pre>",
        "options": [
          "Z",
          "k",
          "'Z'"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"Toan\");\nprintf(\"Hoc\");</pre>",
        "options": [
          "ToanHoc (dính liền)",
          "Toan Hoc (có dấu cách)",
          "Toan và Hoc trên 2 dòng"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"2 + 3\");</pre>",
        "options": [
          "2 + 3 (in nguyên văn)",
          "5",
          "Báo lỗi"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int diem = 9;\nprintf(\"Diem: %d\", diem);</pre>",
        "options": [
          "Diem: 9",
          "Diem: %d",
          "Diem: diem"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%.2f\", 5.0);</pre>",
        "options": [
          "5.00",
          "5",
          "5.0"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"X\\nY\\nZ\");</pre>",
        "options": [
          "X, Y, Z trên 3 dòng",
          "XYZ trên 1 dòng",
          "X\\nY\\nZ nguyên văn"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Dùng nhầm <code>%d</code> để in một biến <code>float</code> sẽ?",
        "options": [
          "Ra số sai (không như mong đợi)",
          "In hoàn toàn đúng",
          "Máy tự sửa giúp"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Quên dấu <code>;</code> ở cuối câu lệnh thì?",
        "options": [
          "Báo lỗi khi biên dịch",
          "Vẫn chạy bình thường",
          "Máy tự thêm vào"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Viết <code>char c = \"A\";</code> (dùng nháy kép) là?",
        "options": [
          "Sai — ký tự phải dùng nháy đơn 'A'",
          "Đúng hoàn toàn",
          "Tùy trình biên dịch"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Đặt tên biến là <code>diem toan</code> (có khoảng trắng) là?",
        "options": [
          "Sai — tên biến không được có khoảng trắng",
          "Hợp lệ bình thường",
          "Chỉ sai trên Windows"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Hai lệnh <code>printf</code> liên tiếp mà KHÔNG có <code>\\n</code> thì?",
        "options": [
          "Chữ in ra dính liền nhau",
          "Tự động xuống dòng",
          "Báo lỗi"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Khai báo <code>int 2so = 5;</code> (tên bắt đầu bằng số) là?",
        "options": [
          "Sai — tên biến không được bắt đầu bằng số",
          "Hợp lệ",
          "Chỉ cảnh báo nhẹ"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Viết <code>float x = 1,5;</code> (dùng dấu phẩy) là?",
        "options": [
          "Sai — số thực phải dùng dấu chấm: 1.5",
          "Đúng",
          "Tùy quốc gia"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Lưu file với đuôi <code>.txt</code> thay vì <code>.c</code> thì?",
        "options": [
          "Không được nhận diện/biên dịch đúng như C",
          "Vẫn chạy như C bình thường",
          "Chạy nhanh hơn"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Đặt tên biến trùng từ khóa (vd <code>int int;</code>) thì?",
        "options": [
          "Báo lỗi",
          "Hợp lệ",
          "Máy tự đổi tên"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — <code>%.2f</code> dùng cho kiểu nào là đúng?",
        "options": [
          "float (số thực)",
          "int (số nguyên)",
          "char (ký tự)"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Quên <code>#include &lt;stdio.h&gt;</code> nhưng vẫn dùng <code>printf</code> thì?",
        "options": [
          "Có thể báo lỗi / cảnh báo khi biên dịch",
          "Luôn chạy hoàn hảo",
          "Tự thêm thư viện khác"
        ],
        "answer": 0
      }
    ]
  },
  "buoi-3-4": {
    "title": "Kiểm tra Buổi 3–4",
    "durationMin": 50,
    "questions": [
      {
        "q": "Lệnh nào dùng để NHẬP dữ liệu từ bàn phím?",
        "options": [
          "printf",
          "scanf",
          "include"
        ],
        "answer": 1
      },
      {
        "q": "Trong <code>scanf</code>, trước tên biến cần ký hiệu gì?",
        "options": [
          "&",
          "*",
          "#"
        ],
        "answer": 0
      },
      {
        "q": "Để nhập một số nguyên (int) dùng ký hiệu nào?",
        "options": [
          "%d",
          "%f",
          "%c"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử <code>%</code> có ý nghĩa gì?",
        "options": [
          "Chia lấy phần dư",
          "Tính phần trăm",
          "Chia lấy phần nguyên thập phân"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử so sánh BẰNG nhau là?",
        "options": [
          "=",
          "==",
          "!="
        ],
        "answer": 1
      },
      {
        "q": "Toán tử <code>!=</code> nghĩa là?",
        "options": [
          "Bằng nhau",
          "Khác nhau",
          "Lớn hơn"
        ],
        "answer": 1
      },
      {
        "q": "Toán tử <code>&amp;&amp;</code> nghĩa là?",
        "options": [
          "VÀ",
          "HOẶC",
          "PHỦ ĐỊNH"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử <code>||</code> nghĩa là?",
        "options": [
          "VÀ",
          "HOẶC",
          "KHÁC"
        ],
        "answer": 1
      },
      {
        "q": "Toán tử <code>!</code> nghĩa là?",
        "options": [
          "Phủ định (đảo đúng/sai)",
          "Cộng thêm 1",
          "So sánh lớn hơn"
        ],
        "answer": 0
      },
      {
        "q": "Phần <code>else</code> chạy khi nào?",
        "options": [
          "Khi điều kiện if SAI",
          "Khi điều kiện if ĐÚNG",
          "Luôn luôn chạy"
        ],
        "answer": 0
      },
      {
        "q": "Khi có nhiều hơn 2 trường hợp, ta dùng?",
        "options": [
          "else if",
          "nhiều printf",
          "scanf"
        ],
        "answer": 0
      },
      {
        "q": "Điều kiện kiểm tra số chẵn là?",
        "options": [
          "n % 2 == 0",
          "n / 2 == 0",
          "n % 2 == 1"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử <code>%</code> dùng được với kiểu nào?",
        "options": [
          "Số nguyên (int)",
          "Số thực (float)",
          "Mọi kiểu"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 7 + 2);</pre>",
        "options": [
          "9",
          "72",
          "7 + 2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 7 * 2);</pre>",
        "options": [
          "14",
          "72",
          "9"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì? (hai số nguyên)<pre class=\"q-code\">printf(\"%d\", 7 / 2);</pre>",
        "options": [
          "3",
          "3.5",
          "4"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 7 % 2);</pre>",
        "options": [
          "1",
          "3",
          "0"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 2 + 3 * 4);</pre>",
        "options": [
          "14",
          "20",
          "24"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", (2 + 3) * 4);</pre>",
        "options": [
          "20",
          "14",
          "24"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%.1f\", 7.0 / 2);</pre>",
        "options": [
          "3.5",
          "3.0",
          "3"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 10 % 4);</pre>",
        "options": [
          "2",
          "2.5",
          "1"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">if (5 > 3) printf(\"A\");\nelse printf(\"B\");</pre>",
        "options": [
          "A",
          "B",
          "AB"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int n = 8;\nif (n % 2 == 0) printf(\"Chan\");\nelse printf(\"Le\");</pre>",
        "options": [
          "Chan",
          "Le",
          "8"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int n = -4;\nif (n > 0) printf(\"Duong\");\nelse if (n < 0) printf(\"Am\");\nelse printf(\"Khong\");</pre>",
        "options": [
          "Am",
          "Duong",
          "Khong"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int a = 5;\nif (a >= 5 && a < 10) printf(\"OK\");\nelse printf(\"NO\");</pre>",
        "options": [
          "OK",
          "NO",
          "Báo lỗi"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 3 + 4 * 2 - 1);</pre>",
        "options": [
          "10",
          "13",
          "14"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 6 / 4);</pre>",
        "options": [
          "1",
          "1.5",
          "2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int a = 9, b = 2;\nprintf(\"%d\", a % b);</pre>",
        "options": [
          "1",
          "4",
          "4.5"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Điều kiện nào đúng để in \"Yes\"?<pre class=\"q-code\">int x = 7;\nif (x % 2 == 1) printf(\"Yes\");</pre>",
        "options": [
          "In Yes (vì 7 lẻ)",
          "Không in gì",
          "Báo lỗi"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Trong C, <code>5 / 2</code> (hai số nguyên) cho kết quả?",
        "options": [
          "2 (cắt phần thập phân)",
          "2.5",
          "3"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Muốn <code>5 / 2</code> ra <b>2.5</b> thì?",
        "options": [
          "Cho ít nhất một số là thực: 5.0 / 2",
          "Không thể được",
          "Dùng dấu %"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Lỗi hay gặp: dùng <code>=</code> thay vì <code>==</code> trong if. <code>if (n = 5)</code> nghĩa là?",
        "options": [
          "Gán 5 cho n → điều kiện luôn đúng",
          "So sánh n với 5",
          "Báo lỗi cú pháp"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Quên dấu <code>&amp;</code> trong <code>scanf(\"%d\", x)</code> sẽ?",
        "options": [
          "Nhập sai / lỗi lúc chạy",
          "Vẫn đúng",
          "Tự thêm &"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Câu nào nhập số nguyên đúng?",
        "options": [
          "scanf(\"%d\", &n);",
          "scanf(\"%d\", n);",
          "scanf(\"%f\", &n);"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Trong biểu thức, phép nào ưu tiên cao hơn?",
        "options": [
          "Nhân, chia (* /)",
          "Cộng, trừ (+ -)",
          "Bằng nhau (cùng mức)"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — <code>(a &gt; b) &amp;&amp; (c &lt; d)</code> đúng khi nào?",
        "options": [
          "Cả hai điều kiện đều đúng",
          "Một trong hai đúng",
          "Cả hai đều sai"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Chuỗi <code>if – else if</code> xét các điều kiện như thế nào?",
        "options": [
          "Từ trên xuống, trúng cái đúng đầu tiên thì dừng",
          "Chạy tất cả các nhánh",
          "Chạy nhánh cuối"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Xếp loại điểm (≥8 Giỏi, ≥6.5 Khá…) nên xét thứ tự?",
        "options": [
          "Từ điểm cao xuống thấp",
          "Từ điểm thấp lên cao",
          "Thứ tự nào cũng đúng"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Dấu ngoặc <code>( )</code> trong biểu thức để làm gì?",
        "options": [
          "Ép thứ tự tính trước",
          "Kết thúc câu lệnh",
          "Khai báo biến"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Số lẻ được nhận biết bằng điều kiện?",
        "options": [
          "n % 2 == 1",
          "n % 2 == 0",
          "n / 2 == 1"
        ],
        "answer": 0
      }
    ]
  },
  "giua-ky": {
    "title": "Kiểm tra GIỮA KỲ (Buổi 1–6)",
    "durationMin": 60,
    "questions": [
      {
        "q": "Lệnh nào dùng để in ra màn hình?",
        "options": [
          "printf",
          "scanf",
          "include"
        ],
        "answer": 0
      },
      {
        "q": "Đuôi file đúng của chương trình C?",
        "options": [
          ".c",
          ".cpp",
          ".txt"
        ],
        "answer": 0
      },
      {
        "q": "Phím tắt Biên dịch &amp; chạy trong Dev-C++?",
        "options": [
          "F11",
          "F9",
          "F10"
        ],
        "answer": 0
      },
      {
        "q": "Ký tự <code>\\n</code> có tác dụng?",
        "options": [
          "Xuống dòng",
          "In chữ n",
          "Xóa màn hình"
        ],
        "answer": 0
      },
      {
        "q": "Cuối mỗi câu lệnh phải có?",
        "options": [
          "Dấu chấm phẩy ;",
          "Dấu phẩy ,",
          "Dấu chấm ."
        ],
        "answer": 0
      },
      {
        "q": "Chương trình C bắt đầu chạy từ?",
        "options": [
          "Hàm main()",
          "Dòng #include",
          "Dòng cuối"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">printf(\"Hi\\n\");</pre>",
        "options": [
          "Hi rồi xuống dòng",
          "Hi\\n nguyên văn",
          "Báo lỗi"
        ],
        "answer": 0
      },
      {
        "q": "Kiểu nào lưu số nguyên?",
        "options": [
          "int",
          "float",
          "char"
        ],
        "answer": 0
      },
      {
        "q": "Kiểu nào lưu số thực?",
        "options": [
          "float",
          "int",
          "char"
        ],
        "answer": 0
      },
      {
        "q": "Kiểu <code>char</code> lưu gì?",
        "options": [
          "Một ký tự",
          "Một câu",
          "Số thực"
        ],
        "answer": 0
      },
      {
        "q": "Ký hiệu in cho float?",
        "options": [
          "%f",
          "%d",
          "%c"
        ],
        "answer": 0
      },
      {
        "q": "Giá trị char đặt trong dấu?",
        "options": [
          "Nháy đơn 'A'",
          "Nháy kép \"A\"",
          "Ngoặc (A)"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">printf(\"%.2f\", 3.14159);</pre>",
        "options": [
          "3.14",
          "3.14159",
          "3"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ Dùng %d cho biến float sẽ?",
        "options": [
          "Ra số sai",
          "Đúng hoàn toàn",
          "Máy tự sửa"
        ],
        "answer": 0
      },
      {
        "q": "Tên biến nào KHÔNG hợp lệ?",
        "options": [
          "diem toan",
          "diem_toan",
          "_diem"
        ],
        "answer": 0
      },
      {
        "q": "Lệnh nhập từ bàn phím?",
        "options": [
          "scanf",
          "printf",
          "main"
        ],
        "answer": 0
      },
      {
        "q": "Trong scanf, trước tên biến cần?",
        "options": [
          "&",
          "*",
          "#"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">printf(\"%d\", 5 + 2);</pre>",
        "options": [
          "7",
          "52",
          "5+2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì? (số nguyên)<pre class=\"q-code\">printf(\"%d\", 9 / 2);</pre>",
        "options": [
          "4",
          "4.5",
          "5"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">printf(\"%d\", 9 % 2);</pre>",
        "options": [
          "1",
          "4",
          "0"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">printf(\"%d\", 2 + 3 * 4);</pre>",
        "options": [
          "14",
          "20",
          "24"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ Muốn 5/2 ra 2.5 thì?",
        "options": [
          "Dùng 5.0 / 2",
          "Không được",
          "Dùng %"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử % dùng cho kiểu?",
        "options": [
          "Số nguyên",
          "Số thực",
          "Mọi kiểu"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử so sánh bằng?",
        "options": [
          "==",
          "=",
          "!="
        ],
        "answer": 0
      },
      {
        "q": "Phân biệt = và ==?",
        "options": [
          "= gán, == so sánh",
          "Giống nhau",
          "= so sánh, == gán"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử && nghĩa là?",
        "options": [
          "VÀ",
          "HOẶC",
          "KHÁC"
        ],
        "answer": 0
      },
      {
        "q": "Toán tử || nghĩa là?",
        "options": [
          "HOẶC",
          "VÀ",
          "PHỦ ĐỊNH"
        ],
        "answer": 0
      },
      {
        "q": "Điều kiện số chẵn?",
        "options": [
          "n % 2 == 0",
          "n / 2 == 0",
          "n % 2 == 1"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">int n = 7;\nif (n % 2 == 0) printf(\"Chan\");\nelse printf(\"Le\");</pre>",
        "options": [
          "Le",
          "Chan",
          "7"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">int a = 3;\nif (a > 5) printf(\"X\");\nelse printf(\"Y\");</pre>",
        "options": [
          "Y",
          "X",
          "XY"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <code>if (n = 5)</code> (dùng =) nghĩa là?",
        "options": [
          "Gán 5 cho n → luôn đúng",
          "So sánh n với 5",
          "Lỗi cú pháp"
        ],
        "answer": 0
      },
      {
        "q": "Chuỗi if-else if xét điều kiện?",
        "options": [
          "Từ trên xuống, trúng cái đúng đầu tiên",
          "Chạy hết tất cả",
          "Chạy nhánh cuối"
        ],
        "answer": 0
      },
      {
        "q": "Vòng lặp for gồm mấy phần trong ngoặc?",
        "options": [
          "3 phần",
          "2 phần",
          "1 phần"
        ],
        "answer": 0
      },
      {
        "q": "<code>i++</code> tương đương?",
        "options": [
          "i = i + 1",
          "i = i - 1",
          "i = 1"
        ],
        "answer": 0
      },
      {
        "q": "<code>for (i=1; i&lt;=10; i++)</code> chạy bao nhiêu lần?",
        "options": [
          "10",
          "9",
          "11"
        ],
        "answer": 0
      },
      {
        "q": "while kiểm tra điều kiện khi nào?",
        "options": [
          "Trước mỗi vòng",
          "Sau mỗi vòng",
          "Không kiểm tra"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ Quên i++ trong while gây ra?",
        "options": [
          "Lặp vô hạn",
          "Lỗi biên dịch",
          "Chạy 1 lần"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">for (int i = 1; i <= 3; i++)\n    printf(\"%d\", i);</pre>",
        "options": [
          "123",
          "1234",
          "111"
        ],
        "answer": 0
      },
      {
        "q": "Tổng 1 + 2 + ... + 5 bằng?",
        "options": [
          "15",
          "10",
          "20"
        ],
        "answer": 0
      },
      {
        "q": "🔎 Vòng lặp in số cuối là?<pre class=\"q-code\">for (int i = 1; i <= 5; i++)\n    printf(\"%d\\n\", i);</pre>",
        "options": [
          "5",
          "4",
          "6"
        ],
        "answer": 0
      },
      {
        "q": "<code>for (i=2; i&lt;=10; i++)</code> chạy mấy lần?",
        "options": [
          "9",
          "10",
          "8"
        ],
        "answer": 0
      },
      {
        "q": "Vòng lặp lồng vẽ tam giác: vòng NGOÀI điều khiển?",
        "options": [
          "Số dòng",
          "Số sao mỗi dòng",
          "Màu sắc"
        ],
        "answer": 0
      },
      {
        "q": "Trong menu máy tính, để tránh chia cho 0 ta?",
        "options": [
          "Kiểm tra if (b == 0)",
          "Cứ chia",
          "Bỏ qua"
        ],
        "answer": 0
      },
      {
        "q": "Để lặp lại menu tới khi chọn Thoát, dùng?",
        "options": [
          "Vòng lặp while",
          "1 lệnh printf",
          "1 biến char"
        ],
        "answer": 0
      },
      {
        "q": "Tổng các số chia hết cho 3 hoặc 5, điều kiện?",
        "options": [
          "i % 3 == 0 || i % 5 == 0",
          "i % 3 == 0 && i % 5 == 0",
          "i % 15 == 0"
        ],
        "answer": 0
      },
      {
        "q": "🔎 In ra gì?<pre class=\"q-code\">for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++)\n        printf(\"*\");\n    printf(\"\\n\");\n}</pre>",
        "options": [
          "*, **, *** (3 dòng tăng dần)",
          "*** , **, * (giảm dần)",
          "9 dấu sao 1 dòng"
        ],
        "answer": 0
      },
      {
        "q": "🔎 Đếm bao nhiêu số chia hết 3 từ 1..10?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "answer": 0
      },
      {
        "q": "Lỗi kinh điển khi mới học là?",
        "options": [
          "Quên ; và nhầm = với ==",
          "Viết quá nhiều hàm",
          "Tên biến quá dài"
        ],
        "answer": 0
      },
      {
        "q": "Cách học hiệu quả nhất?",
        "options": [
          "Tự gõ code + làm bài tập đều",
          "Chỉ đọc lý thuyết",
          "Học thuộc lòng"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d\", 10 - 4 * 2);</pre>",
        "options": [
          "2",
          "12",
          "8"
        ],
        "answer": 0
      }
    ]
  }
};

module.exports = { EXAMS };
