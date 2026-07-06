# GIÁO TRÌNH DẠY C++ 1 KÈM 1 — LỘ TRÌNH RÚT GỌN 1 THÁNG (23 BUỔI)
### Bám sát cấu trúc môn PRG1006 — nén từ bản 2 giai đoạn (28 buổi) để vừa khung 1 tháng, 5 buổi/tuần

---

## 0. GHI CHÚ VỀ PHIÊN BẢN NÀY

Đây là bản nén từ file `Giao-trinh-C++-1-kem-1-lo-trinh-2-giai-doan.md` (28 buổi), áp dụng cho tình huống thực tế: **học viên hiện mới học đến mảng một chiều** trong giáo án C căn bản, thời gian chỉ có **1 tháng**, học **5 buổi/tuần** (thời lượng mỗi buổi linh hoạt tùy độ khó), và "qua môn" nghĩa là phải chuẩn bị cho **cả thi cuối kỳ lẫn đồ án**.

### Bài toán số buổi

- Ngân sách thực tế: 5 buổi/tuần × ~4-4.4 tuần trong 1 tháng ≈ **20-22 buổi**.
- Nhu cầu nếu làm đầy đủ như 2 bản giáo án trước: 28 buổi (C++) + 3 buổi bù C còn thiếu (Buổi 8 Chuỗi, Buổi 9 Hàm, Buổi 10 Ôn tập của giáo án C 10 buổi) = **31 buổi**.
- Chênh lệch: **~8-11 buổi**. Đây là con số phải xử lý bằng cách nén, không thể lờ đi.

### Chiến lược nén: KHÔNG cắt đều tay

Tui chia nội dung thành 2 nhóm, xử lý khác nhau hoàn toàn:

**Nhóm 1 — Nền tảng, tuyệt đối không đụng tới độ sâu:** Con trỏ (cơ bản + nâng cao), Cấp phát động, Đệ quy, Đa hình + Trừu tượng, và 2 buổi Checkpoint lớn (Checkpoint Con trỏ/Heap, Checkpoint 4 tính chất OOP). Đây là những chỗ cả 2 bản giáo án trước đều xác nhận là "điểm nghẽn kinh điển" hoặc "khái niệm trừu tượng nhất khóa" — cắt vào đây thì phá luôn mục tiêu "hiểu vững" mà Bò đặt ra.

**Nhóm 2 — Áp dụng kiến thức đã vững, nén mạnh được:** Linked List, `this`/Copy Constructor/Friend, Nạp chồng toán tử, Ngoại lệ. Lý do nén được: một khi con trỏ và 4 tính chất OOP đã chắc (Nhóm 1 xong), các chủ đề này về bản chất là "cú pháp/kỹ thuật mới gắn lên khái niệm đã có sẵn trong đầu", không phải bước nhảy tư duy mới — tốc độ tiếp thu sẽ nhanh hơn hẳn so với lúc học Nhóm 1.

### 2 kiểu nén khác nhau — quan trọng để hiểu rủi ro ở đâu

1. **Nén kiểu "đóng gói lại" (không mất nội dung):** gộp 2 buổi có nội dung liên tục thành 1 buổi dài hơn (90p → 120-150p). Tổng thời gian học gần như không đổi, chỉ giảm số lần phải hẹn gặp nhau. Áp dụng cho: Hàm tham chiếu + truyền mảng; `this` + Copy Constructor/Friend; Nạp chồng toán tử cơ bản + nâng cao; Ngoại lệ + Custom Exception. **Rủi ro thấp.**
2. **Nén kiểu "cắt thật" (giảm nội dung/thời lượng):** rút 1 buổi Checkpoint đầy đủ (90p) xuống còn 1 đoạn review 20-25p gắn vào cuối buổi khác; bỏ hẳn buổi Chuỗi ký tự C và buổi Ôn tập tổng kết C riêng; lướt nhanh phần "method chaining" của `this` thay vì thực hành sâu. Áp dụng cho: Checkpoint Hàm, Checkpoint Linked List, 2 buổi bù C. **Rủi ro cao hơn, có phương án dự phòng ở Mục 9 nếu học viên đuối.**

Nhờ vậy, tổng **số giờ học thực tế giảm không nhiều** (do buổi dài ra bù lại buổi ít đi) — cái giảm chủ yếu là **số lần phải gặp nhau theo lịch**, đúng thứ đang bị bó hẹp bởi 1 tháng.

### Kết quả: 28 + 3 (bù C) = 31 buổi gốc → còn **23 buổi**

---

## 1. TỔNG QUAN

- **Đối tượng:** Học viên đã học C đến hết mảng một chiều, **chưa học** chuỗi ký tự và hàm một cách bài bản, chưa từng học C++, chưa học OOP.
- **Hình thức:** Kèm 1-1.
- **Thời lượng mỗi buổi:** Linh hoạt 90-150 phút tùy độ khó nội dung (ghi rõ ở từng buổi).
- **Tổng số buổi:** 23 buổi (Buổi 0 → Buổi 22), ước tính ~38-42 giờ học, chia 2 giai đoạn.
- **Nhịp học:** 5 buổi/tuần trong khoảng 4-4.5 tuần.
- **Gốc giáo trình:** 11 Module của PRG1006, giữ nguyên nội dung cốt lõi, đổi thứ tự trình bày (theo bản 2 giai đoạn) và nén thêm để vừa 1 tháng.

> **Lưu ý:** Bộ slide trường không có Module 5 ("Classes: Part I"). Buổi 10-11 trong giáo trình này tự soạn để lấp khoảng trống.

---

## 2. GIẢ ĐỊNH ĐẦU VÀO — ĐẦU RA

**Học viên đã biết (tính đến lúc bắt đầu Buổi 0):** biến, kiểu dữ liệu cơ bản, if/else, for/while, mảng một chiều.

**Học viên CHƯA biết, sẽ học ngay từ đầu giáo trình này:**
- Hàm trong C (khai báo, gọi hàm, tham số, return, phạm vi biến) — **bù ở Buổi 0**
- Cú pháp C++ (cin/cout, namespace, bool, string)
- Con trỏ nâng cao, con trỏ đôi, cấp phát động (new/delete)
- Tham chiếu (reference)
- Toàn bộ OOP: class, object, constructor/destructor, this, friend, copy constructor
- Nạp chồng hàm/toán tử
- Kế thừa, đa hình, hàm ảo
- Danh sách liên kết bằng con trỏ + class
- Xử lý ngoại lệ (try/catch/throw)

**Sau khóa học, học viên có thể:**
- Đọc hiểu và tự viết chương trình C++ hướng đối tượng cỡ vừa (200-400 dòng)
- Giải thích và áp dụng đúng 4 tính chất OOP trong thiết kế của mình
- Tự cài đặt linked list bằng con trỏ, theo phong cách hướng đối tượng
- Thiết kế class có constructor/destructor/overload hợp lý
- Đọc hiểu code C++ có exception handling
- Đủ nội dung để làm bài thi lý thuyết + code và hoàn thành đồ án PRG1006

---

## 3. KHUNG CHUẨN CHO 1 BUỔI HỌC (LINH HOẠT)

