# GIÁO ÁN DẠY LẬP TRÌNH C – 10 BUỔI (DÙNG DEV-C++)

**Đối tượng:** Học sinh/sinh viên chưa biết gì về lập trình, tiếp thu chậm
**Phần mềm sử dụng:** Embarcadero Dev-C++ 6.3 (kèm sẵn trình biên dịch TDM-GCC 9.2)
**Thời lượng:** 10 buổi × 90 phút
**Mục tiêu cuối khóa:** Học viên nắm vững nền tảng C (biến, điều kiện, vòng lặp, mảng, chuỗi, hàm) đủ để tự học tiếp các chủ đề nâng cao (con trỏ, struct, file…).

---

## MỤC TIÊU CÁC BUỔI HỌC

| Buổi | Chủ đề | Mục tiêu sau buổi học |
|------|--------|------------------------|
| **1** | Làm quen & cài đặt Dev-C++ | Cài và dùng được Dev-C++; tạo, lưu (.c), biên dịch và chạy được chương trình đầu tiên bằng F11. |
| **2** | Biến và kiểu dữ liệu | Hiểu biến là gì; khai báo và in được biến kiểu `int`, `float`, `char`. |
| **3** | Nhập dữ liệu & toán tử | Dùng được `scanf` để nhập từ bàn phím; viết được biểu thức tính toán đúng. |
| **4** | Câu lệnh điều kiện `if – else` | Viết được chương trình "ra quyết định" theo điều kiện; phân biệt `=` và `==`. |
| **5** | Vòng lặp `for`, `while` | Hiểu và viết được vòng lặp để xử lý công việc lặp lại; tránh lặp vô hạn. |
| **6** | Ôn tập tổng hợp (buổi 1–5) | Củng cố toàn bộ kiến thức nửa đầu; làm được bài tập tổng hợp có menu, vòng lặp lồng. |
| **7** | Mảng một chiều | Hiểu mảng; khai báo, nhập/xuất và xử lý được mảng (tổng, max, đếm). |
| **8** | Chuỗi ký tự | Hiểu chuỗi là mảng ký tự; nhập/xuất và dùng được vài hàm chuỗi cơ bản. |
| **9** | Hàm (function) | Viết được hàm có tham số và giá trị trả về; biết chia nhỏ chương trình. |
| **10** | Ôn tổng kết & định hướng | Hoàn thành 1 chương trình lớn ("Quản lý điểm sinh viên"); biết lộ trình học tiếp. |

---

## NGUYÊN TẮC SƯ PHẠM XUYÊN SUỐT

Vì học viên tiếp thu chậm, giáo viên cần tuân thủ:

1. **Lặp lại nhiều lần** – mỗi khái niệm mới giải thích tối thiểu 2–3 cách khác nhau (lời nói, hình vẽ, code chạy thử).
2. **Code tay trước khi gõ máy** – yêu cầu học viên viết code ra giấy trước, sau đó mới gõ vào Dev-C++. Giúp não ghi nhớ cú pháp.
3. **In giá trị để theo dõi** – thêm `printf` in giá trị biến qua từng bước, học viên thấy chương trình "sống" thật sự. (Dev-C++ có debugger nhưng hơi khó dùng với người mới, nên ưu tiên cách in `printf`.)
4. **Bài tập từ dễ đến khó** – mỗi buổi có ít nhất 1 bài "y hệt ví dụ", rồi mới đến bài biến tấu.
5. **Không bỏ qua lỗi** – mỗi lần biên dịch lỗi, dừng lại đọc kỹ thông báo lỗi ở khung "Compile Log" phía dưới, dạy học viên cách tự sửa.
6. **Đầu mỗi buổi ôn 10 phút** – hỏi lại bài cũ bằng câu hỏi miệng, không để học viên "trôi" mất kiến thức.

