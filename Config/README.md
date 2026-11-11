# 📁 Thư mục Cấu hình (Config) - Locket Gold VIP DinhTuan

Nơi lưu trữ toàn bộ các file cấu hình (`.conf`, `.plugin`, `.mobileconfig`) thay thế hoàn toàn cho cơ chế Modules cũ.

---

## 📑 Danh sách các file cấu hình

| Tên File | Loại | Mô tả & Khi nào nên dùng |
| :--- | :--- | :--- |
| **[`LocketGold_Offline.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Offline.conf)** | Shadowrocket | **⭐ KHUYÊN DÙNG NHẤT**: Độc lập, chạy offline 100% bằng script cục bộ trong máy. Không phụ thuộc mạng, không bao giờ lo chết link hay timeout. |
| **[`LocketGold_Online.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Online.conf)** | Shadowrocket | Độc lập, chạy online tải script qua GitHub Raw. Tiện lợi nhất, chỉ cần thêm file config là chạy ngay không cần chép file `.js`. |
| **[`LocketGold_Core.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Core.conf)** | Shadowrocket | Bản rút gọn chạy Offline: Chỉ mở khóa Gold + Video 45s + Chống 304, siêu nhẹ và ổn định tối đa. |
| **[`LocketGold_Core_Online.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Core_Online.conf)** | Shadowrocket | Bản rút gọn chạy Online. |
| **[`LocketGold_Snippet.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGold_Snippet.conf)** | Shadowrocket | Đoạn mã mẫu chia sẵn các block `[Rule]`, `[Host]`, `[Header Rewrite]`, `[Script]`, `[MITM]` để dán vào file cấu hình đang dùng (`default.conf`) mà không làm mất proxy cá nhân. |
| **[`QuantumultX_Locket.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/QuantumultX_Locket.conf)** | Quantumult X | Đoạn cấu hình `[rewrite_local]` và `[mitm]` cho người dùng app Quantumult X. |
| **[`Surge_Locket.conf`](file:///c:/Users/Microsoft/Downloads/locket/Config/Surge_Locket.conf)** | Surge | Cấu hình cho người dùng ứng dụng Surge iOS / Mac. |
| **[`Loon_Locket.plugin`](file:///c:/Users/Microsoft/Downloads/locket/Config/Loon_Locket.plugin)** | Loon | Cấu hình Plugin cho ứng dụng Loon iOS. |
| **[`LocketGoldDNS-DinhTuan.mobileconfig`](file:///c:/Users/Microsoft/Downloads/locket/Config/LocketGoldDNS-DinhTuan.mobileconfig)** | iOS Profile | Profile cấu hình NextDNS qua DoT/TLS hỗ trợ chặn UDP & bảo mật phân giải tên miền. |

---

## 💡 Ưu điểm khi chạy bằng Config so với Modules

1. **Kiểm soát toàn diện**: File `.conf` là cấu hình trực tiếp (Active Configuration), bạn có thể xem và chỉnh sửa từng mục trực tiếp trong Shadowrocket mà không bị ẩn như Module.
2. **Không lỗi ngầm**: Nhiều bản iOS / Shadowrocket gặp lỗi không nạp được Module hoặc bị tắt Module đột ngột khi chạy ngầm. Config đảm bảo luôn hoạt động ổn định 100%.
3. **Dễ sao lưu & Chia sẻ**: Chỉ cần 1 file `.conf` là có thể chia sẻ qua AirDrop, Zalo, Telegram hoặc lưu vào iCloud Drive.
4. **Hỗ trợ chạy Offline 100%**: Đọc thẳng script từ bộ nhớ iPhone, bảo đảm an toàn, không lo server trung gian bị sập hay mất mạng.