Vì thời lượng buổi giờ co giãn, khung dưới đây tính theo **tỉ lệ**, không theo phút cứng — mỗi buổi chi tiết ở Mục 6-7 sẽ ghi số phút cụ thể:

| Tỉ lệ thời gian | Hoạt động |
|---|---|
| ~10% đầu | Ôn nhanh buổi trước (hỏi lại 2-3 câu, sửa bài tập về nhà) |
| ~25-30% | Lý thuyết + ví dụ mẫu (giải thích **tại sao**, không chỉ **cái gì**) |
| ~40-45% | Thực hành có hướng dẫn — Bò ngồi cạnh, chỉ gợi ý khi bí quá 3-5 phút |
| ~15-20% | 1 bài tự làm độc lập (Bò quan sát, không can thiệp) |
| ~5% cuối | Tổng kết bằng lời + giao bài về nhà |

**Nguyên tắc sư phạm xuyên suốt:**
1. **Vẽ hình luôn tay** với con trỏ/bộ nhớ — ô nhớ, địa chỉ, mũi tên.
2. **Một khái niệm mới → tối thiểu 3 bài tập** ở 3 mức: bắt chước → đổi ngữ cảnh → áp dụng bài toán khác.
3. **Không tự sửa lỗi giùm.** Hỏi "em nghĩ dòng nào sai, vì sao" trước khi chỉ ra.
4. **Không chuyển buổi mới khi bài tự làm chưa đạt**, đặc biệt ở Buổi 5 và Buổi 16 (2 checkpoint lớn). Thà chậm còn hơn đắp lên nền chưa vững.
5. Cho học viên **đọc lỗi compiler** thành tiếng và đoán nghĩa trước khi giải thích.
6. **Ở các buổi đã gộp (Giai đoạn 2):** rút ngắn phần dẫn nhập lý thuyết vì khái niệm nền đã vững, dồn thời gian cho thực hành lặp lại — đúng tinh thần "hiểu khái niệm rồi luyện nhiều để nhớ".
7. **Buổi gộp dài (120-150p) có thể chia làm 2 nếu học viên đuối** — ví dụ nếu học gần như mỗi ngày, phần 2 của 1 buổi dài có thể dời sang đầu buổi hôm sau thay vì ép học 1 mạch.

---

## 4. BẢNG ĐỐI CHIẾU NÉN NỘI DUNG — SO VỚI BẢN GỐC

| Nội dung | Buổi ở bản 2 giai đoạn (28 buổi) | Buổi ở bản rút gọn (23 buổi) | Kiểu xử lý | Lý do |
|---|---|---|---|---|
| Hàm trong C | *(ngoài giáo trình, coi như đã xong)* | **Buổi 0** | Thêm mới | Học viên thực tế chưa học — bắt buộc phải có trước Buổi 6 |
| Chuỗi ký tự C | *(ngoài giáo trình)* | *Bỏ, không dạy riêng* | Cắt thật | C++ dùng `string` là chính; kỹ thuật con trỏ+mảng ký tự sẽ tự nhiên xuất hiện lại ở Buổi 3 |
| Ôn tập tổng kết C | *(ngoài giáo trình)* | *Bỏ, không dạy riêng* | Cắt thật | Buổi 1 (C→C++) đã đóng vai trò ôn tập/bắc cầu |
| C → C++ cú pháp | Buổi 0 | Buổi 1 | Giữ nguyên | — |
| Con trỏ cơ bản | Buổi 1 | Buổi 2 | Giữ nguyên | Nền tảng, không cắt |
| Con trỏ nâng cao | Buổi 2 | Buổi 3 | Giữ nguyên | Nền tảng, không cắt |
| Cấp phát động | Buổi 3 | Buổi 4 | Giữ nguyên | Nền tảng, không cắt |
| **Checkpoint Con trỏ/Heap** | Buổi 4 | **Buổi 5** | **Giữ nguyên cả buổi** | Điểm nghẽn kinh điển nhất khóa — không được cắt |
| Hàm & tham chiếu | Buổi 5 | Buổi 6 (gộp) | Đóng gói lại | Gộp với truyền mảng, cùng 1 mạch "hàm giao tiếp thế nào" |
| Truyền mảng, trả giá trị | Buổi 6 | Buổi 6 (gộp) | Đóng gói lại | (gộp ở trên) |
| Default arg + overload hàm | Buổi 7 | Buổi 7 | Giữ nguyên | Nội dung nhẹ, không cần nén thêm |
| **Đệ quy** | Buổi 8 | **Buổi 8** | **Giữ nguyên** | Điểm học viên hay rối nhất — không cắt |
| Biến static | Buổi 9 | Buổi 9 (gộp review) | Đóng gói lại | — |
| Checkpoint Hàm | Buổi 10 | *rút vào cuối Buổi 9* | **Cắt thật** (90p → ~20-25p) | Lỗi hàm thường lộ ngay khi biên dịch, rủi ro thấp hơn lỗi con trỏ |
| Nhập môn Lớp | Buổi 11 | Buổi 10 | Giữ nguyên | — |
| Thực hành class hoàn chỉnh | Buổi 12 | Buổi 11 | Giữ nguyên | — |
| Constructor | Buổi 13 | Buổi 12 | Giữ nguyên | — |
| Destructor + cảnh báo shallow copy | Buổi 14 | Buổi 13 | Giữ nguyên | — |
| Kế thừa | Buổi 15 | Buổi 14 | Giữ nguyên | — |
| **Đa hình + Trừu tượng** | Buổi 16 | **Buổi 15** | **Giữ nguyên** | Khái niệm trừu tượng nhất khóa — không cắt |
| **Checkpoint 4 tính chất OOP** | Buổi 17 | **Buổi 16** | **Giữ nguyên cả buổi** | Mốc quan trọng nhất toàn khóa — không cắt |
| Linked List — khởi tạo/duyệt | Buổi 18 | Buổi 17 | Giữ nguyên | Vẫn khó vì kết hợp con trỏ+class |
| Linked List — thêm/xóa | Buổi 19 | Buổi 18 (+mini-checkpoint) | Đóng gói lại | Gộp checkpoint vào cuối buổi |
| Checkpoint Linked List | Buổi 20 | *rút vào cuối Buổi 18* | **Cắt thật** (90p → ~20-25p) | — |
| `this` + method chaining | Buổi 21 | Buổi 19 (gộp) | Đóng gói lại + cắt nhẹ | Chaining chỉ giới thiệu lướt, không thực hành sâu (ít khi ra thi) |
| Copy Constructor + Friend | Buổi 22 | Buổi 19 (gộp) | Đóng gói lại | (gộp ở trên) |
| Nạp chồng toán tử — cơ bản | Buổi 23 | Buổi 20 (gộp) | Đóng gói lại | Cùng 1 mạch nội dung |
| Nạp chồng toán tử — nâng cao | Buổi 24 | Buổi 20 (gộp) | Đóng gói lại | (gộp ở trên) |
| Ngoại lệ try/catch/throw | Buổi 25 | Buổi 21 (gộp) | Đóng gói lại | Custom exception là mở rộng tự nhiên |
| Custom Exception | Buổi 26 | Buổi 21 (gộp) | Đóng gói lại | (gộp ở trên) |
| Ôn tập + dự án tổng hợp | Buổi 27 | Buổi 22 | Giữ nguyên | Buổi chuẩn bị thi + đồ án, không cắt |