**Cấu trúc chung mỗi buổi (90 phút):**
- 0–10 phút: Ôn bài buổi trước, chữa bài tập về nhà
- 10–25 phút: Giới thiệu khái niệm mới (lý thuyết + ví dụ minh họa)
- 25–55 phút: Học viên thực hành cùng giáo viên (code theo từng bước)
- 55–80 phút: Học viên làm bài tập tại lớp, giáo viên hỗ trợ
- 80–90 phút: Tổng kết, giao bài tập về nhà

---

## CÁC PHÍM TẮT DEV-C++ CẦN NHỚ (dạy ngay từ buổi 1)

| Phím | Chức năng |
|------|-----------|
| **Ctrl + N** | Tạo file mới |
| **Ctrl + S** | Lưu file (nhớ lưu đuôi **.c**) |
| **F9** | Chỉ biên dịch (Compile) |
| **F10** | Chỉ chạy (Run) |
| **F11** | **Biên dịch và chạy** (dùng nhiều nhất) |
| **Ctrl + Shift + S** | Lưu với tên khác |

---

## BUỔI 1 – LÀM QUEN LẬP TRÌNH & CÀI ĐẶT DEV-C++

**Mục tiêu:** Hiểu lập trình là gì, cài và làm quen Dev-C++, viết – lưu – biên dịch – chạy được chương trình đầu tiên.

### Nội dung chi tiết

**Phần 1 (15 phút) – Lập trình là gì?**
- Giải thích bằng ví dụ đời sống: "Lập trình giống như viết công thức nấu ăn cho máy tính làm theo."
- Giới thiệu C: ngôn ngữ lâu đời, nền tảng cho C++, Java, Python… Học C giúp hiểu máy tính hoạt động ra sao.
- Phân biệt: **mã nguồn** (code do người viết) → **trình biên dịch** (compiler) → **chương trình chạy được**.

**Phần 2 (20 phút) – Cài đặt và làm quen Dev-C++**
- Chạy file cài đặt `Embarcadero_Dev-Cpp_6.3_TDM-GCC_9.2_Setup.exe`. Bấm Next liên tục, chọn ngôn ngữ, hoàn tất. Không cần cài thêm trình biên dịch nào khác vì đã có sẵn TDM-GCC.
- Mở Dev-C++, giới thiệu giao diện:
  - Vùng soạn code ở giữa.
  - Khung **Compile Log / Compiler** phía dưới: nơi báo lỗi và thông báo biên dịch.
  - Thanh công cụ phía trên: nút Compile, Run, Compile & Run.

**Phần 3 (15 phút) – Tạo và lưu file đúng cách**
- Vào **File → New → Source File** (hoặc **Ctrl + N**).
- **Bước quan trọng:** Bấm **Ctrl + S** lưu ngay, đặt tên `bai1.c` — **nhớ gõ đuôi `.c`** (không phải `.cpp`). Đuôi `.c` báo cho phần mềm biết đây là chương trình C.
- Nhấn mạnh: tạo thư mục riêng để lưu bài, ví dụ `D:\HocC\`, để khỏi thất lạc.

**Phần 4 (25 phút) – Chương trình Hello World**
```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
- Giải thích **từng dòng một**, không bỏ qua dòng nào:
  - `#include <stdio.h>`: khai báo dùng thư viện nhập xuất chuẩn.
  - `int main()`: nơi chương trình bắt đầu chạy.
  - `{ }`: dấu ngoặc nhọn bao thân hàm.
  - `printf(...)`: lệnh in chữ ra màn hình.
  - `\n`: ký tự xuống dòng.
  - `return 0;`: báo chương trình kết thúc thành công.
  - **Dấu chấm phẩy `;`** – nhấn mạnh: cuối mỗi câu lệnh phải có.
- **Chạy chương trình:** bấm **F11** (Biên dịch và chạy). Một cửa sổ đen (console) hiện ra với dòng chữ "Hello, World!".
- Giải thích dòng cuối console: "Process exited... Press any key to continue" nghĩa là chương trình đã chạy xong, bấm phím bất kỳ để đóng.

