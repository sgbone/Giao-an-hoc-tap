/* Ngân hàng ĐỀ KIỂM TRA (server-side, CÓ đáp án).
   File bắt đầu bằng "_" nên Vercel KHÔNG expose thành route.
   Client không bao giờ nhận được trường "answer". */

const EXAMS = {
  "buoi-1-2": {
    title: "Kiểm tra Buổi 1–2",
    durationMin: 50,
    questions: [
      /* ---------- LÝ THUYẾT ---------- */
      { q: "Lệnh nào dùng để in ra màn hình?", options: ["printf", "scanf", "include"], answer: 0 },
      { q: "Đuôi file đúng để lưu chương trình C là gì?", options: [".cpp", ".c", ".txt"], answer: 1 },
      { q: "Phím tắt <b>Biên dịch &amp; chạy</b> trong Dev-C++?", options: ["F9", "F10", "F11"], answer: 2 },
      { q: "Ký tự <code>\\n</code> trong printf có tác dụng gì?", options: ["In chữ n", "Xuống dòng", "Xóa màn hình"], answer: 1 },
      { q: "Cuối mỗi câu lệnh trong C bắt buộc có ký tự gì?", options: ["Dấu phẩy ,", "Dấu chấm .", "Dấu chấm phẩy ;"], answer: 2 },
      { q: "Dòng nào khai báo dùng thư viện nhập/xuất chuẩn?", options: ["#include &lt;stdio.h&gt;", "int main()", "return 0;"], answer: 0 },
      { q: "Chương trình C bắt đầu chạy từ đâu?", options: ["Dòng #include", "Hàm int main()", "Dòng cuối cùng"], answer: 1 },
      { q: "<code>return 0;</code> ở cuối main nghĩa là gì?", options: ["Kết thúc thành công", "In ra số 0", "Bắt đầu chương trình"], answer: 0 },
      { q: "Kiểu <code>int</code> dùng để lưu gì?", options: ["Số nguyên", "Số thực", "Một câu"], answer: 0 },
      { q: "Kiểu nào lưu được số thực như 3.14?", options: ["float", "int", "char"], answer: 0 },
      { q: "Kiểu <code>char</code> lưu được gì?", options: ["Một ký tự duy nhất", "Một câu dài", "Một số thực"], answer: 0 },
      { q: "Ký hiệu định dạng nào dùng cho <code>int</code>?", options: ["%d", "%f", "%c"], answer: 0 },
      { q: "Ký hiệu định dạng nào dùng cho <code>float</code>?", options: ["%c", "%f", "%d"], answer: 1 },
      { q: "Ký hiệu định dạng nào dùng cho <code>char</code>?", options: ["%c", "%d", "%s"], answer: 0 },

      /* ---------- ĐỌC CODE → ĐOÁN OUTPUT ---------- */
      { q: "🔎 <b>Đọc code</b> — Đoạn sau in ra gì?<pre class=\"q-code\">printf(\"Hello, World!\\n\");</pre>", options: ["Hello, World!", "Hello, World!\\n", "Báo lỗi"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — Kết quả là?<pre class=\"q-code\">printf(\"%d\", 5 + 3);</pre>", options: ["8", "53", "5 + 3"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int a = 7;\nprintf(\"%d\", a);</pre>", options: ["7", "a", "%d"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%c\", 'A');</pre>", options: ["A", "'A'", "65"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%.2f\", 3.14159);</pre>", options: ["3.14", "3.14159", "3"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%d %d\", 2, 5);</pre>", options: ["2 5", "25", "%d %d"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — Kết quả cuối cùng của <code>a</code>?<pre class=\"q-code\">int a = 5;\na = 10;\nprintf(\"%d\", a);</pre>", options: ["10", "5", "15"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"AB\\nC\");</pre>", options: ["AB, xuống dòng, rồi C (2 dòng)", "ABC trên cùng 1 dòng", "AB\\nC nguyên văn"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">float x = 2.5;\nprintf(\"%.1f\", x);</pre>", options: ["2.5", "2.50", "2"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">char k = 'Z';\nprintf(\"%c\", k);</pre>", options: ["Z", "k", "'Z'"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"Toan\");\nprintf(\"Hoc\");</pre>", options: ["ToanHoc (dính liền)", "Toan Hoc (có dấu cách)", "Toan và Hoc trên 2 dòng"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"2 + 3\");</pre>", options: ["2 + 3 (in nguyên văn)", "5", "Báo lỗi"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">int diem = 9;\nprintf(\"Diem: %d\", diem);</pre>", options: ["Diem: 9", "Diem: %d", "Diem: diem"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"%.2f\", 5.0);</pre>", options: ["5.00", "5", "5.0"], answer: 0 },
      { q: "🔎 <b>Đọc code</b> — In ra gì?<pre class=\"q-code\">printf(\"X\\nY\\nZ\");</pre>", options: ["X, Y, Z trên 3 dòng", "XYZ trên 1 dòng", "X\\nY\\nZ nguyên văn"], answer: 0 },

      /* ---------- MẸO / CÂU HAY SAI ---------- */
      { q: "⚠️ <b>Mẹo</b> — Dùng nhầm <code>%d</code> để in một biến <code>float</code> sẽ?", options: ["Ra số sai (không như mong đợi)", "In hoàn toàn đúng", "Máy tự sửa giúp"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Quên dấu <code>;</code> ở cuối câu lệnh thì?", options: ["Báo lỗi khi biên dịch", "Vẫn chạy bình thường", "Máy tự thêm vào"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Viết <code>char c = \"A\";</code> (dùng nháy kép) là?", options: ["Sai — ký tự phải dùng nháy đơn 'A'", "Đúng hoàn toàn", "Tùy trình biên dịch"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Đặt tên biến là <code>diem toan</code> (có khoảng trắng) là?", options: ["Sai — tên biến không được có khoảng trắng", "Hợp lệ bình thường", "Chỉ sai trên Windows"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Hai lệnh <code>printf</code> liên tiếp mà KHÔNG có <code>\\n</code> thì?", options: ["Chữ in ra dính liền nhau", "Tự động xuống dòng", "Báo lỗi"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Khai báo <code>int 2so = 5;</code> (tên bắt đầu bằng số) là?", options: ["Sai — tên biến không được bắt đầu bằng số", "Hợp lệ", "Chỉ cảnh báo nhẹ"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Viết <code>float x = 1,5;</code> (dùng dấu phẩy) là?", options: ["Sai — số thực phải dùng dấu chấm: 1.5", "Đúng", "Tùy quốc gia"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Lưu file với đuôi <code>.txt</code> thay vì <code>.c</code> thì?", options: ["Không được nhận diện/biên dịch đúng như C", "Vẫn chạy như C bình thường", "Chạy nhanh hơn"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Đặt tên biến trùng từ khóa (vd <code>int int;</code>) thì?", options: ["Báo lỗi", "Hợp lệ", "Máy tự đổi tên"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — <code>%.2f</code> dùng cho kiểu nào là đúng?", options: ["float (số thực)", "int (số nguyên)", "char (ký tự)"], answer: 0 },
      { q: "⚠️ <b>Mẹo</b> — Quên <code>#include &lt;stdio.h&gt;</code> nhưng vẫn dùng <code>printf</code> thì?", options: ["Có thể báo lỗi / cảnh báo khi biên dịch", "Luôn chạy hoàn hảo", "Tự thêm thư viện khác"], answer: 0 }
    ]
  }
};

module.exports = { EXAMS };
