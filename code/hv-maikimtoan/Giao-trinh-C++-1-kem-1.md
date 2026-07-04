# GIÁO TRÌNH DẠY C++ 1 KÈM 1
### Bám sát cấu trúc môn PRG1006 (C++ Programming II) — thiết kế cho học viên tiếp thu chậm

---

## 1. TỔNG QUAN

- **Đối tượng:** Học viên mới học xong **C căn bản** (biến, kiểu dữ liệu, vòng lặp, mảng, hàm, câu điều kiện). Chưa từng học C++, chưa học OOP.
- **Hình thức:** Kèm 1-1.
- **Thời lượng mỗi buổi:** 90 phút.
- **Tổng số buổi:** 27 buổi (Buổi 0 → Buổi 26), tương đương ~40.5 giờ học.
- **Gốc giáo trình:** 11 Module của PRG1006 (Con trỏ → Cấp phát động → Hàm → Lớp → Linked List → This/Copy Constructor/Friend → Nạp chồng → Kế thừa/Đa hình → Ngoại lệ). Tui giữ đúng thứ tự và nội dung này, chỉ **chẻ nhỏ mỗi Module thành 2-3 buổi** thay vì gói gọn 1 buổi, vì học viên cần thời gian tiêu hóa + luyện tập thay vì chạy hết lý thuyết trong 1 lần.

> **Lưu ý quan trọng:** Bộ slide trường đưa không có **Module 5** (đúng lý phải là "Classes: Part I" — nằm giữa Module 4 và Module 6 "Classes: Part II"). Tui tự soạn 2 buổi thay thế (Buổi 10-11) theo đúng mạch: giới thiệu class cơ bản trước khi vào constructor/destructor ở Module 6. Nội dung chuẩn OOP nhập môn, không lệch với phần sau.

---

## 2. GIẢ ĐỊNH ĐẦU VÀO — ĐẦU RA

**Học viên đã biết (từ C):** biến, kiểu dữ liệu cơ bản, if/else, switch, for/while/do-while, mảng 1 chiều, hàm (khai báo, gọi hàm, tham số, return), có thể đã chạm con trỏ ở mức sơ khai (con trỏ với mảng/chuỗi) nhưng **chưa chắc** vững.

**Học viên CHƯA biết (sẽ học trong khóa này):**
- Cú pháp C++ (cin/cout, namespace, bool, string)
- Con trỏ nâng cao, con trỏ đôi, cấp phát động (new/delete)
- Tham chiếu (reference) — khái niệm không tồn tại trong C
- Toàn bộ OOP: class, object, constructor/destructor, this, friend, copy constructor
- Nạp chồng hàm/toán tử
- Kế thừa, đa hình, hàm ảo
- Danh sách liên kết bằng con trỏ + class
- Xử lý ngoại lệ (try/catch/throw)

**Sau khóa học, học viên có thể:**
- Đọc hiểu và tự viết chương trình C++ hướng đối tượng cỡ vừa (200-400 dòng)
- Tự cài đặt cấu trúc dữ liệu động cơ bản (linked list) bằng con trỏ
- Thiết kế class có constructor/destructor/overload hợp lý, biết khi nào dùng kế thừa
- Đọc hiểu code C++ có exception handling

---

## 3. KHUNG CHUẨN CHO 1 BUỔI HỌC (90 PHÚT)

Vì học viên tiếp thu chậm, **không dồn lý thuyết**. Mỗi buổi theo khung cố định để tạo thói quen:

| Thời gian | Hoạt động |
|---|---|
| 0–10 phút | Ôn nhanh buổi trước (hỏi lại 2-3 câu, sửa bài tập về nhà) |
| 10–35 phút | Lý thuyết + ví dụ mẫu (code cùng nhau, giải thích **tại sao**, không chỉ **cái gì**) |
| 35–70 phút | Thực hành có hướng dẫn — Bò ngồi cạnh, để học viên tự gõ, chỉ gợi ý khi bí quá 3-5 phút |
| 70–85 phút | 1 bài tập học viên tự làm độc lập (Bò quan sát, không can thiệp) để kiểm tra thật sự hiểu chưa |
| 85–90 phút | Tổng kết bằng lời (bắt học viên tự nói lại khái niệm bằng ngôn ngữ của mình) + giao bài về nhà |

**Nguyên tắc sư phạm xuyên suốt:**
1. **Vẽ hình luôn tay** với con trỏ/bộ nhớ — ô nhớ, địa chỉ, mũi tên. Đừng chỉ nói chay.
2. **Một khái niệm mới → tối thiểu 3 bài tập** ở 3 mức: bắt chước y hệt ví dụ → đổi số liệu/ngữ cảnh → áp dụng vào bài toán khác.
3. **Không tự sửa lỗi giùm.** Hỏi "em nghĩ dòng nào sai, vì sao" trước khi Bò chỉ ra.
4. **Không chuyển buổi mới khi buổi tự làm độc lập (mục 70-85p) chưa đạt.** Thà chậm tiến độ còn hơn đắp lên nền chưa vững — nhất là Module 1-2 (con trỏ + cấp phát động), đây là điểm nghẽn kinh điển của người mới.
5. Cho học viên **đọc lỗi compiler** thành tiếng và đoán nghĩa trước khi Bò giải thích — đây là kỹ năng sẽ dùng cả đời.

---

## 4. LỘ TRÌNH TỔNG THỂ (27 BUỔI)