**Phần 5 (15 phút) – Thực hành & xử lý lỗi**
- Học viên tự gõ lại chương trình (KHÔNG copy-paste).
- Cố tình bỏ dấu `;`, bỏ `#include` → bấm F11 → quan sát khung Compile Log báo lỗi đỏ. Dạy cách đọc dòng báo lỗi (số dòng + nội dung) để sửa.
- Đổi câu chữ in ra: in tên mình, in 3 dòng khác nhau.

### Bài tập về nhà
1. Viết chương trình in ra 5 dòng: họ tên, năm sinh, lớp, sở thích, ước mơ.
2. Viết chương trình in ra hình một ngôi sao bằng ký tự `*` (5 dòng).
3. Tự mở lại Dev-C++, tạo file `baitap.c`, lưu đúng và chạy thử để quen thao tác.

---

## BUỔI 2 – BIẾN VÀ KIỂU DỮ LIỆU

**Mục tiêu:** Hiểu biến là gì, khai báo và sử dụng được biến với các kiểu cơ bản: `int`, `float`, `char`.

### Nội dung chi tiết

**Phần 1 (10 phút) – Ôn bài, chữa bài tập về nhà**

**Phần 2 (20 phút) – Biến là gì?**
- Ví dụ: biến giống như "cái hộp có dán nhãn" để chứa giá trị.
- Mỗi biến có **tên**, **kiểu dữ liệu**, **giá trị**.
- Các kiểu cơ bản:
  - `int`: số nguyên (1, 2, -5, 100)
  - `float`: số thực (3.14, -0.5)
  - `char`: 1 ký tự ('A', 'b', '5')
- Quy tắc đặt tên biến: bắt đầu bằng chữ cái hoặc dấu `_`, không có khoảng trắng, không trùng từ khóa.

**Phần 3 (25 phút) – Khai báo và gán giá trị**
```c
#include <stdio.h>

int main() {
    int tuoi = 18;
    float chieuCao = 1.65;
    char gioiTinh = 'N';
    
    printf("Tuoi: %d\n", tuoi);
    printf("Chieu cao: %.2f\n", chieuCao);
    printf("Gioi tinh: %c\n", gioiTinh);
    
    return 0;
}
```
- Giới thiệu **định dạng in**: `%d` cho int, `%f` cho float, `%c` cho char.
- `%.2f` nghĩa là in 2 chữ số sau dấu phẩy.
- **Cảnh báo lỗi thường gặp:** dùng nhầm `%d` cho `float` sẽ ra số sai → bấm F11 cho học viên thử xem.

**Phần 4 (25 phút) – Thực hành**
- Tự khai báo 5 biến với 3 kiểu khác nhau, in ra màn hình.
- Đổi giá trị biến giữa chừng: gán lại biến rồi in lần 2.

**Phần 5 (10 phút) – Tổng kết**

### Bài tập về nhà
1. Khai báo 3 biến lưu: điểm Toán, điểm Văn, điểm Anh. In ra cả 3.
2. Khai báo biến lưu giá tiền 1 ly trà sữa (45000), in ra "Gia 1 ly tra sua la 45000 VND".

---

## BUỔI 3 – NHẬP DỮ LIỆU VÀ TOÁN TỬ

**Mục tiêu:** Biết dùng `scanf` để nhập từ bàn phím, biết các toán tử số học và viết được biểu thức tính toán.

### Nội dung chi tiết

**Phần 1 (10 phút) – Ôn, chữa bài**

**Phần 2 (20 phút) – Nhập dữ liệu với `scanf`**
```c
int tuoi;
printf("Nhap tuoi cua ban: ");
scanf("%d", &tuoi);
printf("Tuoi cua ban la: %d\n", tuoi);
```
- Nhấn mạnh dấu `&` trước tên biến trong `scanf` – đây là lỗi rất hay quên. Tạm giải thích: "dấu & nghĩa là địa chỉ của biến, sẽ học kỹ sau."
- Định dạng nhập giống định dạng in: `%d`, `%f`, `%c`.
- Khi bấm F11 và cửa sổ console hiện ra, học viên gõ số rồi bấm Enter để nhập.

