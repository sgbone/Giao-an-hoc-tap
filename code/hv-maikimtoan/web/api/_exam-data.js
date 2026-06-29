/* Ngân hàng ĐỀ KIỂM TRA (server-side, CÓ đáp án).
   File bắt đầu bằng "_" nên Vercel KHÔNG expose thành route.
   Client không bao giờ nhận được trường "answer".
   Câu có "answer" là MẢNG = câu chọn nhiều đáp án. */

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
        "q": "Những kiểu dữ liệu CƠ BẢN đã học là? <i>(chọn nhiều)</i>",
        "options": [
          "int",
          "float",
          "char",
          "string"
        ],
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "q": "Toán tử nào là toán tử LOGIC? <i>(chọn nhiều)</i>",
        "options": [
          "&&",
          "||",
          "!",
          "%"
        ],
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "q": "Lệnh nào tạo VÒNG LẶP? <i>(chọn nhiều)</i>",
        "options": [
          "for",
          "while",
          "if",
          "printf"
        ],
        "answer": [
          0,
          1
        ]
      },
      {
        "q": "Câu nào ĐÚNG về định dạng in? <i>(chọn nhiều)</i>",
        "options": [
          "%d cho int",
          "%f cho float",
          "%c cho char",
          "%d cho float"
        ],
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "q": "Lỗi nào khiến chương trình KHÔNG biên dịch được? <i>(chọn nhiều)</i>",
        "options": [
          "Thiếu dấu ;",
          "Thiếu dấu } đóng hàm",
          "Quên \\n khi in"
        ],
        "answer": [
          0,
          1
        ]
      },
      {
        "q": "Toán tử nào là toán tử SO SÁNH? <i>(chọn nhiều)</i>",
        "options": [
          "==",
          "!=",
          ">=",
          "="
        ],
        "answer": [
          0,
          1,
          2
        ]
      }
    ]
  },
  "buoi-7": {
    "title": "Kiểm tra Buổi 7",
    "durationMin": 50,
    "questions": [
      {
        "q": "Mảng (array) là gì?",
        "options": [
          "Một dãy nhiều ô nhớ cùng kiểu",
          "Một biến chứa 1 giá trị",
          "Một câu lệnh in"
        ],
        "answer": 0
      },
      {
        "q": "Chỉ số mảng trong C bắt đầu từ?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "answer": 0
      },
      {
        "q": "<code>int a[5];</code> tạo ra bao nhiêu ô?",
        "options": [
          "5",
          "4",
          "6"
        ],
        "answer": 0
      },
      {
        "q": "Với <code>int a[5];</code>, ô CUỐI cùng là?",
        "options": [
          "a[4]",
          "a[5]",
          "a[0]"
        ],
        "answer": 0
      },
      {
        "q": "Phần tử ĐẦU tiên của mảng a là?",
        "options": [
          "a[0]",
          "a[1]",
          "a"
        ],
        "answer": 0
      },
      {
        "q": "Vòng lặp duyệt mảng n phần tử đúng là?",
        "options": [
          "for(i=0;i<n;i++)",
          "for(i=1;i<=n;i++)",
          "for(i=0;i<=n;i++)"
        ],
        "answer": 0
      },
      {
        "q": "Câu nhập <code>a[i]</code> (int) đúng?",
        "options": [
          "scanf(\"%d\", &a[i]);",
          "scanf(\"%d\", a[i]);",
          "scanf(\"%f\", &a[i]);"
        ],
        "answer": 0
      },
      {
        "q": "Lệnh in giá trị <code>a[i]</code> (int)?",
        "options": [
          "printf(\"%d\", a[i]);",
          "printf(\"%d\", &a[i]);",
          "printf(\"%c\", a[i]);"
        ],
        "answer": 0
      },
      {
        "q": "Để tính tổng mảng, trong vòng lặp ta viết?",
        "options": [
          "tong = tong + a[i];",
          "tong = a[i];",
          "tong = tong + i;"
        ],
        "answer": 0
      },
      {
        "q": "Tìm max thường khởi tạo max bằng?",
        "options": [
          "a[0]",
          "0",
          "n"
        ],
        "answer": 0
      },
      {
        "q": "Đếm phần tử chẵn dùng?",
        "options": [
          "if(a[i]%2==0) dem++;",
          "if(i%2==0) dem++;",
          "if(a[i]==0) dem++;"
        ],
        "answer": 0
      },
      {
        "q": "Khai báo mảng 100 số nguyên?",
        "options": [
          "int a[100];",
          "int a(100);",
          "array a[100];"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Giá trị <code>a[0]</code>?<pre class=\"q-code\">int a[5] = {4, 7, 2, 9, 5};</pre>",
        "options": [
          "4",
          "7",
          "5"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Giá trị <code>a[2]</code>?<pre class=\"q-code\">int a[5] = {4, 7, 2, 9, 5};</pre>",
        "options": [
          "2",
          "7",
          "9"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Giá trị <code>a[4]</code>?<pre class=\"q-code\">int a[5] = {4, 7, 2, 9, 5};</pre>",
        "options": [
          "5",
          "9",
          "4"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Tổng các phần tử?<pre class=\"q-code\">int a[4] = {1, 2, 3, 4};</pre>",
        "options": [
          "10",
          "9",
          "24"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Giá trị lớn nhất?<pre class=\"q-code\">int a[4] = {3, 9, 2, 7};</pre>",
        "options": [
          "9",
          "7",
          "3"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Giá trị nhỏ nhất?<pre class=\"q-code\">int a[4] = {5, 2, 8, 1};</pre>",
        "options": [
          "1",
          "2",
          "5"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Đếm số chẵn?<pre class=\"q-code\">int a[6] = {1, 2, 3, 4, 5, 6};</pre>",
        "options": [
          "3",
          "2",
          "6"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Đếm số dương?<pre class=\"q-code\">int a[4] = {-1, 2, -3, 4};</pre>",
        "options": [
          "2",
          "1",
          "4"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int a[3] = {5, 6, 7};\nfor (int i = 0; i < 3; i++)\n    printf(\"%d\", a[i]);</pre>",
        "options": [
          "567",
          "5 6 7",
          "765"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>a[1] + a[2]</code> bằng?<pre class=\"q-code\">int a[3] = {10, 20, 30};</pre>",
        "options": [
          "50",
          "30",
          "60"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Số 3 xuất hiện mấy lần?<pre class=\"q-code\">int a[5] = {3, 1, 3, 2, 3};</pre>",
        "options": [
          "3",
          "2",
          "1"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In đảo ngược?<pre class=\"q-code\">int a[3] = {1, 2, 3};\nfor (int i = 2; i >= 0; i--)\n    printf(\"%d \", a[i]);</pre>",
        "options": [
          "3 2 1",
          "1 2 3",
          "3 1 2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Trung bình cộng (float)?<pre class=\"q-code\">int a[4] = {4, 6, 8, 2};</pre>",
        "options": [
          "5.00",
          "20.00",
          "4.00"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Mảng có mấy phần tử?<pre class=\"q-code\">int a[] = {2, 4, 6, 8};</pre>",
        "options": [
          "4",
          "3",
          "8"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Sau lệnh này <code>a[2]</code>?<pre class=\"q-code\">int a[5] = {1, 2, 3, 4, 5};\na[2] = 99;</pre>",
        "options": [
          "99",
          "3",
          "2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>a[n-1]</code> với n=4?<pre class=\"q-code\">int a[4] = {10, 20, 30, 40};\nint n = 4;</pre>",
        "options": [
          "40",
          "30",
          "10"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Đếm phần tử lớn hơn 5?<pre class=\"q-code\">int a[5] = {3, 8, 6, 1, 9};</pre>",
        "options": [
          "3",
          "2",
          "4"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Với <code>int a[5];</code>, truy cập <code>a[5]</code> là?",
        "options": [
          "Sai — vượt khỏi mảng (ô cuối là a[4])",
          "Đúng — phần tử thứ 5",
          "Luôn an toàn"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Chỉ số mảng bắt đầu từ?",
        "options": [
          "0 (không phải 1)",
          "1",
          "Tùy chọn"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Duyệt mảng nên dùng điều kiện?",
        "options": [
          "i < n (tránh vượt mảng)",
          "i <= n",
          "i < n+1"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Nhập phần tử mảng vẫn cần?",
        "options": [
          "Dấu & : scanf(\"%d\", &a[i])",
          "Không cần &",
          "Dùng %s"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Mảng dùng để?",
        "options": [
          "Lưu nhiều giá trị cùng kiểu",
          "Lưu 1 giá trị",
          "Lưu nhiều kiểu khác nhau"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Khởi tạo biến đếm <code>dem</code> trước vòng lặp nên là?",
        "options": [
          "0",
          "1",
          "a[0]"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Biến tổng <code>tong</code> nên khởi tạo là?",
        "options": [
          "0",
          "1",
          "a[0]"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Số ô của mảng bằng?",
        "options": [
          "Kích thước khai báo",
          "Luôn là 100",
          "Số phần tử nhập vào"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Khai báo mảng số thực 10 phần tử?",
        "options": [
          "float a[10];",
          "int a[10];",
          "a[10] float;"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Truy cập <code>a[i]</code> khi i ≥ n sẽ?",
        "options": [
          "Cho giá trị rác / lỗi (vượt mảng)",
          "Luôn cho 0",
          "Tự quay lại a[0]"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Để lưu điểm 30 học sinh nên dùng?",
        "options": [
          "Mảng float a[30];",
          "30 biến riêng",
          "1 biến char"
        ],
        "answer": 0
      }
    ]
  },
  "buoi-8": {
    "title": "Kiểm tra Buổi 8",
    "durationMin": 50,
    "questions": [
      {
        "q": "Chuỗi ký tự trong C thực chất là?",
        "options": [
          "Mảng các ký tự (char)",
          "Một số nguyên",
          "Một biến float"
        ],
        "answer": 0
      },
      {
        "q": "Chuỗi trong C kết thúc bằng ký tự?",
        "options": [
          "'\\0' (null)",
          "'\\n'",
          "dấu cách"
        ],
        "answer": 0
      },
      {
        "q": "<code>char s[100];</code> chứa tối đa bao nhiêu ký tự thật?",
        "options": [
          "99 (+1 cho '\\0')",
          "100",
          "101"
        ],
        "answer": 0
      },
      {
        "q": "Lệnh nào nhập chuỗi CÓ khoảng trắng?",
        "options": [
          "fgets",
          "scanf(\"%s\")",
          "printf"
        ],
        "answer": 0
      },
      {
        "q": "<code>scanf(\"%s\", s)</code> dừng đọc khi gặp?",
        "options": [
          "Khoảng trắng",
          "Dấu chấm",
          "Số"
        ],
        "answer": 0
      },
      {
        "q": "Thư viện hàm xử lý chuỗi?",
        "options": [
          "#include <string.h>",
          "#include <math.h>",
          "#include <stdlib.h>"
        ],
        "answer": 0
      },
      {
        "q": "<code>strlen(s)</code> trả về?",
        "options": [
          "Độ dài chuỗi",
          "Ký tự đầu",
          "Bản sao"
        ],
        "answer": 0
      },
      {
        "q": "<code>strcpy(d, s)</code> làm gì?",
        "options": [
          "Sao chép s sang d",
          "Nối chuỗi",
          "So sánh"
        ],
        "answer": 0
      },
      {
        "q": "<code>strcat(a, b)</code> làm gì?",
        "options": [
          "Nối b vào sau a",
          "Xóa b",
          "Đếm ký tự"
        ],
        "answer": 0
      },
      {
        "q": "<code>strcmp(s1, s2)</code> trả 0 khi?",
        "options": [
          "Hai chuỗi GIỐNG nhau",
          "Khác nhau",
          "Luôn 0"
        ],
        "answer": 0
      },
      {
        "q": "Truy cập ký tự thứ i của chuỗi s?",
        "options": [
          "s[i]",
          "s(i)",
          "s.i"
        ],
        "answer": 0
      },
      {
        "q": "Vòng lặp duyệt từng ký tự?",
        "options": [
          "for(i=0;i<strlen(s);i++)",
          "for(i=1;i<=strlen(s);i++)",
          "for(i=0;i<=100;i++)"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>strlen(\"Hello\")</code> = ?",
        "options": [
          "5",
          "4",
          "6"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>strlen(\"Lap trinh\")</code> = ?",
        "options": [
          "9",
          "8",
          "10"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>strlen(\"ABC\")</code> = ?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">char a[100] = \"Hello, \";\nstrcat(a, \"World!\");\nprintf(\"%s\", a);</pre>",
        "options": [
          "Hello, World!",
          "World!Hello, ",
          "Hello,World!"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>s[0]</code> là ký tự?<pre class=\"q-code\">char s[] = \"abc\";</pre>",
        "options": [
          "a",
          "b",
          "c"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Số khoảng trắng trong \"a b c\"?",
        "options": [
          "2",
          "3",
          "1"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Số chữ HOA trong \"AbCdE\"?",
        "options": [
          "3",
          "2",
          "5"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>strcmp(\"abc\", \"abc\")</code> trả?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>strcmp(\"abc\", \"abd\")</code>?",
        "options": [
          "Khác 0 (không bằng)",
          "0 (bằng nhau)",
          "Luôn 1"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In đảo ngược \"abc\" cho?",
        "options": [
          "cba",
          "abc",
          "bca"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Số chữ 'a' trong \"banana\"?",
        "options": [
          "3",
          "2",
          "1"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>strlen(\"\")</code> (chuỗi rỗng) = ?",
        "options": [
          "0",
          "1",
          "Lỗi"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Số nguyên âm trong \"hoc lap trinh\"?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Nối họ tên cho?<pre class=\"q-code\">char ht[100] = \"Tran \";\nstrcat(ht, \"Bo\");</pre>",
        "options": [
          "Tran Bo",
          "BoTran",
          "Tran"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Kết quả kiểm tra?<pre class=\"q-code\">char c = 'K';\nif (c >= 'A' && c <= 'Z') printf(\"HOA\");\nelse printf(\"thuong\");</pre>",
        "options": [
          "HOA",
          "thuong",
          "Lỗi"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Đếm số ký tự khác khoảng trắng \"a b\"?",
        "options": [
          "2",
          "3",
          "1"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Viết <code>char c = \"A\";</code> (nháy kép) là?",
        "options": [
          "Sai — ký tự dùng nháy đơn 'A'",
          "Đúng",
          "Tùy trình biên dịch"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Ký tự kết thúc chuỗi là?",
        "options": [
          "'\\0'",
          "'\\n'",
          "' '"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Vì sao không dùng <code>scanf(\"%s\")</code> cho họ tên?",
        "options": [
          "Vì dừng ở khoảng trắng",
          "Vì chỉ đọc số",
          "Vì đọc ngược"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — So sánh 2 chuỗi bằng nhau nên dùng?",
        "options": [
          "strcmp(...) == 0",
          "s1 == s2",
          "s1 = s2"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — <code>char s[100]</code> chứa thật được bao nhiêu ký tự?",
        "options": [
          "99",
          "100",
          "101"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Duyệt chuỗi nên chạy tới?",
        "options": [
          "strlen(s) (độ dài thật)",
          "100",
          "strlen(s)+1"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Chữ thường nằm trong khoảng?",
        "options": [
          "'a' .. 'z'",
          "'A' .. 'Z'",
          "'0' .. '9'"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Nối chuỗi dùng?",
        "options": [
          "strcat",
          "dấu +",
          "strlen"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Hàm <code>strlen</code> cần thư viện?",
        "options": [
          "string.h",
          "stdio.h",
          "math.h"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Ký tự số nằm trong khoảng?",
        "options": [
          "'0' .. '9'",
          "0 .. 9",
          "'a' .. 'z'"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Truy cập ký tự thứ i?",
        "options": [
          "s[i]",
          "s(i)",
          "s->i"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — <code>fgets</code> khác <code>scanf(\"%s\")</code> ở chỗ?",
        "options": [
          "Đọc cả dòng (kể cả khoảng trắng)",
          "Chỉ đọc số",
          "Nhanh hơn"
        ],
        "answer": 0
      }
    ]
  },
  "buoi-9": {
    "title": "Kiểm tra Buổi 9",
    "durationMin": 50,
    "questions": [
      {
        "q": "Hàm (function) dùng để?",
        "options": [
          "Chia nhỏ chương trình, tái sử dụng",
          "Khai báo biến toàn cục",
          "Nhập dữ liệu"
        ],
        "answer": 0
      },
      {
        "q": "Từ khóa trả giá trị về nơi gọi?",
        "options": [
          "return",
          "printf",
          "scanf"
        ],
        "answer": 0
      },
      {
        "q": "Kiểu trả về <code>void</code> nghĩa là?",
        "options": [
          "Không trả về giá trị",
          "Trả về 0",
          "Trả về chuỗi"
        ],
        "answer": 0
      },
      {
        "q": "'Tham số' của hàm là?",
        "options": [
          "Dữ liệu đầu vào",
          "Tên hàm",
          "Kết quả in"
        ],
        "answer": 0
      },
      {
        "q": "Cú pháp khai báo hàm đúng?",
        "options": [
          "kieu ten(thamso){ ... }",
          "ten kieu(thamso){ ... }",
          "function ten(){ ... }"
        ],
        "answer": 0
      },
      {
        "q": "Trong Dev-C++ nên viết hàm phụ ở?",
        "options": [
          "Trên main",
          "Dưới main",
          "Trong main"
        ],
        "answer": 0
      },
      {
        "q": "Có thể gọi một hàm bao nhiêu lần?",
        "options": [
          "Bao nhiêu lần tùy ý",
          "Chỉ 1 lần",
          "Tối đa 2 lần"
        ],
        "answer": 0
      },
      {
        "q": "<code>int cong(int a,int b){return a+b;}</code> trả về kiểu?",
        "options": [
          "int",
          "float",
          "void"
        ],
        "answer": 0
      },
      {
        "q": "Hàm kiểm tra chẵn nên trả kiểu gì cho gọn?",
        "options": [
          "int (1/0)",
          "void",
          "char"
        ],
        "answer": 0
      },
      {
        "q": "Trong ví dụ máy xay: 'trái cây' tương ứng?",
        "options": [
          "Tham số (đầu vào)",
          "Giá trị trả về",
          "Tên hàm"
        ],
        "answer": 0
      },
      {
        "q": "Giá trị return có thể?",
        "options": [
          "Gán vào biến để dùng tiếp",
          "Chỉ in ra",
          "Bị bỏ đi"
        ],
        "answer": 0
      },
      {
        "q": "Lợi ích chính của hàm?",
        "options": [
          "Tránh lặp code, dễ đọc, dễ sửa",
          "Chạy chậm hơn",
          "Bắt buộc để biên dịch"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int cong(int a, int b) { return a + b; }\n// ...\nprintf(\"%d\", cong(3, 5));</pre>",
        "options": [
          "8",
          "35",
          "2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>cong(10, 20)</code> = ?",
        "options": [
          "30",
          "1020",
          "10"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Hàm timMax trả số lớn hơn; <code>timMax(7, 12)</code>?",
        "options": [
          "12",
          "7",
          "19"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>timMax(20, 5)</code>?",
        "options": [
          "20",
          "5",
          "25"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>giaiThua(5)</code> (5!) = ?",
        "options": [
          "120",
          "25",
          "15"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>giaiThua(4)</code> = ?",
        "options": [
          "24",
          "12",
          "16"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>giaiThua(3)</code> = ?",
        "options": [
          "6",
          "9",
          "3"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — Hàm laChan trả 1 nếu chẵn; <code>laChan(8)</code>?",
        "options": [
          "1",
          "0",
          "8"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>laChan(7)</code>?",
        "options": [
          "0",
          "1",
          "7"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — luyThua(a,b)=a^b; <code>luyThua(2, 3)</code>?",
        "options": [
          "8",
          "6",
          "9"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>luyThua(3, 2)</code>?",
        "options": [
          "9",
          "6",
          "8"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — tong1DenN(n)=1+..+n; <code>tong1DenN(5)</code>?",
        "options": [
          "15",
          "10",
          "20"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — <code>tong1DenN(10)</code>?",
        "options": [
          "55",
          "45",
          "50"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — binhPhuong(n)=n*n; <code>binhPhuong(6)</code>?",
        "options": [
          "36",
          "12",
          "66"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int cong(int a, int b) { return a + b; }\nint x = cong(2, 2);\nprintf(\"%d\", x);</pre>",
        "options": [
          "4",
          "22",
          "2"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">void chao() { printf(\"Hi\"); }\nchao();\nchao();</pre>",
        "options": [
          "HiHi",
          "Hi",
          "Hi Hi"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Hàm <code>void</code> thì?",
        "options": [
          "Không dùng return giá trị",
          "Phải return số",
          "Trả về chuỗi"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Viết hàm phụ trong Dev-C++ nên đặt?",
        "options": [
          "Trên hàm main",
          "Dưới main",
          "Trong main"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Tham số là?",
        "options": [
          "Đầu vào của hàm",
          "Kết quả in ra",
          "Tên hàm"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — <code>return</code> trong hàm có tác dụng?",
        "options": [
          "Trả giá trị & kết thúc hàm",
          "Chỉ in ra",
          "Khai báo biến"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Một hàm gọi được mấy lần?",
        "options": [
          "Tùy ý",
          "1 lần",
          "2 lần"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Kiểu trả về của hàm ghi ở đâu?",
        "options": [
          "Ngay trước tên hàm",
          "Sau tên hàm",
          "Trong thân hàm"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Hàm chỉ in ra (không trả giá trị) dùng kiểu?",
        "options": [
          "void",
          "int",
          "float"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Để dùng giá trị hàm trả về, ta?",
        "options": [
          "Gán nó cho một biến",
          "Bỏ qua",
          "Không thể"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Hàm giúp ích gì nhất?",
        "options": [
          "Tái sử dụng, tránh lặp code",
          "Làm chậm chương trình",
          "Tăng dung lượng file"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — <code>cong(int a, int b)</code> có mấy tham số?",
        "options": [
          "2",
          "1",
          "0"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — In kết quả hàm trả int dùng?",
        "options": [
          "printf(\"%d\", ham());",
          "printf(\"%c\", ham());",
          "scanf"
        ],
        "answer": 0
      },
      {
        "q": "⚠️ <b>Mẹo</b> — Quên <code>return</code> trong hàm có kiểu trả về sẽ?",
        "options": [
          "Sai / cảnh báo",
          "Vẫn đúng",
          "Tự trả 0 luôn đúng"
        ],
        "answer": 0
      }
    ]
  },
  "cuoi-ky": {
    "title": "Kiểm tra CUỐI KỲ (Buổi 1–10)",
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
        "q": "Chỉ số mảng trong C bắt đầu từ?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "answer": 0
      },
      {
        "q": "Với <code>int a[5];</code> ô cuối là?",
        "options": [
          "a[4]",
          "a[5]",
          "a[0]"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <code>a[2]</code> bằng?<pre class=\"q-code\">int a[5] = {4, 7, 2, 9, 5};</pre>",
        "options": [
          "2",
          "7",
          "9"
        ],
        "answer": 0
      },
      {
        "q": "Tính tổng mảng trong vòng lặp?",
        "options": [
          "tong = tong + a[i];",
          "tong = a[i];",
          "tong = tong + i;"
        ],
        "answer": 0
      },
      {
        "q": "Duyệt mảng n phần tử?",
        "options": [
          "for(i=0;i<n;i++)",
          "for(i=1;i<=n;i++)",
          "for(i=0;i<=n;i++)"
        ],
        "answer": 0
      },
      {
        "q": "Chuỗi trong C là?",
        "options": [
          "Mảng ký tự",
          "Số nguyên",
          "Biến float"
        ],
        "answer": 0
      },
      {
        "q": "Chuỗi kết thúc bằng?",
        "options": [
          "'\\0'",
          "'\\n'",
          "dấu cách"
        ],
        "answer": 0
      },
      {
        "q": "Nhập chuỗi có khoảng trắng dùng?",
        "options": [
          "fgets",
          "scanf(\"%s\")",
          "printf"
        ],
        "answer": 0
      },
      {
        "q": "🔎 <code>strlen(\"Hello\")</code> = ?",
        "options": [
          "5",
          "4",
          "6"
        ],
        "answer": 0
      },
      {
        "q": "<code>strcmp(s1,s2)</code> trả 0 khi?",
        "options": [
          "Hai chuỗi bằng nhau",
          "Khác nhau",
          "Luôn 0"
        ],
        "answer": 0
      },
      {
        "q": "Hàm dùng để?",
        "options": [
          "Chia nhỏ chương trình",
          "Khai báo biến toàn cục",
          "Nhập dữ liệu"
        ],
        "answer": 0
      },
      {
        "q": "Từ khóa trả giá trị?",
        "options": [
          "return",
          "printf",
          "scanf"
        ],
        "answer": 0
      },
      {
        "q": "Hàm nào thuộc thư viện <code>string.h</code>? <i>(chọn nhiều)</i>",
        "options": [
          "strlen",
          "strcpy",
          "strcat",
          "printf"
        ],
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "q": "Phát biểu nào ĐÚNG về mảng? <i>(chọn nhiều)</i>",
        "options": [
          "Chỉ số bắt đầu từ 0",
          "Các phần tử cùng kiểu",
          "Mảng a[5] có ô a[5]"
        ],
        "answer": [
          0,
          1
        ]
      },
      {
        "q": "Phát biểu nào ĐÚNG về hàm? <i>(chọn nhiều)</i>",
        "options": [
          "return trả về giá trị",
          "void không trả giá trị",
          "tham số là dữ liệu đầu vào",
          "hàm chỉ gọi được 1 lần"
        ],
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "q": "Những kiểu dữ liệu CƠ BẢN là? <i>(chọn nhiều)</i>",
        "options": [
          "int",
          "float",
          "char",
          "string"
        ],
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "q": "Toán tử nào là toán tử LOGIC? <i>(chọn nhiều)</i>",
        "options": [
          "&&",
          "||",
          "!",
          "+"
        ],
        "answer": [
          0,
          1,
          2
        ]
      },
      {
        "q": "Cách nhập dữ liệu nào ĐÚNG? <i>(chọn nhiều)</i>",
        "options": [
          "scanf(\"%d\", &n) cho int",
          "fgets cho chuỗi có khoảng trắng",
          "scanf(\"%s\") đọc được cả khoảng trắng"
        ],
        "answer": [
          0,
          1
        ]
      }
    ]
  }
};

module.exports = { EXAMS };
