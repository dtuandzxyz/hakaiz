# 🔐 Locket Gold & Filter VIP - Shadowrocket / Loon / Surge / Quantumult X

Bộ cấu hình tối ưu trải nghiệm **Locket Widget**, mở khoá tính năng **Locket Gold**, mở khoá **AI Filters / Photobooth**, gỡ quảng cáo, cho phép video dài (30s - 45s) và chống lỗi `304 Not Modified` / `Không thể áp dụng bộ lọc`.

---

## 📁 Cấu trúc thư mục

```
locket/
├── js/                                # Toàn bộ script xử lý logic cục bộ
│   ├── deleteHeader_Firebase.js       # Xóa header cache ETag / If-None-Match của Firebase
│   ├── deleteHeader_RC.js             # Xóa header cache ETag / If-None-Match của RevenueCat
│   ├── revenuecat.js                  # Mở khoá Locket Gold qua RevenueCat (bản chuẩn)
│   ├── evenuecat.js                   # Alias tương thích ngược cho URL cũ
│   ├── forceGold4.3.js                # Ép cờ Gold, 45s video, vô hiệu hoá paywall Firebase
│   ├── locketfix.js                   # Phiên bản Remote Config đầy đủ nhất (Gold + Stickers + 45s)
│   ├── locket_change_profile.js       # Giả lập changeProfileInfo, gỡ mờ ảnh, mở khoá Gold VIP
│   ├── locket_filter_resp.js          # Xử lý response mở khoá bộ lọc ảnh, unblur, bảo toàn streak
│   └── locket_pb_req.js               # Điều hướng bảo mật Photobooth & bộ lọc AI qua Cloudflare Worker
├── Module locket/
│   ├── Locketgolddinhtuan.module      # Module Shadowrocket tổng hợp đầy đủ tính năng nhất
│   └── README.md                      # Hướng dẫn chi tiết cho Module Locket
└── Module-Shadowrocket-NMS/
    ├── Locketgold/
    │   ├── forceGold4.3.js            # Script cấu hình Remote Config
    │   ├── header7.js                 # Script xóa header chống cache 304
    │   ├── locketfix8.js              # Script mở khóa RevenueCat
    │   ├── LocketGoldDNS-DinhTuan.mobileconfig # Profile DNS TLS NextDNS bảo mật
    │   └── README.md
    └── Locketgold2/
        └── Locketv14.module           # Module Shadowrocket bản gọn (Core Gold)
```

---

## 🛠️ Toàn bộ các lỗi đã được tìm và khắc phục triệt để

1. **Lỗi giải mã Base64 JWT làm mất UID chủ máy (`locket_change_profile.js`, `locket_filter_resp.js`)**:
   - *Lỗi cũ*: Vòng lặp giải mã Base64 bitwise cũ bị sai thứ tự toán tử và dịch bit, tạo ra ký tự rác khi decode header Authorization Bearer token, khiến `extractSelfUidFromHeaders` luôn trả về `null`.
   - *Đã sửa*: Viết lại hàm `safeBase64Decode` chuẩn UTF-8, tự động decode an toàn payload JWT và trích xuất chính xác `user_id`, `sub`, `uid` của người dùng.

2. **Lỗi logic Unblur `preview_url` (`locket_change_profile.js`, `locket_filter_resp.js`)**:
   - *Lỗi cũ*: Vòng lặp xóa cờ `is_locked`, `is_blurred = false` chạy trước đoạn thay link ảnh, khiến điều kiện `if ("preview_url" in node && node.is_blurred)` luôn mang giá trị `false`, dẫn đến ảnh preview vẫn bị mờ.
   - *Đã sửa*: Lưu trạng thái `wasBlurred` ban đầu trước khi xóa cờ, đảm bảo `preview_url` luôn được thay thế bằng link ảnh rõ nét (`clearUrl`).