---

## 5. LỘ TRÌNH TỔNG THỂ (23 BUỔI)

### Giai đoạn 1 — Bù kiến thức + Core + 4 tính chất OOP (Buổi 0-16)

| Buổi | Chủ đề | Thời lượng đề xuất | Module trường |
|---|---|---|---|
| 0 | Bù kiến thức C: Hàm | 90-120p | *(ngoài PRG1006)* |
| 1 | Từ C sang C++ — cú pháp mới | 75-90p | Cầu nối |
| 2 | Con trỏ cơ bản | 90-120p | Module 1 |
| 3 | Con trỏ nâng cao + luyện tập | 90p | Module 1 |
| 4 | Cấp phát bộ nhớ động | 90-120p | Module 2 |
| 5 | **CHECKPOINT: Con trỏ & Bộ nhớ động** | 90-120p | Module 1+2 |
| 6 | Hàm & tham chiếu + Truyền mảng, trả giá trị an toàn | 120-150p | Module 3 |
| 7 | Đối số mặc định & Nạp chồng hàm | 90p | Module 4 |
| 8 | Đệ quy | 90-120p | Module 4 |
| 9 | Biến static + Review nhanh Hàm | 90-100p | Module 4 |
| 10 | Nhập môn Lớp & Đối tượng | 90-120p | Module 5 (tự soạn) |
| 11 | Thực hành xây class hoàn chỉnh | 90p | Module 5 (tự soạn) |
| 12 | Constructor | 90p | Module 6 |
| 13 | Destructor + cảnh báo shallow copy | 90-120p | Module 6 |
| 14 | Kế thừa (Inheritance) | 90p | Module 10 |
| 15 | Đa hình & Trừu tượng | 90-120p | Module 10 |
| 16 | **CHECKPOINT: Tổng hợp 4 tính chất OOP** | 100-130p | Module 5+6+10 |

### Giai đoạn 2 — Phủ đủ nội dung thi (Buổi 17-22)

| Buổi | Chủ đề | Thời lượng đề xuất | Module trường |
|---|---|---|---|
| 17 | Linked List — khởi tạo & duyệt (Node dạng class) | 90-120p | Module 7 |
| 18 | Linked List — thêm & xóa + mini-checkpoint | 100-130p | Module 7 |
| 19 | `this` (nhanh) + Copy Constructor & Friend Function | 120-150p | Module 8 |
| 20 | Nạp chồng toán tử — cơ bản + nâng cao/giới hạn | 120-150p | Module 9 |
| 21 | Xử lý ngoại lệ — try/catch/throw + Custom Exception | 100-120p | Module 11 |
| 22 | Ôn tập toàn khóa + dự án nhỏ tổng hợp | 120-150p | Toàn bộ |

---

## 6. CHI TIẾT TỪNG BUỔI — GIAI ĐOẠN 1

### Buổi 0 — Bù kiến thức C: Hàm (Functions)
**Mục tiêu:** Nắm vững cú pháp và tư duy hàm trong C — nền tảng bắt buộc để Buổi 6 (Hàm C++ mở rộng) không bị hụt. Đây là buổi bù duy nhất được giữ lại đầy đủ, vì Hàm là thứ thật sự không thể thiếu.

**Đánh giá nhanh đầu buổi (10p):** Hỏi thử học viên đã từng viết/đọc hàm nào chưa — nhiều khi qua bài tập mảng đã vô tình đụng hàm rồi. Dùng kết quả này để quyết định đi nhanh hay chậm phần lý thuyết.

**Lý thuyết (30-35p):**
- Vì sao cần hàm: tái sử dụng code, chia nhỏ bài toán lớn thành phần dễ quản lý.
- Cấu trúc 1 hàm: kiểu trả về, tên hàm, danh sách tham số, thân hàm.
- Khai báo nguyên mẫu (prototype) trước `main`, định nghĩa đầy đủ sau — hoặc định nghĩa trước `main` luôn nếu chương trình nhỏ.
- Tham số hình thức (formal) vs tham số thực (actual) khi gọi hàm.
- Truyền tham số theo giá trị (pass by value) — **nhấn mạnh:** thay đổi tham số bên trong hàm KHÔNG ảnh hưởng biến gốc bên ngoài. Đây là điểm sẽ dùng để so sánh với tham chiếu/con trỏ ở Buổi 6, nên phải chắc chỗ này.
- `return` — hàm có thể trả về 1 giá trị hoặc `void` (không trả gì).
- Biến cục bộ (local) vs biến toàn cục (global) — phạm vi (scope).

**Thực hành (45-50p):** Viết các hàm: tính giai thừa bằng vòng lặp (chưa đệ quy — để dành Buổi 8), kiểm tra số nguyên tố, tìm max của 1 mảng (ôn mảng luôn, 1 công đôi việc). Sau đó: **viết hàm `swap` hoán đổi 2 biến bằng truyền giá trị thường — để THẤT BẠI có kiểm soát.** Đây là "hạt giống" quan trọng: học viên tự thấy hàm không sửa được biến gốc, tạo sẵn câu hỏi trong đầu mà Buổi 6 (tham chiếu/con trỏ) sẽ trả lời.

**Tự làm (15-20p):** Hàm tính tổng các số từ 1 đến n, hàm đếm số phần tử chẵn/lẻ trong 1 mảng.

**Bài tập về nhà:** Hàm tính trung bình cộng mảng, hàm kiểm tra 1 số có phải số chính phương không, hàm in bảng cửu chương của 1 số.

**Ghi chú:** Không dạy chuỗi ký tự (char array) sâu ở đây. C++ sẽ dùng `std::string` cho hầu hết nhu cầu, còn kỹ thuật con trỏ + mảng/chuỗi kiểu C sẽ tự nhiên xuất hiện lại khi cần ở Buổi 3.

---

### Buổi 1 — Từ C sang C++: làm quen cú pháp mới
**Mục tiêu:** Không bị "sốc cú pháp" khi nhìn code C++, hiểu C++ là C + thêm tính năng.

**Lý thuyết & ví dụ (25p):**
- `#include <iostream>`, `using namespace std;`, `cin >> / cout <<` thay cho `scanf/printf` — `cout` thực chất là object, `<<` là toán tử được nạp chồng (chỉ nói sơ, học kỹ ở Buổi 20).
- Kiểu `bool` (true/false) so với dùng `int` 0/1 trong C.
- Khai báo biến linh hoạt hơn (không cần khai báo hết đầu hàm như C89).
- Giới thiệu nhanh `string` — chỉ dùng, chưa giải thích cơ chế.
- **Nói rõ:** "Con trỏ, hàm, mảng, vòng lặp — y hệt C. Cái mới hôm nay chỉ là cách nhập/xuất và vài kiểu dữ liệu."

**Thực hành (35-40p):** Viết lại 3 chương trình C cũ (nhập 2 số cộng lại, tính giai thừa bằng vòng lặp — dùng lại hàm từ Buổi 0, in mảng) sang cú pháp C++.

**Tự làm (15p):** 1 bài mới hoàn toàn bằng C++ — nhập tên và tuổi, in ra câu chào.

**Bài tập về nhà:** 3 bài nhỏ chuyển đổi C → C++.