| Buổi | Chủ đề | Tương ứng Module trường |
|---|---|---|
| 0 | Từ C sang C++ — làm quen cú pháp mới | (Cầu nối, không có trong PRG1006) |
| 1 | Con trỏ cơ bản | Module 1 |
| 2 | Con trỏ nâng cao + luyện tập | Module 1 |
| 3 | Cấp phát bộ nhớ động | Module 2 |
| 4 | **Checkpoint:** Luyện tập tổng hợp Con trỏ & Bộ nhớ động | Module 1+2 |
| 5 | Hàm & truyền tham số | Module 3 |
| 6 | Truyền mảng, trả giá trị từ hàm | Module 3 |
| 7 | Đối số mặc định & nạp chồng hàm | Module 4 |
| 8 | Đệ quy & biến static | Module 4 |
| 9 | **Checkpoint:** Luyện tập tổng hợp Hàm | Module 3+4 |
| 10 | Nhập môn Lớp & Đối tượng | Module 5 (tự soạn) |
| 11 | Thực hành xây dựng class hoàn chỉnh | Module 5 (tự soạn) |
| 12 | Constructor | Module 6 |
| 13 | Destructor & ôn tập Class | Module 6 |
| 14 | Linked List — khởi tạo & duyệt | Module 7 |
| 15 | Linked List — thêm & xóa phần tử | Module 7 |
| 16 | **Checkpoint:** Luyện tập tổng hợp Linked List | Module 7 |
| 17 | Con trỏ `this` & hàm nối chuỗi | Module 8 |
| 18 | Copy Constructor & Friend Function | Module 8 |
| 19 | Nạp chồng toán tử — cơ bản | Module 9 |
| 20 | Nạp chồng toán tử — nâng cao & giới hạn | Module 9 |
| 21 | Kế thừa (Inheritance) | Module 10 |
| 22 | Đa hình (Polymorphism) & hàm ảo | Module 10 |
| 23 | **Checkpoint:** Luyện tập Kế thừa & Đa hình | Module 10 |
| 24 | Xử lý ngoại lệ — try/catch/throw | Module 11 |
| 25 | Custom Exception & tổng kết ngoại lệ | Module 11 |
| 26 | Ôn tập toàn khóa + dự án nhỏ tổng hợp | Toàn bộ |

---

## 5. CHI TIẾT TỪNG BUỔI

### Buổi 0 — Từ C sang C++: làm quen cú pháp mới
**Mục tiêu:** Học viên không bị "sốc cú pháp" khi nhìn code C++, hiểu C++ là C + thêm tính năng, không phải ngôn ngữ hoàn toàn xa lạ.

**Lý thuyết & ví dụ (25p):**
- `#include <iostream>`, `using namespace std;`, `cin >> / cout <<` thay cho `scanf/printf` — giải thích `cout` thực chất là object, `<<` là toán tử được nạp chồng (chỉ nói sơ, sẽ học kỹ ở Buổi 19-20, tránh đào sâu ở đây).
- Kiểu `bool` (true/false) so với dùng `int` 0/1 trong C.
- Khai báo biến linh hoạt hơn (không cần khai báo hết đầu hàm như C89).
- Giới thiệu nhanh `string` (so với char array trong C) — chỉ dùng, chưa giải thích cơ chế.
- **Nói rõ:** "Con trỏ, hàm, mảng, vòng lặp — y hệt C. Cái mới hôm nay chỉ là cách nhập/xuất và vài kiểu dữ liệu."

**Thực hành (45p):** Viết lại 3 chương trình C cũ (nhập 2 số cộng lại, tính giai thừa bằng vòng lặp, in mảng) sang cú pháp C++.

**Tự làm (15p):** 1 bài mới hoàn toàn bằng C++ (không cho xem lại code C) — ví dụ: nhập tên và tuổi, in ra câu chào.

**Bài tập về nhà:** 3 bài nhỏ chuyển đổi C → C++.

**Lỗi thường gặp:** quên `using namespace std;` rồi không hiểu vì sao `cout` báo lỗi "not declared" — đây là bài học tốt để giới thiệu khái niệm namespace mà không cần giảng sâu.

---

### Buổi 1 — Con trỏ cơ bản
**Mục tiêu:** Củng cố vững con trỏ (vì học ở C có thể còn hời hợt) — đây là nền tảng cho toàn bộ nửa sau khóa học.

**Lý thuyết (30p):**
- Biến = tên gọi của 1 ô nhớ có địa chỉ. Vẽ hình: ô nhớ, địa chỉ (VD 0x7ffee), giá trị.
- Toán tử `&` (address-of) và `*` (dereference) — nhấn mạnh `*` có 2 nghĩa khác nhau tùy ngữ cảnh (khai báo vs dùng), đây là điểm học viên hay lú nhất.
- Khai báo con trỏ: `int *p;` — giải thích tại sao cần khai báo kiểu (để trình biên dịch biết bước bao nhiêu byte khi `p++`).
- Con trỏ NULL / con trỏ chưa khởi tạo (wild pointer) — tại sao nguy hiểm.

**Thực hành (40p):**
- Viết chương trình: khai báo biến int, lấy địa chỉ gán cho con trỏ, in ra giá trị qua `*p`, đổi giá trị qua con trỏ rồi in biến gốc.
- Bài tập: hoán đổi giá trị 2 biến — thử bằng hàm không dùng con trỏ trước (sẽ thất bại), sau đó dùng con trỏ để sửa. Đây là ví dụ kinh điển giúp học viên "vỡ" ra tại sao cần con trỏ.

**Tự làm (15p):** Viết hàm `swap` bằng con trỏ, gọi thử với 2 biến, in kết quả trước/sau.

**Bài tập về nhà:** 3 bài về đọc/ghi qua con trỏ, 1 bài vẽ tay sơ đồ bộ nhớ cho 1 đoạn code cho trước (không chạy máy, làm trên giấy).

---

### Buổi 2 — Con trỏ nâng cao + luyện tập
**Mục tiêu:** Con trỏ với mảng, con trỏ đôi, tự tin đọc code có nhiều dấu `*`.

**Lý thuyết (30p):**
- Quan hệ mảng — con trỏ: tên mảng là địa chỉ phần tử đầu, `arr[i]` tương đương `*(arr + i)`.
- Con trỏ đôi (`int **p`) — dùng ví dụ trong slide trường: `char a; char *b; char **c;` vẽ 3 tầng ô nhớ rõ ràng.
- Khi nào cần con trỏ đôi (sẽ dùng ở Module 3 khi hàm cần sửa con trỏ được truyền vào — chỉ nói trước để học viên có kỳ vọng).

**Thực hành (40p):** Duyệt mảng bằng con trỏ thay vì chỉ số `[]`, in địa chỉ từng phần tử để thấy bước nhảy theo kiểu dữ liệu (int nhảy 4 byte, char nhảy 1 byte...).

**Tự làm (15p):** Bài tập tổng hợp: viết hàm dùng con trỏ đôi để thay đổi giá trị 1 con trỏ ở hàm gọi (không cần hiểu sâu ứng dụng thực tế, chỉ cần chạy đúng và giải thích được luồng).

**Bài tập về nhà:** Ôn tập, chuẩn bị cho Buổi 3 (cấp phát động) — 1 bài đọc trước: "Tại sao mảng khai báo tĩnh (`int arr[100]`) có lúc không đủ dùng?"

---

### Buổi 3 — Cấp phát bộ nhớ động
**Mục tiêu:** Hiểu Stack vs Heap, biết cấp phát/giải phóng đúng cách, tránh rò rỉ bộ nhớ.