3. **Lỗi tràn Call Stack đệ quy & ô nhiễm biến toàn cục (`locket_change_profile.js`, `locketfix.js`)**:
   - *Lỗi cũ*: Các file thiếu IIFE wrapper `(function () { ... })();`, các biến `const WORKER_HOST`, `var obj` rò rỉ ra JSContext toàn cục của Shadowrocket gây lỗi `Identifier has already been declared` ở các request tiếp theo. Hàm `applyGoldBadge` và `transformNode` có nguy cơ tràn ngăn xếp nếu gặp cấu trúc lặp vòng.
   - *Đã sửa*: Bọc toàn bộ các file trong IIFE cục bộ và bổ sung giới hạn độ sâu đệ quy (`depth guard`) chống crash ứng dụng.

4. **Lỗi đường dẫn sai 404 trong Module Shadowrocket (`Locketgolddinhtuan.module`, `Locketv14.module`)**:
   - *Lỗi cũ*: 
     - Trong `Locketgolddinhtuan.module`, đường dẫn `script-path` trỏ tới `Locket%20Filter%20AI/js/evenuecat.js` (thư mục không tồn tại trên repo).
     - Trong `Locketv14.module`, đường dẫn trỏ tới `Module-Shadowrocket-NMS/Locket%20Gold/` (thừa dấu cách so với thư mục `Locketgold` thực tế). Cả hai đều gây lỗi 404 khi Shadowrocket tải script từ GitHub.
   - *Đã sửa*: Chuẩn hóa đường dẫn chính xác theo cấu trúc Git (`main/js/revenuecat.js` và `main/Module-Shadowrocket-NMS/Locketgold/`).

5. **Lệch cấu hình thời lượng video 30s vs 45s (`forceGold4.3.js`)**:
   - *Lỗi cũ*: Khối JSON string của `camera` và `camera_roll` bị gán cứng `30.0` giây, xung đột với cấu hình 45.0 giây ở các key bên dưới.
   - *Đã sửa*: Đồng bộ toàn bộ các giá trị video max duration thành `45.0` giây trên cả `forceGold4.3.js` và `locketfix.js`.

6. **Lỗi thiếu cờ `filter_type = 'normal'` và mất body trong `locket_pb_req.js`**:
   - *Lỗi cũ*: Khi map sticker ID sang AI filter prompt, script không gán `filter_type = "normal"`, và nếu không có filter_id thì biến `doneObj.body` bị `undefined` làm rớt body POST.
   - *Đã sửa*: Luôn giữ lại body gốc, bổ sung `filter_type = "normal"`, và kích hoạt mock HTTP 200 cho khung tĩnh / photobooth tránh lỗi 422 từ upstream.

7. **Bổ sung tương thích đa nền tảng (Shadowrocket, Loon, Surge, Quantumult X)**:
   - *Đã sửa*: Bổ sung phân nhánh trả kết quả `$done({ body: ... })` cho Quantumult X bên cạnh định dạng `{ status: 200, headers, body }` của Surge / Shadowrocket / Loon; hỗ trợ fallback giữa `$persistentStore` và `$prefs`.

8. **Dọn dẹp file trùng lặp (`README (1).md`)**:
   - *Đã sửa*: Xóa các file duplicate rác do tải về nhiều lần, đồng bộ hướng dẫn chuẩn xác trên toàn bộ các thư mục.

---

## 🚀 Hướng dẫn cài đặt trên Shadowrocket (iOS)

1. Mở **Shadowrocket** -> chọn tab **Cấu hình (Config)**.
2. Chọn **Thêm cấu hình (Add Configuration)** -> Dán liên kết hoặc import file `Locketgolddinhtuan.module` (bản đầy đủ tính năng) hoặc `Locketv14.module` (bản cơ bản).
3. Đảm bảo đã bật **HTTPS Decryption (Giải mã HTTPS / MITM)** trong Shadowrocket và cài đặt / tin cậy chứng chỉ CA trong:
   - *Cài đặt (Settings) -> Cài đặt chung (General) -> Giới thiệu (About) -> Cài đặt tin cậy chứng chỉ (Certificate Trust Settings)*.
4. Xóa ứng dụng Locket khỏi đa nhiệm, bật VPN Shadowrocket và mở lại Locket để tận hưởng Locket Gold.