**Phần 3 (20 phút) – Các toán tử số học**
- `+` cộng, `-` trừ, `*` nhân, `/` chia, `%` chia lấy dư (chỉ dùng cho int).
- **Lưu ý quan trọng:** `5 / 2` ra `2` (không phải 2.5) vì cả hai là số nguyên. Muốn ra 2.5 phải có ít nhất 1 số là float: `5.0 / 2`.
- Thứ tự ưu tiên: `*`, `/`, `%` trước; `+`, `-` sau. Dùng dấu ngoặc `( )` để ép thứ tự.

**Phần 4 (30 phút) – Thực hành: Chương trình tính toán**
```c
#include <stdio.h>

int main() {
    float a, b;
    printf("Nhap so a: ");
    scanf("%f", &a);
    printf("Nhap so b: ");
    scanf("%f", &b);
    
    printf("Tong: %.2f\n", a + b);
    printf("Hieu: %.2f\n", a - b);
    printf("Tich: %.2f\n", a * b);
    printf("Thuong: %.2f\n", a / b);
    
    return 0;
}
```
- Cho học viên gõ, bấm F11, thử nhập nhiều cặp số.
- Mở rộng: tính diện tích, chu vi hình chữ nhật khi nhập 2 cạnh.

**Phần 5 (10 phút) – Tổng kết**

### Bài tập về nhà
1. Nhập điểm Toán, Văn, Anh. Tính và in ra điểm trung bình.
2. Nhập bán kính hình tròn, tính chu vi (`2 * 3.14 * r`) và diện tích (`3.14 * r * r`).
3. Nhập 1 số tiền (đơn vị đồng), in ra giá trị tương ứng theo USD (giả sử 1 USD = 25000 đồng).

---

## BUỔI 4 – CÂU LỆNH ĐIỀU KIỆN `if – else`

**Mục tiêu:** Viết được chương trình có "ra quyết định" dựa vào điều kiện.

### Nội dung chi tiết

**Phần 1 (10 phút) – Ôn, chữa bài**

**Phần 2 (15 phút) – Toán tử so sánh và logic**
- So sánh: `==` (bằng), `!=` (khác), `>`, `<`, `>=`, `<=`.
- **Lỗi cực kỳ hay gặp:** dùng `=` (gán) thay vì `==` (so sánh). Phải nhắc đi nhắc lại.
- Logic: `&&` (và), `||` (hoặc), `!` (phủ định).

**Phần 3 (20 phút) – Cấu trúc `if – else`**
```c
if (dieu_kien) {
    // chạy nếu đúng
} else {
    // chạy nếu sai
}
```
Ví dụ minh họa:
```c
int n;
printf("Nhap so nguyen: ");
scanf("%d", &n);

if (n > 0) {
    printf("So duong\n");
} else if (n < 0) {
    printf("So am\n");
} else {
    printf("So 0\n");
}
```
- Vẽ sơ đồ cây quyết định trên giấy để học viên hình dung.

**Phần 4 (35 phút) – Thực hành**
- Bài 1: Nhập 1 số, kiểm tra chẵn/lẻ (dùng `n % 2 == 0`).
- Bài 2: Nhập điểm trung bình, xếp loại:
  - ≥ 8.0: Giỏi
  - ≥ 6.5: Khá
  - ≥ 5.0: Trung bình
  - < 5.0: Yếu
- Bài 3: Nhập 2 số, in ra số lớn hơn.

**Phần 5 (10 phút) – Tổng kết**