**Lỗi thường gặp:** quên `using namespace std;` — bài học tốt để giới thiệu khái niệm namespace mà không cần giảng sâu.

---

### Buổi 2 — Con trỏ cơ bản
**Mục tiêu:** Củng cố vững con trỏ — nền tảng cho toàn bộ nửa sau khóa học.

**Lý thuyết (30p):**
- Biến = tên gọi của 1 ô nhớ có địa chỉ. Vẽ hình: ô nhớ, địa chỉ, giá trị.
- Toán tử `&` (address-of) và `*` (dereference) — nhấn mạnh `*` có 2 nghĩa khác nhau tùy ngữ cảnh, điểm học viên hay lú nhất.
- Khai báo con trỏ: `int *p;` — tại sao cần khai báo kiểu.
- Con trỏ NULL / con trỏ chưa khởi tạo (wild pointer) — tại sao nguy hiểm.

**Thực hành (40p):**
- Khai báo biến int, lấy địa chỉ gán cho con trỏ, in giá trị qua `*p`, đổi giá trị qua con trỏ rồi in biến gốc.
- Hoán đổi giá trị 2 biến bằng con trỏ — **đối chiếu trực tiếp với bài `swap` thất bại ở Buổi 0**, cho học viên thấy rõ vì sao con trỏ giải quyết được vấn đề đó.

**Tự làm (15p):** Viết hàm `swap` bằng con trỏ, so với bản value ở Buổi 0.

**Bài tập về nhà:** 3 bài đọc/ghi qua con trỏ, 1 bài vẽ tay sơ đồ bộ nhớ.

---

### Buổi 3 — Con trỏ nâng cao + luyện tập
**Mục tiêu:** Con trỏ với mảng, con trỏ đôi, tự tin đọc code có nhiều dấu `*`.

**Lý thuyết (30p):**
- Quan hệ mảng — con trỏ: `arr[i]` tương đương `*(arr + i)`.
- Con trỏ đôi (`int **p`) — ví dụ `char a; char *b; char **c;` vẽ 3 tầng ô nhớ.
- Khi nào cần con trỏ đôi (dùng ở Buổi 6 khi hàm cần sửa con trỏ được truyền vào).

**Thực hành (40p):** Duyệt mảng bằng con trỏ thay vì chỉ số, in địa chỉ từng phần tử để thấy bước nhảy theo kiểu dữ liệu.

**Tự làm (15p):** Viết hàm dùng con trỏ đôi để thay đổi giá trị 1 con trỏ ở hàm gọi.

**Bài tập về nhà:** 1 bài đọc trước: "Tại sao mảng khai báo tĩnh có lúc không đủ dùng?"

---

### Buổi 4 — Cấp phát bộ nhớ động
**Mục tiêu:** Hiểu Stack vs Heap, biết cấp phát/giải phóng đúng cách, tránh rò rỉ bộ nhớ.

**Lý thuyết (30p):**
- Stack vs Heap.
- `new` / `delete` — so sánh với `malloc/free` học viên đã biết ở C.
- Cấp phát mảng động: `new int[5]`, `delete[]`.
- Xử lý lỗi cấp phát (kiểm tra NULL, học kỹ try/catch ở Buổi 21).
- **Nhấn mạnh:** mỗi `new` phải có đúng 1 `delete` tương ứng.

**Thực hành (40-45p):** Cấp phát mảng động theo kích thước người dùng nhập. Thử truy cập sau khi delete để thấy lỗi (dangling pointer) — có kiểm soát.

**Tự làm (15p):** Nhập n, cấp phát mảng n phần tử, tính tổng/trung bình, giải phóng đúng cách.

**Bài tập về nhà:** 2 bài cấp phát động, 1 bài tìm lỗi trong đoạn code có memory leak.

---

### Buổi 5 — CHECKPOINT: Con trỏ & Bộ nhớ động
**Mục tiêu:** Buổi bắt buộc không dạy kiến thức mới — chỉ củng cố. Nếu chưa vững, **lặp lại buổi này trước khi đi tiếp, không đi thẳng qua Buổi 6.**

**Nội dung (90-120p, toàn thực hành):**
- 15p: 5-6 câu hỏi vấn đáp nhanh kiểu "con trỏ này trỏ tới đâu sau dòng lệnh này".
- 45-60p: Bài tổng hợp — quản lý danh sách điểm số dùng mảng động (nhập số lượng, cấp phát, nhập điểm, tính trung bình, tìm max/min, giải phóng).
- 30p: Học viên tự giải thích lại toàn bộ code vừa viết.

**Tiêu chí qua buổi:** Tự viết được chương trình cấp phát động độc lập, giải thích đúng lý do dùng `new/delete` thay vì mảng tĩnh.

---

### Buổi 6 — Hàm & tham chiếu + Truyền mảng, trả giá trị an toàn
**Mục tiêu:** Hiểu đủ 3 cách truyền tham số (value/reference/pointer) và vận dụng vào truyền mảng, trả giá trị an toàn từ hàm. *(Gộp 2 buổi gốc vì học viên đã vững hàm C ở Buổi 0 và con trỏ ở Buổi 2-4 — phần "truyền theo giá trị" chỉ cần chốt rất nhanh, dồn lực cho phần thật sự MỚI.)*

**Phần 1 — Tham chiếu (Lý thuyết 20p + Thực hành 25p):**
- Ôn cực nhanh truyền theo giá trị (đã học kỹ ở Buổi 0).
- Truyền theo tham chiếu — **khái niệm hoàn toàn mới:** `void f(int &x)`, là "bí danh" (alias) của biến gốc, không phải con trỏ.
- Bảng so sánh value / reference / pointer trên cùng 1 bài toán tăng biến lên 1.
- Thực hành: viết lại `swap` bằng tham chiếu — so với bản value (Buổi 0, thất bại) và bản con trỏ (Buổi 2) để thấy rõ 3 cách, cùng đích đến khác đường đi.

**Phần 2 — Mảng & hàm (Lý thuyết 20p + Thực hành 35-40p):**
- Truyền mảng vào hàm: tên mảng suy biến thành con trỏ, sửa phần tử trong hàm ảnh hưởng mảng gốc.
- Vấn đề "trả về con trỏ trỏ tới biến cục bộ" — lỗi kinh điển, lý do cấp phát động (Buổi 4) hữu ích.
- Thực hành: hàm tìm max/min mảng, đảo ngược mảng in-place, viết hàm CỐ TÌNH trả về con trỏ cục bộ để thấy lỗi rồi sửa bằng cấp phát động.

**Tự làm (20p):** Hàm tính tổng và tích 2 số, trả về đồng thời bằng tham chiếu; hàm nhận mảng trả về mảng mới đã sắp xếp tăng dần (cấp phát động bên trong).

**Bài tập về nhà:** 3 bài chọn đúng cách truyền tham số phù hợp, 1 bài hàm trả về mảng động.

---

### Buổi 7 — Đối số mặc định & Nạp chồng hàm
**Mục tiêu:** Viết hàm linh hoạt hơn, làm quen "nhiều hàm cùng tên".

**Lý thuyết (30p):**
- Đối số mặc định: `void f(int a, int b = 10)`.
- Nạp chồng hàm: nhiều hàm cùng tên, khác số lượng/kiểu tham số.
- Lưu ý: không thể overload chỉ khác kiểu trả về.

