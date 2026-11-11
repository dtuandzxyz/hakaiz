# 🔐 Locket Gold & Filter VIP (Chạy bằng Config) - DinhTuan

Bộ cấu hình tối ưu trải nghiệm **Locket Widget**, mở khoá tính năng **Locket Gold**, mở khoá **AI Filters / Photobooth 4 ảnh**, gỡ quảng cáo, cho phép video dài (30s - 45s), gỡ mờ ảnh (Unblur) và chống triệt để lỗi `304 Not Modified` / `Không thể áp dụng bộ lọc`.

> 👑 **Bản quyền**: 100% thuộc về **DinhTuan**  
> 🔄 **Cập nhật**: Đã chuyển đổi toàn diện từ **Modules** sang **Config (`.conf`)** chuẩn hoá, ổn định tuyệt đối và dễ tuỳ biến!  
> 📱 **Hỗ trợ nền tảng**: Shadowrocket, Quantumult X, Surge, Loon

---

## 🚀 TẠI SAO NÊN CHẠY BẰNG CONFIG THAY VÌ MODULES?

| Tiêu chí | Chạy bằng Modules (`.module`) | Chạy bằng Config (`.conf`) ⭐ |
| :--- | :--- | :--- |
| **Độ ổn định** | Dễ bị Shadowrocket bỏ qua hoặc tắt ngầm khi chuyển mạng | **Hoạt động liên tục 100%**, là cấu hình trực tiếp (Active Config) |
| **Kiểm soát & Sửa lỗi** | Bị ẩn trong module, khó theo dõi lỗi xung đột | **Xem và chỉnh sửa trực tiếp** từng Rule, Script, Header Rewrite |
| **Khả năng ghép nối** | Dễ đè lẫn nhau nếu dùng nhiều module | **Tích hợp mượt mà** vào file config có sẵn mà không mất VPN riêng |
| **Hỗ trợ Offline** | Khó quản lý đường dẫn tương đối | **Hỗ trợ tuyệt hảo** đọc script trực tiếp từ máy không cần mạng |

---

## 📁 Cấu trúc thư mục mới

```
locket/
├── Config/                                    # ⭐ THƯ MỤC CẤU HÌNH CONFIG (Thay thế Modules)
│   ├── LocketGold_Offline.conf                # Bản CỤC BỘ Offline 100% (Khuyên dùng - Không cần mạng tải script)
│   ├── LocketGold_Online.conf                 # Bản Trực tuyến Online (Tải script qua GitHub, nạp vào là chạy ngay)
│   ├── LocketGold_Core.conf                   # Bản Tinh gọn Offline (Chỉ mở Gold + Video 45s, siêu nhẹ & mượt)
│   ├── LocketGold_Core_Online.conf            # Bản Tinh gọn Online
│   ├── LocketGold_Snippet.conf                # Đoạn mã Snippet để ghép vào file cấu hình có sẵn (default.conf)
│   ├── QuantumultX_Locket.conf                # Cấu hình rewrite & mitm cho Quantumult X
│   ├── Surge_Locket.conf                      # Cấu hình cho Surge iOS / Mac
│   ├── Loon_Locket.plugin                     # Plugin cho Loon iOS
│   ├── LocketGoldDNS-DinhTuan.mobileconfig    # Profile DNS DoT/TLS NextDNS bảo mật (DinhTuan)
│   └── README.md                              # Hướng dẫn chi tiết thư mục Config
├── js/                                        # Toàn bộ mã nguồn script xử lý logic cục bộ
│   ├── deleteHeader.js                        # Xóa sạch header cache ETag / If-None-Match (chống 304)
│   ├── revenuecat.js                          # Mở khoá gói Locket Gold qua RevenueCat vĩnh viễn đến 2099
│   ├── forceGold4.3.js                        # Ép cờ Locket Gold, video 45s, sticker, tắt paywall Firebase
│   ├── locket_change_profile.js               # Giả lập changeProfileInfo, gỡ mờ ảnh, cấp Gold cộng đồng
│   ├── locket_pb_req.js                       # Xử lý Photobooth 4 ảnh & AI Filter mượt mà không lỗi 422
│   └── locketfix.js                           # Thư viện remote config mở rộng (Gold + Full Stickers)
├── Modules_Legacy/                            # Thư mục lưu trữ các file Module cũ (dành cho ai cần đối chiếu)
└── README.md                                  # Tài liệu hướng dẫn này
```

---

## ⚠️ 3 NGUYÊN NHÂN KHIẾN LOCKET KHÔNG LÊN GOLD (VÀ CÁCH KHẮC PHỤC 100%)

Nếu bạn đã bật VPN nhưng Locket vẫn không nhận Gold:

1. **CHƯA BẬT TIN CẬY CHỨNG CHỈ TRONG CÀI ĐẶT IPHONE (Nguyên nhân 99%)**:
   - Khi bạn tạo chứng chỉ CA trong Shadowrocket và cài vào máy, iOS **mặc định KHÔNG kích hoạt giải mã HTTPS**.
   - Nếu chưa kích hoạt, Shadowrocket không thể đọc được gói tin HTTPS của Locket (`api.revenuecat.com`), dẫn đến script không thể chạy!
   - 👉 **Cách sửa**: Mở **Cài đặt iPhone** -> **Cài đặt chung (General)** -> **Giới thiệu (About)** -> Kéo xuống dưới cùng chọn **Cài đặt tin cậy chứng chỉ (Certificate Trust Settings)** -> **Gạt BẬT XANH cho chứng chỉ của Shadowrocket**!