### Bài tập về nhà
1. Nhập 3 số, in ra số lớn nhất.
2. Nhập năm, kiểm tra có phải năm nhuận không (chia hết cho 4 và (không chia hết cho 100 hoặc chia hết cho 400)).
3. Nhập tuổi, in ra: < 6 = "Mam non", 6–11 = "Tieu hoc", 12–15 = "THCS", 16–18 = "THPT", > 18 = "Sinh vien hoac di lam".

---

## BUỔI 5 – VÒNG LẶP `for` VÀ `while`

**Mục tiêu:** Hiểu và viết được vòng lặp để làm việc lặp đi lặp lại.

### Nội dung chi tiết

**Phần 1 (10 phút) – Ôn, chữa bài**

**Phần 2 (20 phút) – Vòng lặp `for`**
```c
for (khoi_tao; dieu_kien; buoc_lap) {
    // câu lệnh
}
```
Ví dụ in từ 1 đến 10:
```c
for (int i = 1; i <= 10; i++) {
    printf("%d\n", i);
}
```
- Giải thích **từng bước thực thi**: vẽ bảng `i` thay đổi qua từng vòng lặp lên bảng.
- `i++` nghĩa là `i = i + 1`. Tương tự `i--` là `i = i - 1`.

**Phần 3 (15 phút) – Vòng lặp `while`**
```c
int i = 1;
while (i <= 10) {
    printf("%d\n", i);
    i++;
}
```
- Khác `for` ở chỗ: khởi tạo nằm ngoài, bước lặp viết bên trong.
- **Cảnh báo:** quên `i++` → vòng lặp vô hạn (console in mãi không dừng). Cho học viên thử, sau đó hướng dẫn đóng cửa sổ console để dừng.

**Phần 4 (35 phút) – Thực hành**
- Bài 1: In các số từ 1 đến N (nhập N từ bàn phím).
- Bài 2: Tính tổng từ 1 đến N.
- Bài 3: Tính N giai thừa (1 × 2 × 3 × … × N).
- Bài 4: In bảng cửu chương của số N.

**Phần 5 (10 phút) – Tổng kết**

### Bài tập về nhà
1. Nhập N, in ra tất cả số chẵn từ 1 đến N.
2. Nhập N, đếm xem từ 1 đến N có bao nhiêu số chia hết cho 3.
3. Nhập N, kiểm tra N có phải số nguyên tố không.

---

## BUỔI 6 – ÔN TẬP TỔNG HỢP (BUỔI 1–5)

**Mục tiêu:** Củng cố kiến thức 5 buổi đầu, làm bài tập tổng hợp.

### Nội dung chi tiết

**Phần 1 (15 phút) – Ôn nhanh toàn bộ kiến thức**
- Đặt câu hỏi miệng cho học viên trả lời:
  - Cú pháp khai báo biến?
  - Sự khác nhau giữa `=` và `==`?
  - Khi nào dùng `for`, khi nào dùng `while`?
  - Lỗi hay gặp là gì?
- Học viên tự ghi tóm tắt vào sổ.

**Phần 2 (60 phút) – Làm bài tập tổng hợp**

**Bài 1:** Nhập 2 số `a`, `b`. In ra menu:
```
1. Cong
2. Tru
3. Nhan
4. Chia
```
Nhập lựa chọn 1–4, in ra kết quả tương ứng. Riêng phép chia: nếu `b = 0` thì báo "Khong chia duoc".

**Bài 2:** Nhập 1 số nguyên dương N, in ra hình tam giác sao:
```
*
**
***
****
*****
```
(Dùng vòng lặp lồng nhau: vòng ngoài cho dòng, vòng trong cho số sao.)

**Bài 3:** Nhập N, tính tổng các số chia hết cho 3 hoặc 5 từ 1 đến N.

**Phần 3 (15 phút) – Chữa kỹ từng bài**
- Tập trung chữa lỗi và giải thích lại logic, không chỉ đưa đáp án.

### Bài tập về nhà
1. Nhập N, in các số nguyên tố từ 1 đến N.
2. Vẽ hình tam giác sao "ngược":
```
*****
****
***
**
*
```

---