**Lý thuyết (30p):**
- Stack (bộ nhớ tĩnh, tự dọn) vs Heap (bộ nhớ động, tự quản lý).
- `new` / `delete` — so sánh trực tiếp với `malloc/free` mà học viên đã biết ở C (giúp bắc cầu kiến thức cũ).
- Cấp phát mảng động: `new int[5]`, `delete[]`.
- Xử lý lỗi cấp phát (kiểm tra NULL, dùng try/catch sơ lược — sẽ học kỹ ở Buổi 24).
- **Nhấn mạnh quy tắc:** mỗi `new` phải có đúng 1 `delete` tương ứng — vẽ sơ đồ vòng đời bộ nhớ động.

**Thực hành (40p):** Cấp phát mảng động theo kích thước người dùng nhập (khác với mảng tĩnh phải cố định lúc biên dịch — cho học viên thấy rõ lợi ích thực tế). Thực hành giải phóng và thử truy cập sau khi delete để thấy lỗi (dangling pointer) — có kiểm soát, giải thích rõ đây là lỗi cố ý để học.

**Tự làm (15p):** Viết chương trình nhập n, cấp phát mảng n phần tử, nhập giá trị, tính tổng/trung bình, giải phóng bộ nhớ đúng cách.

**Bài tập về nhà:** 2 bài cấp phát động, 1 bài yêu cầu tự tìm lỗi trong đoạn code có memory leak cho sẵn.

---

### Buổi 4 — CHECKPOINT: Luyện tập tổng hợp Con trỏ & Bộ nhớ động
**Mục tiêu:** Đây là buổi bắt buộc không dạy kiến thức mới — chỉ củng cố. Nếu học viên chưa vững, **lặp lại buổi này** trước khi qua Module 3.

**Nội dung (90p toàn bộ là thực hành):**
- 15p: Bò đặt 5-6 câu hỏi vấn đáp nhanh (không viết code) kiểu "con trỏ này trỏ tới đâu sau dòng lệnh này" để kiểm tra tư duy, không chỉ kiểm tra gõ code đúng.
- 45p: Bài tập tổng hợp cỡ vừa — ví dụ: viết chương trình quản lý danh sách điểm số dùng mảng động (nhập số lượng sinh viên, cấp phát động, nhập điểm, tính điểm trung bình, tìm max/min, giải phóng bộ nhớ).
- 30p: Học viên tự giải thích lại toàn bộ đoạn code mình vừa viết cho Bò nghe (kỹ thuật "rubber duck ngược" — ép học viên diễn đạt bằng lời).

**Tiêu chí để qua buổi này:** Học viên tự viết được chương trình cấp phát động độc lập, không cần Bò gợi ý cú pháp, và giải thích đúng lý do dùng `new/delete` thay vì mảng tĩnh.

---

### Buổi 5 — Hàm & truyền tham số
**Mục tiêu:** Hiểu sự khác nhau giữa truyền theo giá trị, tham chiếu, con trỏ — đây là 3 cách nhưng học viên C chỉ mới biết truyền giá trị.

**Lý thuyết (30p):**
- Ôn nhanh cú pháp hàm C++ (giống C, chỉ khác cách nhập xuất).
- Truyền theo giá trị (pass by value): bản sao được tạo, sửa trong hàm không ảnh hưởng bên ngoài — học viên đã biết, ôn nhanh.
- Truyền theo tham chiếu (pass by reference) — **khái niệm hoàn toàn mới**: `void f(int &x)`. Giải thích tham chiếu là "bí danh" (alias) của biến gốc, không phải con trỏ, không cần `*` hay `&` khi dùng bên trong hàm.
- So sánh 3 cách side-by-side trong 1 bảng: value / reference / pointer — cùng 1 bài toán tăng biến lên 1, viết cả 3 cách để thấy khác biệt.

**Thực hành (40p):** Viết lại bài `swap` từ Buổi 1 bằng tham chiếu — cho học viên thấy code gọn hơn hẳn so với dùng con trỏ, nhưng bản chất tương tự (đều truy cập được biến gốc).

**Tự làm (15p):** Viết hàm tính tổng và tích 2 số, trả về đồng thời 2 kết quả cho biến ngoài — bắt buộc dùng tham chiếu (vì hàm chỉ return được 1 giá trị).

**Bài tập về nhà:** 3 bài, mỗi bài yêu cầu chọn đúng cách truyền tham số phù hợp (có bài nên dùng value, có bài bắt buộc reference/pointer) để rèn tư duy chọn lựa chứ không học vẹt.

---

### Buổi 6 — Truyền mảng, trả về giá trị từ hàm
**Mục tiêu:** Hiểu mảng khi truyền vào hàm thực chất là truyền con trỏ, và các cách trả giá trị an toàn từ hàm.

**Lý thuyết (30p):**
- Truyền mảng vào hàm: tên mảng suy biến thành con trỏ, hàm nhận được địa chỉ đầu mảng → sửa phần tử trong hàm ảnh hưởng mảng gốc (khác hẳn truyền biến thường).
- Vấn đề "trả về con trỏ trỏ tới biến cục bộ" — lỗi kinh điển (biến cục bộ mất khi hàm kết thúc, con trỏ trả về thành dangling pointer). Đây là lý do cấp phát động (Buổi 3) hữu ích: trả về con trỏ tới vùng nhớ heap thì an toàn.

**Thực hành (40p):** Viết hàm nhận mảng + kích thước, tìm max/min, đảo ngược mảng tại chỗ (in-place). Sau đó viết 1 hàm CỐ TÌNH trả về con trỏ tới biến cục bộ để học viên tận mắt thấy lỗi/hành vi không xác định, rồi sửa lại bằng cách cấp phát động trong hàm và trả về con trỏ đó.

**Tự làm (15p):** Viết hàm nhận mảng, trả về 1 mảng mới đã sắp xếp tăng dần (cấp phát động bên trong hàm, trả con trỏ ra ngoài, người gọi chịu trách nhiệm delete).

**Bài tập về nhà:** 2 bài truyền mảng, 1 bài yêu cầu viết hàm trả về mảng động.

---

### Buổi 7 — Đối số mặc định & nạp chồng hàm
**Mục tiêu:** Viết hàm linh hoạt hơn, làm quen khái niệm "nhiều hàm cùng tên".