**Thực hành (40p):** 3-4 hàm `tinhDienTich` overload cho hình vuông, hình chữ nhật, hình tròn.

**Tự làm (15p):** Hàm `inThongTin` overload cho int, double, string.

**Bài tập về nhà:** 2 bài default argument, 2 bài overload.

---

### Buổi 8 — Đệ quy (Recursion)
**Mục tiêu:** Hiểu cơ chế hàm gọi chính nó, thành thạo vẽ cây gọi hàm, phân biệt khi nào nên/không nên dùng đệ quy. *(Giữ nguyên đầy đủ, không nén — đây là điểm học viên chậm hiểu hay rối nhất trong toàn khóa theo cả 2 bản giáo án trước.)*

**Lý thuyết (35p):**
- Hàm tự gọi lại chính nó, cần điều kiện dừng (base case).
- Vẽ **cây gọi hàm** chi tiết cho giai thừa — từng lớp stack đi xuống, rồi trả giá trị đi lên.
- So sánh đệ quy vs vòng lặp cùng bài toán — thấy đánh đổi (đệ quy dễ đọc hơn, tốn bộ nhớ stack hơn).
- Đệ quy nhiều nhánh (Fibonacci) — vẽ cây gọi hàm phân nhánh.

**Thực hành (40-45p):** Hàm đệ quy tính giai thừa, tổng dãy 1→n, Fibonacci (n nhỏ). Với mỗi hàm, học viên phải **vẽ tay cây gọi trước** khi chạy máy kiểm chứng.

**Tự làm (15p):** Hàm đệ quy đếm số chữ số của 1 số nguyên, tính lũy thừa bằng đệ quy.

**Bài tập về nhà:** 2-3 bài đệ quy khác (tổng bình phương, ước chung lớn nhất nếu vừa sức).

---

### Buổi 9 — Biến static + Review nhanh Hàm
**Mục tiêu:** Nắm biến static, đồng thời tự kiểm tra nhanh toàn bộ mạch Hàm (Buổi 0, 6, 7, 8) trước khi vào Class. *(Thay vì 1 buổi Checkpoint đầy đủ như bản gốc, phần review được rút gọn — lý do: lỗi về hàm thường lộ ngay khi biên dịch, ít "âm thầm" như lỗi con trỏ, nên rủi ro nén thấp hơn.)*

**Lý thuyết static (30p):**
- Biến local thường: tạo mới và hủy mỗi lần hàm chạy xong.
- Biến static trong hàm: chỉ khởi tạo 1 lần, giữ giá trị giữa các lần gọi. Vẽ vùng nhớ đặc biệt (khác Stack, tồn tại suốt chương trình).
- Ví dụ chuẩn: hàm đếm số lần được gọi. Nhắc thoáng qua static local vs static global.

**Thực hành static (35p):** Hàm đếm số lần gọi bằng static (so với biến global để thấy static an toàn hơn), hàm sinh ID tự động tăng dần.

**Tự làm (15p):** Hàm mô phỏng "máy đếm vé" — mỗi lần gọi trả về số thứ tự tăng dần từ 1.

**Review nhanh Hàm (20-25p):** Đưa 1 bài tổng hợp NHỎ bắt buộc dùng: 1 hàm overload + 1 hàm có tham chiếu + 1 hàm đệ quy trong cùng chương trình (ví dụ: máy tính đơn giản có phép cộng/trừ overload cho int/double, dùng tham chiếu trả 2 kết quả, có 1 hàm đệ quy tính lũy thừa). Vấn đáp nhanh thay vì đề lớn 60p như checkpoint gốc.

**Van an toàn:** Nếu học viên còn lúng túng ở phần review này → **chèn thêm 1 buổi ôn tập hàm đầy đủ** trước khi qua Class. Đừng ép đi tiếp.

**Bài tập về nhà:** 2 bài static, 1 bài tổng hợp hàm tự chọn chủ đề.

---

### Buổi 10 — Nhập môn Lớp & Đối tượng
**Mục tiêu:** Hiểu OOP là gì và tại sao cần nó.

**Lý thuyết (35p):**
- Vấn đề của lập trình thủ tục: dữ liệu và hàm xử lý tách rời (ví dụ quản lý sinh viên bằng struct + hàm rời rạc ở C).
- Class = khuôn mẫu, Object = thực thể tạo từ khuôn mẫu — ví dụ đời thường (class "Xe hơi" - bản thiết kế, object là chiếc xe cụ thể).
- Từ khóa `class`, thuộc tính (member variable), phương thức (member function).
- `private` / `public` — đóng gói (encapsulation): giấu dữ liệu, chỉ truy cập qua phương thức. So sánh với struct trong C (mọi thứ public).
- Cú pháp khai báo object và gọi phương thức bằng dấu `.`
- **Liên hệ ngược:** "`string` mà em dùng từ Buổi 1 thực chất chính là 1 class — nó có constructor (khi khai báo), có phương thức như `.length()`, `.substr()`. Em đã dùng OOP từ đầu khóa mà không biết!" — giúp OOP bớt cảm giác xa lạ.

**Thực hành (40p):** Cùng xây class `CDiem` (điểm 2D: x, y) — thuộc tính private, phương thức `setX/getX`, `setY/getY`, `inToaDo()`.

**Tự làm (15p):** Tự viết class `CHocSinh` với tên, tuổi, điểm trung bình (private), hàm get/set và `xepLoai()`.

**Bài tập về nhà:** Hoàn thiện class `CHocSinh`, thêm hàm `inThongTin()`.

---

### Buổi 11 — Thực hành xây dựng class hoàn chỉnh
**Mục tiêu:** Thành thạo thiết kế class, làm quen tách khai báo (.h) và triển khai (.cpp).

**Lý thuyết (25p):**
- Định nghĩa phương thức bên ngoài class bằng `::` (VD: `void CHocSinh::inThongTin() {...}`).
- Giới thiệu tách file `.h` và `.cpp` — chỉ ở mức làm quen.
- Ôn nguyên tắc: thuộc tính luôn private trừ khi có lý do rõ ràng.

**Thực hành (50p):** Xây dựng class `CHinhChuNhat` hoàn chỉnh: get/set, tính diện tích, chu vi, so sánh 2 hình chữ nhật.

**Tự làm (15p):** Class `CTaiKhoanNganHang` (số dư, chủ tài khoản) với `napTien`, `rutTien` (kiểm tra rút quá số dư), `xemSoDu`.

**Bài tập về nhà:** Hoàn thiện `CTaiKhoanNganHang`, viết main tạo 2-3 tài khoản.

---

### Buổi 12 — Constructor
**Mục tiêu:** Hiểu constructor là gì, tại sao cần, các loại constructor.

**Lý thuyết (30p):**
- Vấn đề: object mới tạo có thuộc tính chưa khởi tạo (rác).
- Constructor: hàm đặc biệt tên trùng tên class, tự động chạy khi tạo object.
- Default constructor, constructor có tham số, đối số mặc định trong constructor (liên hệ Buổi 7).
- Nạp chồng constructor.

**Thực hành (40p):** Thêm constructor cho `CHocSinh`: constructor mặc định gán 0/rỗng, constructor có tham số đầy đủ.