## BUỔI 7 – MẢNG MỘT CHIỀU

**Mục tiêu:** Hiểu mảng là gì, khai báo, nhập/xuất và xử lý mảng cơ bản.

### Nội dung chi tiết

**Phần 1 (10 phút) – Ôn, chữa bài**

**Phần 2 (20 phút) – Mảng là gì?**
- So sánh: biến đơn = 1 cái hộp; mảng = 1 dãy hộp xếp liền nhau, đánh số từ 0.
- Khai báo: `int a[5];` – tạo 5 ô, đánh số `a[0], a[1], a[2], a[3], a[4]`.
- **Nhấn mạnh:** chỉ số mảng bắt đầu từ **0**, không phải 1. Mảng `a[5]` thì ô cuối là `a[4]`.

**Phần 3 (25 phút) – Nhập và xuất mảng**
```c
#include <stdio.h>

int main() {
    int n, a[100];
    printf("Nhap so phan tu: ");
    scanf("%d", &n);
    
    // Nhập mảng
    for (int i = 0; i < n; i++) {
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }
    
    // Xuất mảng
    printf("Mang vua nhap: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
    
    return 0;
}
```
- Cho học viên gõ, bấm F11, thử nhập 5–6 số.

**Phần 4 (25 phút) – Thực hành**
- Tính tổng các phần tử của mảng.
- Tìm phần tử lớn nhất trong mảng.
- Đếm số phần tử chẵn.

**Phần 5 (10 phút) – Tổng kết**

### Bài tập về nhà
1. Nhập mảng N số. Tính trung bình cộng các phần tử.
2. Nhập mảng N số. Đếm số lần xuất hiện của số X (X cũng nhập từ bàn phím).
3. Nhập mảng N số. In ra các số dương trong mảng.

---

## BUỔI 8 – CHUỖI KÝ TỰ (STRING)

**Mục tiêu:** Hiểu chuỗi là mảng ký tự, biết nhập/xuất và xử lý chuỗi cơ bản.

### Nội dung chi tiết

**Phần 1 (10 phút) – Ôn, chữa bài**

**Phần 2 (20 phút) – Chuỗi là gì?**
- Chuỗi = mảng các ký tự, kết thúc bằng ký tự đặc biệt `'\0'` (null).
- Khai báo: `char s[100];` – chuỗi tối đa 99 ký tự + 1 ký tự kết thúc.

**Phần 3 (20 phút) – Nhập/xuất chuỗi**
```c
char hoTen[100];
printf("Nhap ho ten: ");
fgets(hoTen, 100, stdin);   // Dùng fgets để đọc cả khoảng trắng
printf("Xin chao %s", hoTen);
```
- So sánh với `scanf("%s", hoTen)`: chỉ đọc đến khi gặp khoảng trắng → không đọc được "Nguyen Van A". Vì vậy nên dùng `fgets`.
- Thư viện cần thêm: `#include <string.h>` cho các hàm xử lý chuỗi.

**Phần 4 (30 phút) – Một số hàm chuỗi cơ bản**
- `strlen(s)`: trả về độ dài chuỗi.
- `strcpy(dest, src)`: sao chép chuỗi.
- `strcmp(s1, s2)`: so sánh 2 chuỗi, trả 0 nếu bằng nhau.
- `strcat(s1, s2)`: nối s2 vào sau s1.

Ví dụ:
```c
char a[100] = "Hello, ";
char b[100] = "World!";
strcat(a, b);
printf("%s\n", a);        // Hello, World!
printf("Do dai: %d\n", strlen(a));
```

**Thực hành:**
- Nhập 1 chuỗi, đếm số ký tự.
- Nhập 1 chuỗi, đếm số chữ cái viết hoa.
- Nhập 2 chuỗi, kiểm tra có giống nhau không.

**Phần 5 (10 phút) – Tổng kết**