**Lý thuyết (30p):**
- Đối số mặc định (default arguments): `void f(int a, int b = 10)` — quy tắc tham số có default phải nằm cuối danh sách.
- Nạp chồng hàm (function overloading): nhiều hàm cùng tên, khác số lượng/kiểu tham số. Trình biên dịch chọn hàm dựa vào tham số truyền vào lúc gọi.
- Lưu ý: **không thể** overload chỉ khác kiểu trả về — chỉ mới dùng để phân biệt được.
- Ví dụ kinh điển: hàm `max` cho int và max cho float (giống slide trường).

**Thực hành (40p):** Viết 3-4 hàm `tinhDienTich` overload cho hình vuông (1 tham số), hình chữ nhật (2 tham số), hình tròn (1 tham số nhưng khác kiểu/tên rõ ràng để tránh nhầm — thảo luận với học viên khi nào overload gây rối thay vì giúp ích).

**Tự làm (15p):** Viết hàm `inThongTin` overload cho 3 kiểu dữ liệu khác nhau (int, double, string).

**Bài tập về nhà:** 2 bài default argument, 2 bài overload.

---

### Buổi 8 — Đệ quy & biến static
**Mục tiêu:** Hiểu cơ chế hàm gọi chính nó, và biến static giữ giá trị qua các lần gọi hàm.

**Lý thuyết (30p):**
- Đệ quy: hàm tự gọi lại chính nó, có điều kiện dừng (base case). Ví dụ giai thừa — vẽ **cây gọi hàm** (call stack) từng bước: `Factorial(5) = 5*Factorial(4) = ...` — đây là chỗ học viên chậm hiểu hay rối nhất, phải vẽ tay từng lớp stack.
- So sánh đệ quy vs vòng lặp — cùng 1 bài toán (giai thừa/Fibonacci) viết cả 2 cách để thấy đánh đổi (đệ quy dễ đọc hơn nhưng tốn bộ nhớ stack hơn).
- Biến static trong hàm: giữ giá trị giữa các lần gọi (khác biến local thường bị hủy mỗi lần hàm kết thúc). Ví dụ slide trường: đếm số lần hàm được gọi.

**Thực hành (40p):** Viết hàm đệ quy tính giai thừa, tính tổng dãy số 1→n, tính Fibonacci (n nhỏ, chưa cần tối ưu). Với mỗi hàm, học viên phải **vẽ tay cây gọi** trước khi chạy máy kiểm chứng.

**Tự làm (15p):** Viết hàm đệ quy đếm số chữ số của 1 số nguyên, cộng thêm bài dùng static để đếm số lần hàm đã được gọi qua nhiều lần main gọi lại.

**Bài tập về nhà:** 2 bài đệ quy đơn giản (tổng dãy, lũy thừa), 1 bài static.

---

### Buổi 9 — CHECKPOINT: Luyện tập tổng hợp Hàm
**Mục tiêu:** Củng cố toàn bộ Module 3+4 trước khi bước vào OOP — phần khó thứ 2 của khóa sau con trỏ.

**Nội dung (90p, toàn thực hành):**
- 20p: Vấn đáp nhanh — đưa đoạn code có đệ quy hoặc overload, hỏi output trước khi chạy máy.
- 50p: Bài tổng hợp lớn — ví dụ: chương trình máy tính đơn giản có các hàm overload cho cộng/trừ/nhân/chia (int và double), có 1 hàm đệ quy tính lũy thừa, dùng tham chiếu để trả nhiều kết quả.
- 20p: Học viên tự giải thích luồng chạy chương trình.

**Tiêu chí qua buổi:** Tự phân biệt được khi nào dùng value/reference/pointer, giải thích được cây đệ quy của 1 hàm bất kỳ do Bò đưa ra.

---

### Buổi 10 — Nhập môn Lớp & Đối tượng
**Mục tiêu:** Hiểu OOP là gì và tại sao cần nó (chuyển tư duy từ lập trình thủ tục của C sang hướng đối tượng).

**Lý thuyết (35p):**
- Vấn đề của lập trình thủ tục: dữ liệu và hàm xử lý tách rời, khó quản lý khi chương trình lớn (lấy ví dụ quản lý sinh viên bằng struct + hàm rời rạc ở C để học viên thấy sự cồng kềnh).
- Class = khuôn mẫu, Object = thực thể được tạo ra từ khuôn mẫu — dùng ví dụ đời thường (class "Xe hơi" - bản thiết kế, object là chiếc xe cụ thể).
- Từ khóa `class`, thuộc tính (member variable), phương thức (member function).
- `private` / `public` — khái niệm đóng gói (encapsulation): giấu dữ liệu, chỉ cho truy cập qua phương thức. So sánh với struct trong C (mọi thứ public, không kiểm soát được).
- Cú pháp khai báo object và gọi phương thức bằng dấu `.`

**Thực hành (40p):** Cùng xây dựng class `CDiem` (điểm 2D: x, y) — thuộc tính private, phương thức `setX/getX`, `setY/getY`, phương thức `inToaDo()`. Tạo vài object, gọi phương thức.

**Tự làm (15p):** Tự viết class `CHocSinh` với thuộc tính tên, tuổi, điểm trung bình (private), các hàm get/set và hàm `xepLoai()` trả về "Giỏi/Khá/Trung bình" dựa trên điểm.

**Bài tập về nhà:** Hoàn thiện class `CHocSinh`, thêm 1 hàm `inThongTin()`.

---

### Buổi 11 — Thực hành xây dựng class hoàn chỉnh
**Mục tiêu:** Thành thạo việc thiết kế class, làm quen tách khai báo (.h) và triển khai (.cpp) — chuẩn bị cho code dự án thật sau này.

**Lý thuyết (25p):**
- Định nghĩa phương thức bên ngoài class bằng toán tử phạm vi `::` (VD: `void CHocSinh::inThongTin() {...}`) — tại sao cách này gọn hơn khi class lớn.
- Giới thiệu tách file `.h` (khai báo class) và `.cpp` (triển khai) — chỉ ở mức làm quen, chưa cần ép buộc dùng ngay nếu học viên còn đang quen 1 file.
- Ôn lại nguyên tắc thiết kế: thuộc tính luôn private trừ khi có lý do rõ ràng, đặt tên phương thức rõ nghĩa.

**Thực hành (50p):** Xây dựng class `CHinhChuNhat` (chiều dài, chiều rộng) hoàn chỉnh: get/set, tính diện tích, tính chu vi, so sánh 2 hình chữ nhật hình nào lớn hơn (viết hàm thường nhận 2 object, chưa overload toán tử — sẽ học ở Buổi 19-20).