**Tự làm (15p):** Thêm 2 constructor cho `CTaiKhoanNganHang`.

**Bài tập về nhà:** Class `CDiem3D` (x, y, z) với 2 constructor.

---

### Buổi 13 — Destructor & ôn tập Class
**Mục tiêu:** Hiểu vòng đời object, khi nào cần destructor tự viết — và bắt đầu nhận biết một cạm bẫy sẽ giải quyết triệt để ở Giai đoạn 2.

**Lý thuyết (30p):**
- Destructor: hàm tên `~TenClass()`, tự động chạy khi object hết phạm vi hoặc bị `delete`.
- Default destructor đủ dùng nếu class không cấp phát động bên trong. Nếu có `new` bên trong → **bắt buộc** tự viết destructor để `delete` (liên hệ Buổi 4-5).

**Thực hành (40p):** Xây class `CMangDong` bọc quanh 1 mảng động: constructor `new`, hàm `set/get`, destructor `delete[]`. In `cout` trong constructor/destructor để "nhìn thấy" vòng đời object.

**Tự làm (15p):** Tạo vài object `CMangDong` trong 1 khối lệnh `{ }` để quan sát destructor tự chạy.

**Mở rộng cuối buổi (15-20p) — Cảnh báo trước về shallow copy:**
- Đặt câu hỏi gợi mở: "Nếu gán `CMangDong b = a;` rồi `delete` object a, con trỏ bên trong b sẽ ra sao?"
- Demo nhanh: copy 2 object `CMangDong`, delete 1 cái, truy cập cái còn lại → crash hoặc in ra rác.
- Giải thích ngắn: mặc định C++ copy "từng byte" kể cả địa chỉ con trỏ → 2 object trỏ chung 1 vùng nhớ ("shallow copy").
- **Chưa dạy cách sửa ở đây.** Chỉ cần ghi nhớ: sẽ học cách sửa đúng (deep copy) ở Buổi 19.

**Bài tập về nhà:** 1 bài tổng hợp Module Class (Buổi 10-13): thiết kế 1 class tự chọn, có ít nhất 3 thuộc tính private, 2 constructor, 1 destructor, 4 phương thức.

---

### Buổi 14 — Kế thừa (Inheritance)
**Mục tiêu:** Hiểu quan hệ "là một loại của" (is-a), tái sử dụng code qua kế thừa.

**Lý thuyết (35p):**
- Vấn đề: nhiều class có chung thuộc tính/phương thức (VD: `CHocSinh`, `CGiaoVien` đều có tên, tuổi).
- Cú pháp: `class CHocSinh : public CNguoi { ... }`.
- Từ khóa truy cập: `public`, khái niệm `protected`.
- Constructor trong kế thừa: class con phải gọi constructor cha — điểm hay gây lỗi nếu quên.
- Đa kế thừa — chỉ giới thiệu khái niệm, không đào sâu.

**Thực hành (40p):** Xây `class CNguoi` (tên, tuổi, `gioiThieu()`), sau đó `class CHocSinh : public CNguoi` thêm điểm trung bình + phương thức riêng.

**Tự làm (15p):** Thêm `class CGiaoVien : public CNguoi` với môn dạy.

**Bài tập về nhà:** Hoàn thiện `CGiaoVien`, viết constructor gọi đúng constructor cha.

---

### Buổi 15 — Đa hình & Trừu tượng (Polymorphism & Abstraction)
**Mục tiêu:** Hiểu tại sao cần hàm ảo (`virtual`), và khái niệm lớp trừu tượng — khép lại đủ 4 tính chất OOP. *(Giữ nguyên đầy đủ, không nén.)*

**Lý thuyết (35p):**
- Vấn đề: con trỏ kiểu cha trỏ tới object con, gọi phương thức trùng tên → mặc định gọi phiên bản của class cha. Minh họa bằng code chạy thử để tự thấy "bug".
- Giải pháp: `virtual` ở phương thức class cha → C++ gọi đúng phiên bản của object thực sự đang được trỏ tới.
- Destructor ảo (`virtual ~CNguoi()`) — liên hệ lại destructor Buổi 13.
- Hàm ảo thuần túy (`virtual void ve() = 0;`) và **lớp trừu tượng (abstract class)** — class `CHinh` không thể tạo object trực tiếp, chỉ dùng làm cha. Đây chính là tính chất **Trừu tượng**: định nghĩa "hợp đồng" chung mà lớp con bắt buộc phải hiện thực.

**Thực hành (40p):** Từ `CNguoi`/`CHocSinh`/`CGiaoVien` (Buổi 14), thêm `gioiThieu()` là `virtual`, override ở mỗi class con. Tạo mảng con trỏ `CNguoi*` chứa cả 2 loại, duyệt mảng gọi `gioiThieu()`.

**Tự làm (15p):** Class `CHinh` (abstract, hàm ảo thuần túy `tinhDienTich()`), 2 class con `CHinhTron`, `CHinhVuong` implement riêng.

**Bài tập về nhà:** Chương trình tạo mảng con trỏ `CHinh*` chứa cả 2 loại hình, tính tổng diện tích.

---

### Buổi 16 — CHECKPOINT: Tổng hợp 4 tính chất OOP
**Mục tiêu:** Xác nhận nắm vững cả 4 tính chất (đóng gói, kế thừa, đa hình, trừu tượng) trước khi sang Giai đoạn 2. **Đây là buổi quan trọng nhất của toàn khóa** — đánh dấu mục tiêu cốt lõi "hiểu vững" đã đạt. *(Giữ nguyên đầy đủ, tuyệt đối không cắt.)*

**Nội dung (100-130p, toàn thực hành):**
- 15p: Vấn đáp nhanh — 1 câu hỏi cho mỗi tính chất. VD: "Tại sao thuộc tính nên để private?" (đóng gói); "Class con gọi constructor cha khi nào?" (kế thừa); "Nếu bỏ `virtual` thì output sai thế nào?" (đa hình); "Vì sao không tạo được object của abstract class?" (trừu tượng).
- 65-80p: Bài tổng hợp lớn — thiết kế hệ thống có class cha trừu tượng, 2-3 class con override khác nhau, thuộc tính private đầy đủ, constructor/destructor hợp lý, dùng mảng con trỏ cha để quản lý và gọi đa hình. Ví dụ: "Quản lý nhân viên" (`CNhanVien` trừu tượng với `tinhLuong()`, `CNhanVienChinhThuc`/`CNhanVienThoiVu` implement khác nhau).
- 15-20p: Tự giải thích lại bằng lời cả 4 tính chất áp dụng ở đâu trong chính code vừa viết.

**Tiêu chí qua buổi:** Tự chỉ ra và giải thích đúng cả 4 tính chất trong code của chính mình, không cần gợi ý thuật ngữ. **Nếu chưa vững, chèn thêm 1 buổi phụ đạo trước khi qua Giai đoạn 2 — đây là chỗ đáng "hy sinh" tiến độ nhất trong toàn bộ lộ trình.**

---

## 7. CHI TIẾT TỪNG BUỔI — GIAI ĐOẠN 2