2. **Chưa xóa cache đa nhiệm Locket**:
   - Locket lưu cache trạng thái gói cũ trong bộ nhớ RAM của ứng dụng.
   - 👉 **Cách sửa**: Sau khi bật VPN Shadowrocket, **vuốt tắt Locket khỏi màn hình đa nhiệm** rồi mở lại.

3. **Chưa bật HTTPS Decryption (Giải mã HTTPS) trong Shadowrocket**:
   - Mở mục **Cấu hình (Config)** -> Nhấn vào chữ **(i)** cạnh file `.conf` đang dùng -> Chọn **HTTPS Decryption** -> Gạt **BẬT (Enabled)**.

---

## 🛠️ HƯỚNG DẪN CÀI ĐẶT CHI TIẾT (SHADOWROCKET)

### LỰA CHỌN 1: Chạy bản OFFLINE CỤC BỘ (⭐ Khuyên dùng - 100% Không lo chết link)

#### Bước 1: Chép các file Script vào iPhone
1. Gửi thư mục `js/` hoặc các file trong đó (`deleteHeader.js`, `revenuecat.js`, `forceGold4.3.js`, `locket_change_profile.js`, `locket_pb_req.js`) sang iPhone (qua AirDrop, iCloud Drive, Tệp, v.v.).
2. Mở ứng dụng **Tệp (Files)** trên iPhone -> Chọn **Trên iPhone (On My iPhone)** -> Mở thư mục **Shadowrocket**.
3. Dán các file `.js` này trực tiếp vào thư mục **Shadowrocket**.

#### Bước 2: Nhập File Cấu hình vào Shadowrocket
1. Chia sẻ file [`Config/LocketGold_Offline.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Offline.conf) vào ứng dụng **Shadowrocket**.
2. Trong Shadowrocket, vào tab **Cấu hình (Config)**:
   - Bạn sẽ thấy file `LocketGold_Offline.conf`.
   - **Chạm vào tên file** để chọn nó làm cấu hình kích hoạt (hiển thị dấu tích màu vàng).

#### Bước 3: Cài đặt & Bật Tin cậy Chứng chỉ (Bắt buộc)
1. Trong Shadowrocket: Vào tab **Cài đặt (Settings)** -> **Chứng chỉ (Certificate)** -> **Tạo chứng chỉ mới (Generate New CA)** -> Nhấn **Cài đặt chứng chỉ vào hệ thống (Install to System)**.
2. Trên màn hình iPhone hiện popup cho phép tải hồ sơ cấu hình -> Nhấn **Cho phép**.
3. Vào **Cài đặt iPhone** -> **Đã tải về hồ sơ** -> Nhấn **Cài đặt** ở góc trên bên phải.
4. Tiếp tục vào **Cài đặt iPhone** -> **Cài đặt chung** -> **Giới thiệu** -> Kéo xuống dưới chọn **Cài đặt tin cậy chứng chỉ** -> **Bật công tắc XANH** cho chứng chỉ Shadowrocket vừa cài.

#### Bước 4: Hoàn tất & Kích hoạt
1. Mở lại Shadowrocket, bật công tắc kết nối (VPN Connected).
2. Vuốt tắt Locket khỏi đa nhiệm và mở lại. Locket của bạn sẽ lập tức kích hoạt **Locket Gold VIP**!

---

### LỰA CHỌN 2: Chạy bản ONLINE (Tiện lợi nhất - Không cần chép file JS)

1. Chia sẻ hoặc tải file [`Config/LocketGold_Online.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Online.conf) vào **Shadowrocket** (hoặc nhấn dấu `+` trong mục Cấu hình rồi nhập URL của file `.conf`).
2. Tích chọn file `LocketGold_Online.conf` trong tab Cấu hình.
3. Đảm bảo chứng chỉ CA đã được cài đặt và tin cậy (như Bước 3 ở trên).
4. Bật VPN và khởi động lại Locket!

---

### LỰA CHỌN 3: Ghép vào file cấu hình đang dùng (`default.conf`)

Nếu bạn đang sử dụng sẵn một cấu hình VPN riêng và không muốn chuyển đổi toàn bộ file:
1. Mở Shadowrocket -> Tab **Cấu hình (Config)**.
2. Nhấn vào dấu **(i)** cạnh file cấu hình đang dùng (ví dụ `default.conf`) -> Chọn **Chỉnh sửa dạng văn bản (Edit Text)**.
3. Mở file [`Config/LocketGold_Snippet.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Snippet.conf), sao chép các khối:
   - Thêm các dòng chặn UDP vào mục `[Rule]`.
   - Thêm dòng chặn realtime vào mục `[Host]`.
   - Thêm các dòng xóa header vào mục `[Header Rewrite]`.
   - Thêm các dòng xử lý script vào mục `[Script]`.
   - Thêm danh sách tên miền vào mục `[MITM]`.
4. Nhấn **Lưu (Save)**.

---

## 📱 CẤU HÌNH CHO QUANTUMULT X, SURGE & LOON

- **Quantumult X**: Sao chép nội dung file [`Config/QuantumultX_Locket.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/QuantumultX_Locket.conf) vào mục `[rewrite_local]` và `[mitm]` trong file cấu hình Quantumult X của bạn.
- **Surge**: Sử dụng file [`Config/Surge_Locket.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/Surge_Locket.conf).
- **Loon**: Nhập plugin từ file [`Config/Loon_Locket.plugin`](file:///c:/Users/Microsoft/Downloads/locket/Config/Loon_Locket.plugin).

---

## 🔒 Bản quyền & Cam kết
- Tác giả & Phát triển: **DinhTuan**
- Toàn bộ bản quyền 100% thuộc về **DinhTuan**.
- Miễn phí, không chứa mã độc, tôn trọng quyền riêng tư người dùng.