**Tự làm (15p):** Class `CTaiKhoanNganHang` (số dư, chủ tài khoản) với các phương thức `napTien`, `rutTien` (có kiểm tra rút quá số dư), `xemSoDu`.

**Bài tập về nhà:** Hoàn thiện `CTaiKhoanNganHang`, viết thêm chương trình main tạo 2-3 tài khoản và thao tác thử.

---

### Buổi 12 — Constructor
**Mục tiêu:** Hiểu constructor là gì, tại sao cần, các loại constructor.

**Lý thuyết (30p):**
- Vấn đề: object mới tạo có thuộc tính chưa khởi tạo (rác) — nếu quên gọi hàm `set` thì object ở trạng thái không hợp lệ. Constructor giải quyết việc này.
- Constructor: hàm đặc biệt tên trùng tên class, tự động chạy khi tạo object, không có kiểu trả về.
- Default constructor (không tham số) — nếu không viết constructor nào, compiler tự tạo 1 cái default (nhưng thường không khởi tạo giá trị hợp lý → nên tự viết).
- Constructor có tham số, và đối số mặc định trong constructor (liên hệ lại Buổi 7).
- Nạp chồng constructor (nhiều constructor khác tham số) — liên hệ lại khái niệm overload đã học.

**Thực hành (40p):** Thêm constructor cho class `CHocSinh` (Buổi 10): constructor mặc định gán giá trị rỗng/0, constructor có tham số đầy đủ. Tạo object bằng cả 2 cách, so sánh.

**Tự làm (15p):** Thêm 2 constructor (mặc định + đầy đủ tham số) cho class `CTaiKhoanNganHang`.

**Bài tập về nhà:** Viết class `CDiem3D` (x, y, z) với 2 constructor (mặc định gán 0, và constructor nhận 3 tham số).

---

### Buổi 13 — Destructor & ôn tập Class
**Mục tiêu:** Hiểu vòng đời object, khi nào cần destructor tự viết (đặc biệt khi class có cấp phát động bên trong).

**Lý thuyết (30p):**
- Destructor: hàm tên `~TenClass()`, tự động chạy khi object hết phạm vi (scope) hoặc bị `delete`. Không tham số, không trả về.
- Default destructor đủ dùng nếu class không cấp phát động bên trong. Nếu class có `new` bên trong (VD: con trỏ thành viên trỏ tới mảng động) → **bắt buộc** tự viết destructor để `delete`, nếu không sẽ rò rỉ bộ nhớ — liên hệ trực tiếp lại Buổi 3-4.
- Ví dụ thực tế: class có mảng động làm thuộc tính (VD: `CDanhSach` chứa con trỏ tới mảng int cấp phát động) — constructor cấp phát, destructor giải phóng.

**Thực hành (40p):** Xây class `CMangDong` bọc quanh 1 mảng động: constructor nhận kích thước rồi `new`, có hàm `set/get` phần tử, destructor `delete[]`. In ra bằng `cout` để xác nhận constructor/destructor được gọi đúng lúc (đặt `cout` ngay trong constructor/destructor để "nhìn thấy" vòng đời object).

**Tự làm (15p):** Tạo vài object `CMangDong` trong 1 khối lệnh `{ }` để quan sát destructor tự chạy khi ra khỏi khối.

**Bài tập về nhà:** Ôn tập toàn bộ Module Class (Buổi 10-13) — 1 bài tổng hợp: thiết kế 1 class bất kỳ tự chọn chủ đề (thư viện, cửa hàng, game...) có ít nhất: 3 thuộc tính private, 2 constructor, 1 destructor, 4 phương thức.

---

### Buổi 14 — Linked List: khởi tạo & duyệt
**Mục tiêu:** Hiểu cấu trúc dữ liệu động đầu tiên — danh sách liên kết đơn, kết hợp toàn bộ kiến thức con trỏ đã học.

**Lý thuyết (30p):**
- Vấn đề của mảng: kích thước cố định, chèn/xóa giữa mảng tốn công dịch chuyển. Linked list giải quyết bằng cách mỗi phần tử (Node) tự trỏ tới phần tử kế tiếp.
- Cấu trúc Node: chứa dữ liệu + con trỏ `pNext` trỏ tới Node kế. Vẽ hình chuỗi các Node nối bằng mũi tên, kết thúc bằng `NULL`.
- Con trỏ `pStart`/`pHead` trỏ tới Node đầu danh sách.
- Duyệt danh sách: dùng con trỏ tạm `pCurrent = pStart`, lặp `while(pCurrent != NULL)`, in dữ liệu, `pCurrent = pCurrent->pNext`.
- Giới thiệu quy ước đặt tên kiểu Hungarian Notation mà slide trường dùng (p = pointer, r = reference...) — không bắt buộc nhưng giúp đọc code dễ hơn.

**Thực hành (45p):** Cùng xây dựng struct/class `Node` (dữ liệu int + `pNext`), viết hàm tạo danh sách bằng cách nối thủ công 3-4 Node bằng tay (gán `pNext` trực tiếp) trước, sau đó viết hàm `themCuoi()` để thêm Node vào cuối danh sách một cách tổng quát. Viết hàm `inDanhSach()` để duyệt và in.

**Tự làm (15p):** Viết hàm đếm số phần tử trong danh sách, hàm tìm 1 giá trị có tồn tại trong danh sách không.

**Bài tập về nhà:** Tạo danh sách liên kết chứa tên 5 học sinh, viết hàm in ra và đếm.

---

### Buổi 15 — Linked List: thêm & xóa phần tử
**Mục tiêu:** Thao tác chèn/xóa ở đầu, cuối, giữa danh sách — đây là phần khó nhất của linked list vì phải xử lý nhiều trường hợp đặc biệt (danh sách rỗng, xóa Node đầu...).

**Lý thuyết (30p):**
- Thêm đầu danh sách: Node mới trỏ tới `pStart` cũ, rồi `pStart` cập nhật trỏ tới Node mới — nhấn mạnh **thứ tự các dòng lệnh** (nếu đổi `pStart` trước sẽ mất liên kết, vẽ hình minh họa rõ).
- Thêm giữa danh sách: cần duyệt tới đúng vị trí, dùng con trỏ "trước" và "sau" điểm chèn.
- Xóa Node: các trường hợp — xóa đầu, xóa giữa, xóa cuối, xóa danh sách rỗng (edge case). Nhấn mạnh phải `delete` Node bị gỡ ra để tránh rò rỉ bộ nhớ (liên hệ Buổi 3-4).