### Buổi 17 — Linked List: khởi tạo & duyệt
**Mục tiêu:** Hiểu cấu trúc dữ liệu động đầu tiên — kết hợp con trỏ đã học ở Giai đoạn 1 với tư duy Class vừa hoàn thiện.

**Lý thuyết (30p):**
- Vấn đề của mảng: kích thước cố định, chèn/xóa giữa mảng tốn công dịch chuyển.
- Cấu trúc Node: dữ liệu + con trỏ `pNext` trỏ tới Node kế. Vẽ hình chuỗi Node nối bằng mũi tên, kết thúc bằng `NULL`.
- **Xây `Node` như 1 class nhỏ có constructor** tự động gán `pNext = NULL` khi tạo — thay vì struct trần trụi phải gán tay. Áp dụng lại kiến thức Constructor (Buổi 12) vào bài toán mới.
- Con trỏ `pStart`/`pHead` trỏ tới Node đầu danh sách.
- Duyệt danh sách: `pCurrent = pStart`, lặp `while(pCurrent != NULL)`, in dữ liệu, `pCurrent = pCurrent->pNext`.

**Thực hành (45p):** Xây class `Node` (dữ liệu + `pNext`, có constructor), nối thủ công 3-4 Node bằng tay trước, sau đó viết `themCuoi()` tổng quát. Viết `inDanhSach()`.

**Tự làm (15p):** Hàm đếm số phần tử, hàm tìm 1 giá trị có tồn tại không.

**Bài tập về nhà:** Tạo danh sách liên kết chứa tên 5 học sinh, viết hàm in và đếm.

---

### Buổi 18 — Linked List: thêm & xóa phần tử + mini-checkpoint
**Mục tiêu:** Thao tác chèn/xóa ở đầu, cuối, giữa danh sách — phần khó nhất vì nhiều trường hợp đặc biệt. Kết thúc bằng bài kiểm tra tổng hợp gọn thay cho 1 buổi Checkpoint riêng.

**Lý thuyết (30p):**
- Thêm đầu danh sách: nhấn mạnh **thứ tự các dòng lệnh** (đổi `pStart` trước sẽ mất liên kết).
- Thêm giữa danh sách: cần con trỏ "trước" và "sau" điểm chèn.
- Xóa Node: các trường hợp — xóa đầu, giữa, cuối, danh sách rỗng. Nhấn mạnh phải `delete` Node bị gỡ (liên hệ Buổi 4-5).

**Thực hành (40p):** Cài đặt `themDau()`, `themGiua(vitri)`, `xoaDau()`, `xoaCuoi()`, `xoaTheoGiaTri()`. Test ngay từng hàm.

**Tự làm (15p):** Hàm `xoaToanBo()` giải phóng hết Node.

**Mini-checkpoint cuối buổi (20-25p):** Đề gọn — Quản lý danh sách sinh viên bằng linked list (Node dạng class): thêm, xóa theo tên, in danh sách, tính điểm trung bình. Học viên tự làm, quan sát không can thiệp.

**Tiêu chí qua buổi:** Tự cài được thêm/xóa/duyệt không cần xem lại bài cũ. Nếu còn lúng túng ở thêm/xóa giữa danh sách → **dành thêm 1 buổi phụ đạo riêng trước khi qua Buổi 19.**

**Bài tập về nhà:** Hoàn thiện bộ hàm thêm/xóa, tự viết hàm đảo ngược danh sách (nâng cao, không bắt buộc).

---

### Buổi 19 — `this` (nhanh) + Copy Constructor & Friend Function
**Mục tiêu:** Nắm nhanh con trỏ `this`, rồi giải quyết triệt để cạm bẫy shallow copy đã cảnh báo ở Buổi 13, và học friend function. *(Gộp 2 buổi gốc; phần method chaining của `this` chỉ giới thiệu lướt vì ít khi ra thi, dồn thời gian cho Copy Constructor — nội dung có khả năng ra thi cao hơn nhiều.)*

**Phần 1 — `this` (Lý thuyết 20p + Thực hành 20p):**
- Mỗi phương thức không static đều có tham số ẩn `this` — trỏ tới chính object đang gọi.
- **Ứng dụng chính (thực hành kỹ):** giải quyết trùng tên tham số/thuộc tính (`this->ten = ten;`) — tình huống rất hay gặp trong constructor.
- **Ứng dụng phụ (chỉ giới thiệu, đọc hiểu, không bắt thực hành sâu):** hàm trả về `*this` cho phép gọi nối tiếp (`cCalc.Add(5).Sub(3);`) — cho học viên xem code mẫu, giải thích cơ chế, không giao bài tập chaining riêng.
- Thực hành: thêm `this->` vào constructor các class đã viết trước đó khi tên tham số trùng tên thuộc tính.

**Phần 2 — Copy Constructor & Friend (Lý thuyết 30p + Thực hành 45p):**
- Ôn nhanh (5p): nhắc lại demo shallow copy ở Buổi 13.
- Khi nào copy constructor tự động chạy: `CDiem b = a;`, truyền/trả object theo giá trị.
- Default copy constructor sao chép shallow — nguy hiểm nếu class có con trỏ thành viên. Liên hệ trực tiếp `CMangDong` ở Buổi 13.
- Tự viết copy constructor (deep copy): cấp phát vùng nhớ mới, sao chép dữ liệu thay vì địa chỉ.
- Friend function: hàm không phải thành viên nhưng được class cho phép truy cập private.
- Thực hành: quay lại `CMangDong`, cố tình KHÔNG viết copy constructor để tái hiện lỗi shallow copy, rồi viết copy constructor đúng để sửa. Viết 1 hàm friend đơn giản (VD: `soSanh` 2 object `CHocSinh`).

**Tự làm (15p):** Viết copy constructor cho 1 class có con trỏ thành viên tự chọn.

**Bài tập về nhà:** 1 bài dùng `this` để phân biệt tham số/thuộc tính trùng tên. Đọc trước "vì sao `cout << obj` cần friend function" (dẫn vào Buổi 20).

---

### Buổi 20 — Nạp chồng toán tử: cơ bản + nâng cao & giới hạn
**Mục tiêu:** Hiểu overload áp dụng cho cả toán tử, không chỉ hàm — và biết giới hạn của nó, khi nào phải dùng hàm thường/friend. *(Gộp 2 buổi gốc thành 1 mạch liền, vì Buổi 19 vừa học friend function nên sẽ thấy kết nối tự nhiên ngay.)*

**Phần 1 — Cơ bản (Lý thuyết 25p + Thực hành 35p):**
- Ôn nhanh overload hàm (Buổi 7) → mở rộng sang toán tử: `+`, `-`, `==`.
- Cú pháp overload dạng thành viên: `CVector operator+(const CVector &other)` — giải thích `const &` ở đây: dùng tham chiếu để tránh copy object không cần thiết, `const` để đảm bảo hàm không lỡ sửa object truyền vào.
- Thực hành: xây class `CPhanSo` (tử số, mẫu số), overload `+`, `-`, `==`.

**Phần 2 — Nâng cao & giới hạn (Lý thuyết 25p + Thực hành 35-40p):**
- Giới hạn: toán hạng bên trái bắt buộc là object của class đó nếu overload dạng thành viên → `cout << myVector;` không thể overload như hàm thành viên.
- Giải pháp: overload `<<` dưới dạng hàm thường/friend nhận `ostream&` và `const CVector&`.
- Áp dụng friend function đã học ở Buổi 19 vào tình huống thực tế này.
- Thực hành: overload `<<` cho `CPhanSo` bằng friend function (in dạng "tử/mẫu"). Thử overload `>>` để nhập trực tiếp.