### Bài tập về nhà
1. Nhập 1 chuỗi, đếm số khoảng trắng.
2. Nhập 1 chuỗi, in ngược chuỗi đó (ví dụ "abc" → "cba").
3. Nhập 1 chuỗi, đếm xem có bao nhiêu chữ 'a'.

---

## BUỔI 9 – HÀM (FUNCTION)

**Mục tiêu:** Biết cách viết hàm để chia nhỏ chương trình, hiểu tham số và giá trị trả về.

### Nội dung chi tiết

**Phần 1 (10 phút) – Ôn, chữa bài**

**Phần 2 (25 phút) – Hàm là gì?**
- Ví dụ đời sống: "Cái máy xay sinh tố" – bỏ trái cây + đường vào (tham số), nó cho ra ly sinh tố (giá trị trả về).
- Cú pháp:
```c
kieu_tra_ve ten_ham(tham_so) {
    // thân hàm
    return gia_tri;
}
```
- Ví dụ: hàm cộng hai số.
```c
#include <stdio.h>

int cong(int a, int b) {
    return a + b;
}

int main() {
    int x = cong(3, 5);
    printf("%d\n", x);     // In ra 8
    return 0;
}
```
- Giải thích kiểu trả về `void` (không trả gì) cho hàm chỉ in ra màn hình.
- **Lưu ý:** trong Dev-C++, viết hàm phụ **phía trên** hàm `main` để tránh báo lỗi (chưa cần học khai báo nguyên mẫu hàm).

**Phần 3 (25 phút) – Viết các hàm thường dùng**
```c
// Hàm tính giai thừa
int giaiThua(int n) {
    int kq = 1;
    for (int i = 1; i <= n; i++) {
        kq = kq * i;
    }
    return kq;
}

// Hàm kiểm tra số nguyên tố
int laNguyenTo(int n) {
    if (n < 2) return 0;
    for (int i = 2; i < n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}
```

**Phần 4 (20 phút) – Thực hành**
- Viết hàm tính tổng 2 số.
- Viết hàm tìm max của 2 số.
- Viết hàm kiểm tra số chẵn (trả về 1 nếu chẵn, 0 nếu lẻ).
- Gọi các hàm này từ `main()`.

**Phần 5 (10 phút) – Tổng kết**

### Bài tập về nhà
1. Viết hàm `tongTu1DenN(int n)` trả về tổng từ 1 đến n.
2. Viết hàm `chuViHinhTron(float r)` trả về chu vi hình tròn.
3. Viết hàm `inTamGiacSao(int n)` in ra tam giác sao n dòng (kiểu `void`).

---

## BUỔI 10 – ÔN TẬP TỔNG KẾT VÀ ĐỊNH HƯỚNG TIẾP THEO

**Mục tiêu:** Tổng hợp toàn bộ kiến thức, làm 1 chương trình hoàn chỉnh, định hướng học tiếp.

### Nội dung chi tiết

**Phần 1 (15 phút) – Ôn nhanh toàn bộ**
- Kiểm tra miệng: biến, điều kiện, vòng lặp, mảng, chuỗi, hàm.
- Học viên tự liệt kê những lỗi hay mắc phải.

**Phần 2 (60 phút) – Bài tập tổng hợp lớn: "Quản lý điểm sinh viên"**

Yêu cầu: viết chương trình có menu sau:
```
1. Nhap danh sach diem (toi da 30 sinh vien)
2. In danh sach diem
3. Tinh diem trung binh ca lop
4. Tim diem cao nhat
5. Dem so sinh vien dat (diem >= 5)
6. Thoat
```

Gợi ý chia thành các hàm:
- `void nhapDiem(float a[], int *n)` – nhập mảng điểm.
- `void inDiem(float a[], int n)` – in mảng.
- `float trungBinh(float a[], int n)` – tính TB.
- `float timMax(float a[], int n)` – tìm max.
- `int demDat(float a[], int n)` – đếm số sinh viên đạt.