**Thực hành (45p):** Lần lượt cài đặt: `themDau()`, `themGiua(vitri)`, `xoaDau()`, `xoaCuoi()`, `xoaTheoGiaTri()`. Mỗi hàm viết xong đều test ngay bằng cách in danh sách trước/sau thao tác.

**Tự làm (15p):** Viết hàm `xoaToanBo()` giải phóng hết Node trong danh sách (dọn bộ nhớ trước khi chương trình kết thúc).

**Bài tập về nhà:** Hoàn thiện đầy đủ bộ hàm thêm/xóa, tự viết thêm hàm đảo ngược danh sách liên kết (bài nâng cao, không bắt buộc nếu học viên còn yếu — có thể để dành ôn ở Buổi 16).

---

### Buổi 16 — CHECKPOINT: Luyện tập tổng hợp Linked List
**Mục tiêu:** Đảm bảo học viên tự tin cài đặt linked list từ đầu không cần nhìn mẫu — đây là bài kiểm tra tư duy con trỏ tổng hợp toàn diện nhất trong khóa.

**Nội dung (90p, toàn thực hành):**
- 60p: Đề bài tổng hợp — Quản lý danh sách sinh viên bằng linked list: mỗi Node chứa tên + điểm, có menu (thêm, xóa theo tên, in danh sách, tính điểm trung bình toàn danh sách, tìm sinh viên điểm cao nhất). Học viên tự làm từ đầu, Bò chỉ quan sát.
- 30p: Review code cùng nhau, học viên tự tìm ra chỗ nào code chưa tối ưu hoặc có nguy cơ rò rỉ bộ nhớ.

**Tiêu chí qua buổi:** Tự cài được thêm/xóa/duyệt không cần xem lại bài cũ. Nếu vẫn còn lúng túng ở việc thêm/xóa giữa danh sách, nên dành thêm 1 buổi phụ đạo trước khi qua Module 8.

---

### Buổi 17 — Con trỏ `this` & hàm nối chuỗi
**Mục tiêu:** Hiểu con trỏ `this` hoạt động ngầm bên trong mọi phương thức, và ứng dụng để viết code kiểu "chained".

**Lý thuyết (30p):**
- Mỗi phương thức không static đều có 1 tham số ẩn `this` — con trỏ trỏ tới chính object đang gọi phương thức đó.
- Ứng dụng 1: giải quyết trùng tên giữa tham số và thuộc tính (`this->ten = ten;`) — đây là tình huống rất hay gặp khi đặt tên tham số constructor giống hệt tên thuộc tính.
- Ứng dụng 2: hàm trả về `*this` (trả về chính object) cho phép gọi nối tiếp nhiều phương thức trên 1 dòng — ví dụ slide trường: `cCalc.Add(5).Sub(3).Mult(4);`

**Thực hành (40p):** Thêm `this->` vào constructor các class đã viết trước đó khi tên tham số trùng tên thuộc tính (refactor lại `CHocSinh`, `CTaiKhoanNganHang`). Sau đó xây class `CTinhToan` đơn giản có các hàm `congThem`, `truDi`, `nhanVoi` đều trả về `*this`, thử gọi nối chuỗi.

**Tự làm (15p):** Viết class `CChuoiKyTu` đơn giản có hàm `themKyTu(char c)` trả về `*this`, thử gọi `obj.themKyTu('a').themKyTu('b').themKyTu('c');`

**Bài tập về nhà:** 2 bài dùng `this` để phân biệt tham số/thuộc tính trùng tên, 1 bài viết hàm chained.

---

### Buổi 18 — Copy Constructor & Friend Function
**Mục tiêu:** Hiểu vấn đề sao chép object (đặc biệt khi có con trỏ bên trong) và cách phá vỡ tính đóng gói có kiểm soát bằng friend.

**Lý thuyết (35p):**
- Khi nào copy constructor tự động chạy: `CDiem b = a;`, truyền object theo giá trị vào hàm, hàm trả về object theo giá trị.
- Default copy constructor sao chép **từng byte** (shallow copy) — nguy hiểm nếu class có con trỏ thành viên: 2 object sẽ trỏ chung 1 vùng nhớ, `delete` 1 object sẽ làm con trỏ của object kia thành dangling. Đây là lỗi rất tinh vi, liên hệ trực tiếp lại `CMangDong` ở Buổi 13 để minh họa cụ thể.
- Tự viết copy constructor (deep copy): cấp phát vùng nhớ mới, sao chép dữ liệu thay vì sao chép địa chỉ.
- Friend function: hàm không phải thành viên nhưng được class "cho phép" truy cập private. Dùng khi cần 1 hàm thao tác trên object mà không tiện làm thành viên (VD: hàm nhận 2 object khác class).

**Thực hành (40p):** Quay lại class `CMangDong`, cố tình KHÔNG viết copy constructor, tạo lỗi shallow copy (copy 1 object rồi delete cả 2 → crash hoặc lỗi khi chạy), cho học viên thấy tận mắt. Sau đó viết copy constructor đúng (deep copy) để sửa lỗi. Viết 1 hàm `friend` đơn giản (VD: hàm `soSanh` 2 object `CHocSinh` để xem ai điểm cao hơn, truy cập trực tiếp thuộc tính private).

**Tự làm (15p):** Tự viết copy constructor cho 1 class có con trỏ thành viên tự chọn.

**Bài tập về nhà:** Ôn tập, chuẩn bị: đọc trước "vì sao `cout << obj` cần friend function" (dẫn vào Buổi 19-20).

---

### Buổi 19 — Nạp chồng toán tử: cơ bản
**Mục tiêu:** Hiểu overload không chỉ áp dụng cho hàm mà cả toán tử, giúp code với object tự nhiên như code với kiểu dữ liệu cơ bản.

**Lý thuyết (30p):**
- Ôn nhanh khái niệm overload hàm (Buổi 7) → mở rộng sang toán tử: `+`, `-`, `==`, ... có thể định nghĩa lại cho class tự tạo.
- Cú pháp overload toán tử dạng thành viên: `CVector operator+(const CVector &other)`.
- Ví dụ slide trường: class `CVector` overload `+` để cộng 2 vector.
- Nhấn mạnh: toán tử overload cũng là hàm, chỉ khác cách gọi (gọi bằng ký hiệu thay vì tên hàm).

