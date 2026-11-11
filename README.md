# 🔐 Locket Gold & Filter VIP - DinhTuan

Bộ cấu hình tối ưu trải nghiệm **Locket Widget**, mở khoá tính năng **Locket Gold**, mở khoá **AI Filters / Photobooth**, gỡ quảng cáo, cho phép video dài (30s - 45s) và chống lỗi `304 Not Modified` / `Không thể áp dụng bộ lọc`.

> 👑 **Bản quyền**: 100% thuộc về **DinhTuan**  
> 📱 **Hỗ trợ nền tảng**: Shadowrocket, Loon, Surge, Quantumult X

---

## 📁 Cấu trúc thư mục

```
locket/
├── js/                                # Toàn bộ script xử lý logic cục bộ (Bản quyền: DinhTuan)
│   ├── deleteHeader_Firebase.js       # Xóa header cache ETag / If-None-Match của Firebase
│   ├── deleteHeader_RC.js             # Xóa header cache ETag / If-None-Match của RevenueCat
│   ├── deleteHeader.js                # Bản hợp nhất xóa cache cho Shadowrocket cục bộ
│   ├── revenuecat.js                  # Mở khoá Locket Gold qua RevenueCat (bản chuẩn)
│   ├── evenuecat.js                   # Alias tương thích ngược
│   ├── forceGold4.3.js                # Ép cờ Gold, 45s video, vô hiệu hoá paywall Firebase
│   ├── locketfix.js                   # Phiên bản Remote Config đầy đủ nhất (Gold + Stickers + 45s)
│   ├── locket_change_profile.js       # Giả lập changeProfileInfo, gỡ mờ ảnh, mở khoá Gold VIP
│   ├── locket_filter_resp.js          # Xử lý response mở khoá bộ lọc ảnh, unblur, bảo toàn streak
│   └── locket_pb_req.js               # Điều hướng bảo mật Photobooth & bộ lọc AI
├── Module locket/
│   ├── LocketGold_Offline_DinhTuan.module # Module chạy OFFLINE CỤC BỘ 100% (Khuyên dùng - Không cần mạng tải script)
│   ├── Locketgolddinhtuan.module      # Module Shadowrocket tổng hợp đầy đủ tính năng nhất
│   └── README.md                      # Hướng dẫn chi tiết cho Module Locket
└── Module-Shadowrocket-NMS/
    ├── Locketgold/
    │   ├── forceGold4.3.js            # Script cấu hình Remote Config
    │   ├── header7.js                 # Script xóa header chống cache 304
    │   ├── locketfix8.js              # Script mở khóa RevenueCat
    │   ├── LocketGoldDNS-DinhTuan.mobileconfig # Profile DNS TLS NextDNS bảo mật (DinhTuan)
    │   └── README.md
    └── Locketgold2/
        └── Locketv14.module           # Module Shadowrocket bản gọn (Core Gold)
```

---

## ⚠️ TẠI SAO CODE TRƯỚC ĐÂY KHÔNG CÓ TÁC DỤNG? (VÀ CÁCH KHẮC PHỤC 100%)

Nếu bạn đã bật Shadowrocket nhưng Locket vẫn không lên Gold, có **3 nguyên nhân chính**:

1. **CHƯA BẬT TIN CẬY CHỨNG CHỈ TRONG CÀI ĐẶT IPHONE (Nguyên nhân phổ biến nhất 99%)**:
   - Khi bạn tạo chứng chỉ CA trong Shadowrocket và cài vào máy, iOS **mặc định KHÔNG kích hoạt giải mã HTTPS**.
   - Nếu chưa kích hoạt, Shadowrocket không thể đọc được gói tin HTTPS của Locket (`api.revenuecat.com`), dẫn đến script không bao giờ được chạy!
   - 👉 **Cách sửa**: Mở **Cài đặt iPhone** -> **Cài đặt chung (General)** -> **Giới thiệu (About)** -> Kéo xuống dưới cùng chọn **Cài đặt tin cậy chứng chỉ (Certificate Trust Settings)** -> **Gạt BẬT XANH cho chứng chỉ của Shadowrocket**!

2. **Shadowrocket không tải được Script từ xa (Lỗi 404 / Server chết)**:
   - Trong file `.module` cũ, đường dẫn `script-path` trỏ đến các liên kết GitHub/Worker bên ngoài. Nếu đường link này bị lỗi hoặc chết, Shadowrocket sẽ bỏ qua script và không mở khoá được.
   - 👉 **Cách sửa**: Sử dụng file [`LocketGold_Offline_DinhTuan.module`](file:///c:/Users/Microsoft/Downloads/locket/Module%20locket/LocketGold_Offline_DinhTuan.module). Bản này đọc trực tiếp các file `.js` có sẵn trong máy iPhone, **100% không cần tải qua mạng, không bao giờ lo chết link hay lỗi 404**!

3. **Chưa tắt hẳn ứng dụng Locket khỏi đa nhiệm**:
   - Locket lưu cache trạng thái gói cũ trong RAM.
   - 👉 **Cách sửa**: Sau khi bật VPN Shadowrocket, phải **vuốt tắt Locket khỏi đa nhiệm** rồi mở lại.

---

## 🚀 HƯỚNG DẪN CÀI ĐẶT BẢN OFFLINE CỤC BỘ (100% THÀNH CÔNG)

### Bước 1: Copy các file Script vào thư mục Shadowrocket trên iPhone
1. Gửi thư mục chứa các file `.js` (`revenuecat.js`, `forceGold4.3.js`, `deleteHeader.js`, `locket_change_profile.js`) qua iPhone.
2. Mở ứng dụng **Tệp (Files)** trên iPhone -> Chọn **Trên iPhone (On My iPhone)** -> Mở thư mục **Shadowrocket**.
3. Dán các file `.js` này trực tiếp vào thư mục **Shadowrocket**.

### Bước 2: Nhập Module vào Shadowrocket
1. Nhấn mở file [`LocketGold_Offline_DinhTuan.module`](file:///c:/Users/Microsoft/Downloads/locket/Module%20locket/LocketGold_Offline_DinhTuan.module) và chia sẻ vào **Shadowrocket**.
2. Đảm bảo Module đã được tích chọn bật trong tab **Cấu hình (Config)** -> **Mô-đun (Modules)**.

### Bước 3: Bật Giải mã HTTPS & Tin cậy chứng chỉ
1. Trong Shadowrocket: **Cài đặt (Settings)** -> **Chứng chỉ (Certificate)** -> **Tạo chứng chỉ mới** -> **Cài đặt chứng chỉ vào hệ thống**.
2. Trong Cài đặt iPhone: **Cài đặt chung** -> **Giới thiệu** -> **Cài đặt tin cậy chứng chỉ** -> **Bật xanh**.

### Bước 4: Tận hưởng Locket Gold
- Bật công tắc kết nối Shadowrocket (VPN Connected).
- Vuốt tắt Locket khỏi đa nhiệm và mở lại.