**Tự làm (20p):** Overload `*` cho `CPhanSo`. Áp dụng overload `<<` tương tự cho 1 class tự chọn (VD: `CDiem`, `CVector`).

**Bài tập về nhà:** Hoàn thiện `CPhanSo` đầy đủ `+ - * == < << >>`.

---

### Buổi 21 — Xử lý ngoại lệ: try/catch/throw + Custom Exception
**Mục tiêu:** Biết xử lý lỗi runtime có kiểm soát, và tự định nghĩa loại ngoại lệ riêng. *(Gộp 2 buổi gốc — custom exception là mở rộng tự nhiên ngay sau khi nắm try/catch cơ bản, và tận dụng lại `virtual` đã rất vững từ Buổi 15.)*

**Phần 1 — try/catch/throw cơ bản (Lý thuyết 25p + Thực hành 35p):**
- Vấn đề: lỗi runtime (chia cho 0, truy cập ngoài mảng, cấp phát thất bại) nếu không xử lý sẽ crash. Ôn lại ví dụ kiểm tra `new` trả NULL ở Buổi 4.
- `throw` / `try` / `catch`. Nhiều khối `catch` cho nhiều kiểu lỗi, và `catch(...)` bắt tất cả.
- Thực hành: hàm chia 2 số, `throw` khi chia cho 0, bắt bằng `try/catch`. Chương trình có nhiều khối `catch` khác kiểu + `catch(...)`.

**Phần 2 — Custom Exception (Lý thuyết 25p + Thực hành 30-35p):**
- Class `exception` chuẩn của C++, phương thức ảo `what()`.
- Tự định nghĩa exception riêng: `class MyException : public exception { ... }`, override `what()`.
- Bắt bằng `catch(exception &e)` — nhờ đa hình (đã học Buổi 15), bắt được cả exception chuẩn lẫn tự định nghĩa. **Đây chính là ứng dụng thực tế của `virtual`** — một khoảng cách khá xa từ lúc học tới lúc dùng lại, chính là kiểu ôn tập cách quãng (spaced repetition) hiệu quả.
- Thực hành: viết `NgoaiLeChiaCho0 : public exception` với `what()` tùy chỉnh. Áp dụng vào chương trình máy tính (từ Buổi 9) để xử lý chia cho 0 chuyên nghiệp.

**Tự làm (15p):** Áp dụng try/catch vào `CMangDong` (Buổi 13): throw lỗi khi truy cập chỉ số ngoài phạm vi. Custom exception cho tình huống tự chọn (VD: rút quá số dư trong `CTaiKhoanNganHang`).

**Bài tập về nhà:** Hoàn thiện `CTaiKhoanNganHang` với custom exception khi rút quá số dư.

---

### Buổi 22 — Ôn tập toàn khóa + dự án nhỏ tổng hợp
**Mục tiêu:** Tổng hợp toàn bộ nội dung thành 1 sản phẩm hoàn chỉnh, chuẩn bị trực tiếp cho thi + đồ án.

**Nội dung (120-150p):**
- Giao đề bài dự án nhỏ bắt buộc dùng tối thiểu: 1 class cha trừu tượng + 2 class con, constructor/destructor hợp lý, ít nhất 1 toán tử overload, xử lý ít nhất 1 ngoại lệ, có thể dùng linked list nếu đề phù hợp.
- **Ưu tiên dùng đề đồ án thật của trường nếu đã có** — chỉ dùng ví dụ chung ("Quản lý thư viện": `TaiLieu` trừu tượng, con là `Sach`/`TapChi`, danh sách bằng linked list, overload `<<`, exception khi mượn sách hết) nếu trường chưa giao đề.
- Học viên tự thiết kế, chỉ gợi ý khi bí, không code hộ.
- 15-20 phút cuối: nhìn lại toàn bộ lộ trình 23 buổi, chỉ ra mạnh/yếu ở đâu, gợi ý hướng ôn thi tiếp theo (giải đề mẫu của trường nếu có).

---

## 8. GHI CHÚ CUỐI

- **Về tốc độ:** Lịch trên là lịch tối thiểu cho lộ trình 1 tháng, không cố định cứng. Nếu ở Buổi 5 hoặc Buổi 16 (2 checkpoint lớn) chưa đạt tiêu chí, chèn thêm buổi ôn tập — thà chậm còn hơn đắp lên nền chưa vững.
- **Về Buổi 16 — mốc quan trọng nhất:** Đánh dấu học viên đã đạt mục tiêu cốt lõi "hiểu 4 tính chất OOP". Nếu vì lý do nào đó phải dừng giữa chừng, đây là điểm dừng an toàn nhất.
- **Sau Buổi 22:** Đây là buổi cuối có hướng dẫn trực tiếp. Nếu còn thời gian trong tháng trước ngày thi/nộp đồ án thật, dùng để luyện đề mẫu và hoàn thiện đồ án, không học nội dung mới.
- **Về việc bỏ Chuỗi ký tự C và Ôn tập tổng kết C:** Nếu trong quá trình học, học viên gặp code cần thao tác chuỗi kiểu C (char array), có thể dạy bổ sung ngắn ngay tại chỗ (10-15p) thay vì phải quay lại từ đầu — không cần 1 buổi riêng.

---

## 9. PHƯƠNG ÁN NÉN THÊM — NẾU CHỈ CÓ ĐÚNG ~20 BUỔI

Bản trên là 23 buổi, nhỉnh hơn ngân sách chặt nhất (20 buổi) một chút. Nếu tới giữa khóa mà thấy lịch thực tế chỉ cho phép đúng 20 buổi (nghỉ lễ, bận đột xuất...), đây là thứ tự ưu tiên cắt tiếp — **theo đúng nguyên tắc chỉ đụng vào Nhóm 2 (áp dụng), không đụng Nhóm 1 (nền tảng)**:

1. **Gộp Buổi 17+18 (Linked List) thành 1 buổi rất dài (150-180p).** Rủi ro: đây vốn đã là chủ đề khó, gộp mạnh hơn sẽ tăng rủi ro thật sự — chỉ làm nếu học viên đang thể hiện tốt ở Buổi 16.
2. **Bỏ phần "nâng cao & giới hạn" của Nạp chồng toán tử (Buổi 20)** — chỉ dạy overload cơ bản (`+ - ==`), để phần friend function cho `<<`/`>>` thành tự đọc slide trường + Bò giải đáp nhanh nếu cần, không thực hành sâu tại buổi.
3. **Rút Buổi 22 (Ôn tập + dự án) xuống còn phần giao đề + hướng dẫn khởi động (60-90p)**, để học viên tự hoàn thiện đồ án ở nhà thay vì làm tại buổi, dành buổi cho việc khác nếu cần.

**Không bao giờ cắt vào:** Buổi 5, Buổi 8, Buổi 15, Buổi 16 — đây là 4 buổi nền tảng cốt lõi nhất theo đánh giá xuyên suốt 3 phiên bản giáo án.