**Thực hành (45p):** Xây class `CPhanSo` (tử số, mẫu số), overload `+`, `-` để cộng/trừ 2 phân số, overload `==` để so sánh 2 phân số bằng nhau.

**Tự làm (15p):** Overload thêm `*` (nhân 2 phân số) cho class `CPhanSo`.

**Bài tập về nhà:** Overload `<` cho `CPhanSo` (so sánh phân số nào nhỏ hơn — gợi ý quy đồng mẫu số).

---

### Buổi 20 — Nạp chồng toán tử: nâng cao & giới hạn
**Mục tiêu:** Hiểu giới hạn của overload dạng thành viên, biết khi nào phải dùng hàm thường/friend.

**Lý thuyết (30p):**
- Giới hạn: khi overload là hàm thành viên, toán hạng bên trái **bắt buộc** phải là object của class đó → `cout << myVector;` không thể overload `<<` như hàm thành viên của `CVector` vì bên trái là `cout` (kiểu `ostream`), không phải `CVector`.
- Giải pháp: overload `<<` dưới dạng hàm thường (hoặc friend nếu cần truy cập private) nhận 2 tham số: `ostream&` và `const CVector&`.
- Áp dụng friend function đã học ở Buổi 18 vào đúng tình huống thực tế này — học viên sẽ thấy rõ tại sao 2 buổi trước liên quan tới nhau.

**Thực hành (45p):** Overload `<<` cho class `CPhanSo` (in phân số dạng "tử/mẫu") bằng friend function. Sau đó thử overload cả `>>` để nhập phân số trực tiếp bằng `cin >> phanso1;`

**Tự làm (15p):** Áp dụng tương tự cho 1 class tự chọn từ bài tập trước (VD: `CDiem`, `CVector`) — overload `<<` để in object gọn bằng 1 dòng `cout`.

**Bài tập về nhà:** Hoàn thiện class `CPhanSo` đầy đủ: `+ - * ==  < << >>`, viết chương trình main test toàn bộ.

---

### Buổi 21 — Kế thừa (Inheritance)
**Mục tiêu:** Hiểu quan hệ "là một loại của" (is-a), tái sử dụng code qua kế thừa.

**Lý thuyết (35p):**
- Vấn đề: nhiều class có chung thuộc tính/phương thức (VD: `CHocSinh`, `CGiaoVien` đều có tên, tuổi, địa chỉ) → viết lặp lại rất phí. Kế thừa cho phép class con dùng lại code của class cha.
- Cú pháp: `class CHocSinh : public CNguoi { ... }`. Class cha (base class) — class con (derived class).
- Từ khóa truy cập trong kế thừa: `public` (giữ nguyên mức truy cập), khái niệm `protected` (thành viên cha mà class con truy cập được nhưng bên ngoài thì không — khác `private` hoàn toàn ẩn với con).
- Constructor trong kế thừa: class con phải gọi constructor cha (ngầm hoặc tường minh qua danh sách khởi tạo) — đây là điểm hay gây lỗi nếu học viên quên.
- Đa kế thừa (multiple inheritance): class con kế thừa từ nhiều class cha cùng lúc, dùng dấu phẩy — chỉ giới thiệu khái niệm, không đào sâu (ít dùng thực tế, dễ gây rối cho người mới).

**Thực hành (40p):** Xây `class CNguoi` (tên, tuổi, phương thức `gioiThieu()`), sau đó `class CHocSinh : public CNguoi` thêm thuộc tính điểm trung bình + phương thức riêng. Tạo object `CHocSinh`, gọi cả phương thức của cha lẫn của con để thấy rõ tính kế thừa.

**Tự làm (15p):** Thêm `class CGiaoVien : public CNguoi` với thuộc tính riêng là môn dạy.

**Bài tập về nhà:** Hoàn thiện `CGiaoVien`, viết constructor gọi đúng constructor cha.

---

### Buổi 22 — Đa hình (Polymorphism) & hàm ảo
**Mục tiêu:** Hiểu tại sao cần hàm ảo (`virtual`), 1 con trỏ cha có thể gọi đúng hành vi của class con — đây là khái niệm trừu tượng nhất của khóa học.

**Lý thuyết (35p):**
- Vấn đề: con trỏ kiểu cha trỏ tới object con, gọi phương thức bị trùng tên ở cả 2 class → mặc định C++ gọi phiên bản của class **cha** (theo kiểu con trỏ khai báo), không phải hành vi mong muốn. Ví dụ minh họa rõ bằng code chạy thử để học viên tự thấy "bug" trước khi học cách sửa.
- Giải pháp: khai báo `virtual` ở phương thức trong class cha → C++ sẽ gọi đúng phiên bản của object thực sự đang được trỏ tới (late binding / runtime polymorphism).
- Destructor ảo (`virtual ~CNguoi()`) — nêu quy tắc: nếu class dự định làm class cha để kế thừa, destructor nên là `virtual` để tránh rò rỉ bộ nhớ khi xóa qua con trỏ cha (liên hệ lại kiến thức destructor Buổi 13).
- Hàm ảo thuần túy (`virtual void ve() = 0;`) và khái niệm lớp trừu tượng (abstract class) — giới thiệu sơ, ví dụ class `CHinh` không thể tạo object trực tiếp mà chỉ dùng làm cha cho `CHinhTron`, `CHinhVuong`.

**Thực hành (40p):** Từ `CNguoi`/`CHocSinh`/`CGiaoVien` (Buổi 21), thêm phương thức `gioiThieu()` là `virtual`, override lại ở mỗi class con. Tạo mảng con trỏ `CNguoi*` chứa cả `CHocSinh` và `CGiaoVien`, duyệt mảng gọi `gioiThieu()` — cho thấy mỗi object tự "biết" gọi đúng phiên bản của mình dù đi qua con trỏ cha.

**Tự làm (15p):** Thêm class `CHinh` (abstract, có hàm ảo thuần túy `tinhDienTich()`), cho 2 class con `CHinhTron`, `CHinhVuong` implement riêng.

**Bài tập về nhà:** Hoàn thiện bài `CHinh`, viết chương trình tạo mảng con trỏ `CHinh*` chứa cả 2 loại hình, tính tổng diện tích.

---

### Buổi 23 — CHECKPOINT: Luyện tập Kế thừa & Đa hình
**Mục tiêu:** Củng cố toàn bộ Module 10 trước khi vào phần cuối khóa.