Học viên làm dần, giáo viên hỗ trợ từng phần. (Dùng vòng lặp `while` để hiện lại menu sau mỗi lựa chọn cho tới khi chọn Thoát.)

**Phần 3 (15 phút) – Định hướng học tiếp**

Giới thiệu các chủ đề cần học để trở thành lập trình viên C thực thụ:
1. **Con trỏ (pointer)** – nền tảng cốt lõi của C, dùng `*` và `&`.
2. **Mảng 2 chiều và ma trận** – xử lý dữ liệu dạng bảng.
3. **Cấu trúc (struct)** – tự định nghĩa kiểu dữ liệu mới.
4. **Cấp phát động (malloc/free)** – quản lý bộ nhớ.
5. **Đọc/ghi file** – làm việc với file `.txt`, `.bin`.
6. **Đệ quy (recursion)** – hàm tự gọi chính nó.
7. **Cấu trúc dữ liệu** – danh sách liên kết, ngăn xếp, hàng đợi.
8. **Giải thuật** – sắp xếp, tìm kiếm.

Gợi ý tài liệu/khóa học tiếp theo:
- Sách "The C Programming Language" của Kernighan & Ritchie (kinh điển).
- Website học C: learn-c.org, w3schools.com/c.
- Luyện bài tập: codeforces.com (mục A), hackerrank.com.
- Sau khi vững C, có thể chuyển qua C++ hoặc các ngôn ngữ khác dễ dàng. (Dev-C++ cũng biên dịch được C++ nếu sau này muốn học tiếp — chỉ cần lưu file đuôi `.cpp`.)

### Bài tập kết thúc khóa
Hoàn thiện chương trình "Quản lý điểm sinh viên" ở Phần 2, thêm chức năng:
- Sắp xếp danh sách điểm từ cao đến thấp.
- Tìm sinh viên có điểm thấp nhất.

---

## PHỤ LỤC – LƯU Ý KHI DẠY HỌC VIÊN TIẾP THU CHẬM

1. **Đừng vội đi tiếp khi học viên chưa hiểu.** Nếu cần, dành cả buổi chỉ để dạy 1 khái niệm.
2. **Đừng đưa đáp án ngay.** Hỏi ngược: "Theo em vì sao chương trình báo lỗi?" để học viên tự suy nghĩ.
3. **Khuyến khích vẽ ra giấy.** Vẽ sơ đồ luồng, vẽ ô biến, vẽ mảng – giúp tư duy trực quan.
4. **Khen ngợi khi tiến bộ nhỏ.** Học viên chậm thường tự ti, lời khen kịp lúc rất quan trọng.
5. **Giữ liên tục.** Không để khoảng cách giữa các buổi quá xa (lý tưởng 2–3 ngày/buổi).
6. **Ghi sổ tay.** Yêu cầu học viên có 1 cuốn sổ ghi cú pháp, lỗi đã gặp và cách sửa – ôn lại trước mỗi buổi.

### Một số lỗi đặc thù khi mới dùng Dev-C++
- **Lưu nhầm đuôi file:** lưu thành `.txt` hoặc quên đuôi → không biên dịch được. Luôn kiểm tra tên file kết thúc bằng `.c`.
- **Quên lưu trước khi chạy:** sửa code xong quên Ctrl+S rồi bấm F11 → chạy lại bản cũ. Nhắc học viên lưu trước mỗi lần chạy (Dev-C++ thường tự lưu nhưng nên tạo thói quen).
- **Cửa sổ console đóng quá nhanh:** với bản Embarcadero Dev-C++ thường console tự giữ lại ("Press any key to continue"). Nếu máy nào đóng ngay, thêm dòng `system("pause");` trước `return 0;` (cần `#include <stdlib.h>`).
- **Không đọc khung Compile Log:** học viên hay hoảng khi thấy lỗi mà không đọc. Tập thói quen luôn nhìn xuống khung dưới để biết lỗi ở dòng nào.

---

**Chúc giáo viên và học viên có khóa học hiệu quả!**