**Nội dung (90p, toàn thực hành):**
- 60p: Đề tổng hợp — thiết kế hệ thống nhỏ có class cha trừu tượng (VD: `CNhanVien` với hàm ảo thuần túy `tinhLuong()`), 2-3 class con (`CNhanVienChinhThuc`, `CNhanVienThoiVu`) implement khác nhau, dùng mảng con trỏ cha để quản lý và tính tổng lương toàn công ty.
- 30p: Review — hỏi học viên giải thích vì sao cần `virtual`, thử bỏ `virtual` đi để xem output sai như thế nào rồi khôi phục lại, củng cố trực quan.

**Tiêu chí qua buổi:** Giải thích được sự khác nhau giữa gọi phương thức thường và phương thức ảo qua con trỏ cha, tự implement được lớp trừu tượng.

---

### Buổi 24 — Xử lý ngoại lệ: try/catch/throw
**Mục tiêu:** Biết cách xử lý lỗi runtime một cách có kiểm soát thay vì để chương trình crash.

**Lý thuyết (30p):**
- Vấn đề: các lỗi runtime (chia cho 0, truy cập ngoài mảng, cấp phát thất bại...) nếu không xử lý sẽ làm crash chương trình. Ôn lại ví dụ đã gặp: kiểm tra `new` trả NULL ở Buổi 3 — đó là cách xử lý "thủ công", giờ học cách chuẩn của C++.
- `throw` — ném ra 1 giá trị/đối tượng biểu thị lỗi.
- `try` — khối code có khả năng gây lỗi.
- `catch` — bắt và xử lý lỗi theo kiểu dữ liệu được throw.
- Nhiều khối `catch` cho nhiều kiểu lỗi khác nhau, và `catch(...)` bắt tất cả các loại còn lại (ellipsis).

**Thực hành (45p):** Viết hàm chia 2 số, `throw` 1 chuỗi hoặc số nguyên báo lỗi khi chia cho 0, bắt bằng `try/catch` ở `main`. Sau đó viết chương trình có nhiều khối `catch` khác kiểu (int, string) + 1 khối `catch(...)` để bắt các trường hợp còn lại.

**Tự làm (15p):** Áp dụng try/catch vào bài `CMangDong` (Buổi 13): `throw` lỗi khi truy cập chỉ số ngoài phạm vi mảng.

**Bài tập về nhà:** 2 bài try/catch cơ bản với các tình huống lỗi tự nghĩ ra.

---

### Buổi 25 — Custom Exception & tổng kết ngoại lệ
**Mục tiêu:** Tự định nghĩa loại ngoại lệ riêng, kế thừa từ `std::exception` — đồng thời đây là ví dụ thực tế kết hợp Kế thừa + Đa hình (Module 10) với Ngoại lệ (Module 11), cho học viên thấy các kiến thức trong khóa liên kết với nhau.

**Lý thuyết (30p):**
- Class `exception` chuẩn của C++ (`#include <exception>`), phương thức ảo `what()` trả về mô tả lỗi.
- Tự định nghĩa exception riêng: `class MyException : public exception { ... }`, override `what()`.
- Bắt bằng `catch(exception &e)` — nhờ đa hình, bắt được cả exception chuẩn lẫn exception tự định nghĩa (vì đều kế thừa từ `exception`) — đây chính là ứng dụng thực tế của `virtual` đã học Buổi 22.

**Thực hành (45p):** Viết class `NgoaiLeChiaCho0 : public exception` với `what()` trả về thông báo tùy chỉnh. Áp dụng vào chương trình máy tính (từ Buổi 9) để xử lý lỗi chia cho 0 một cách chuyên nghiệp.

**Tự làm (15p):** Viết thêm 1 custom exception cho tình huống tự chọn (VD: rút tiền quá số dư trong `CTaiKhoanNganHang`).

**Bài tập về nhà:** Hoàn thiện `CTaiKhoanNganHang` với custom exception khi rút quá số dư, ném và bắt đúng cách.

---

### Buổi 26 — Ôn tập toàn khóa + dự án nhỏ tổng hợp
**Mục tiêu:** Tổng hợp toàn bộ 11 Module thành 1 sản phẩm hoàn chỉnh, đánh giá học viên đã sẵn sàng học tiếp (VD: cấu trúc dữ liệu, hoặc C++ nâng cao/STL) hay chưa.

**Nội dung (90p):**
- Giao 1 đề bài dự án nhỏ bắt buộc dùng tối thiểu: 1 class cha trừu tượng + 2 class con (kế thừa, đa hình), constructor/destructor hợp lý, ít nhất 1 toán tử overload, xử lý ít nhất 1 ngoại lệ, và có thể dùng linked list nếu đề bài phù hợp.
- Ví dụ đề: "Quản lý thư viện" — class trừu tượng `TaiLieu`, con là `Sach`/`TapChi`; danh sách tài liệu bằng linked list; overload `<<` để in tài liệu; ném exception khi mượn sách đã hết.
- Học viên tự thiết kế (không có mẫu sẵn) — Bò chỉ đóng vai trò gợi ý khi bí, không code hộ.
- 15 phút cuối: Bò và học viên cùng nhìn lại lộ trình 27 buổi, chỉ ra học viên mạnh ở đâu, còn yếu ở đâu, gợi ý hướng học tiếp theo.

---

## 6. GHI CHÚ CUỐI

- **Về tốc độ:** Lịch trên là lịch **tối thiểu** cho slow learner, không phải cố định cứng. Nếu ở bất kỳ buổi Checkpoint nào (4, 9, 16, 23) học viên chưa đạt tiêu chí, hãy chèn thêm 1 buổi ôn tập trước khi đi tiếp — đừng cố chạy đúng số buổi bằng mọi giá.
- **Về việc thiếu Module 5 gốc:** Buổi 10-11 tui tự soạn để lấp khoảng trống này, nội dung chuẩn OOP nhập môn, khớp mạch dẫn vào Module 6 (Constructor/Destructor) của trường — không lệch hướng nếu sau này Bò muốn đối chiếu lại với đề thi/bài tập chính thức của trường.
- **Về tài liệu tham khảo song song:** Toàn bộ 27 buổi bám sát nội dung 10 file slide PRG1006 hiện có trong project (Module 1,2,3,4,6,7,8,9,10,11). Khi dạy, Bò có thể mở song song slide gốc để lấy thêm ví dụ/hình minh họa có sẵn, đối chiếu với bài tập/đề thi thật của trường nếu học viên cần thi.
