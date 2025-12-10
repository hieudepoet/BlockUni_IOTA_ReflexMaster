# BlockBank - User Guide

## 🎯 Giới thiệu

BlockBank là ứng dụng ngân hàng số sử dụng blockchain IOTA để đảm bảo tính minh bạch và bất biến của lịch sử giao dịch.

## 📱 Giao diện chính

### 1. Header
- **Logo BlockBank**: Thương hiệu ứng dụng
- **Connect Wallet**: Nút kết nối ví IOTA
- **Wallet Address**: Hiển thị địa chỉ ví đã kết nối (dạng rút gọn)

### 2. Balance Card (Thẻ số dư)
- **Số dư khả dụng**: Hiển thị số dư tài khoản hiện tại
- **IOTA Testnet Badge**: Chỉ báo kết nối với IOTA testnet
- **Account Number**: Số tài khoản (được ẩn một phần)

### 3. Transfer Section (Phần chuyển khoản)

#### Các trường nhập liệu:
- **Tài khoản người nhận**: 
  - Nhập số tài khoản hoặc địa chỉ ví người nhận
  - Có thể là địa chỉ IOTA (0x...)
  
- **Số tiền (USD)**:
  - Nhập số tiền muốn chuyển
  - Có nút "$100" để chọn nhanh 100 USD
  - Hỗ trợ số thập phân (VD: 50.25)
  
- **Nội dung chuyển khoản**:
  - Tùy chọn, có thể để trống
  - VD: "Thanh toán hóa đơn", "Chuyển tiền cho bạn"

#### Nút Chuyển khoản:
- Click để thực hiện giao dịch
- Có hiệu ứng animation khi hover
- Disabled khi đang xử lý

### 4. Transaction History (Lịch sử giao dịch)

Mỗi giao dịch hiển thị:
- **Người nhận**: Địa chỉ tài khoản (rút gọn)
- **Verified Badge**: Xác nhận đã ghi trên blockchain
- **Thời gian**: Ngày giờ thực hiện giao dịch
- **Nội dung**: Mô tả giao dịch
- **Số tiền**: Số tiền đã chuyển (màu đỏ cho giao dịch đi)
- **TX Hash**: Mã hash giao dịch trên blockchain (rút gọn)

## 🚀 Hướng dẫn sử dụng

### Bước 1: Kết nối ví (Tùy chọn)
1. Click nút "Connect Wallet"
2. Chọn ví IOTA trong extension
3. Xác nhận kết nối
4. Địa chỉ ví sẽ hiển thị ở góc phải

**Lưu ý**: Có thể sử dụng app mà không cần kết nối ví (chế độ demo)

### Bước 2: Thực hiện chuyển khoản

1. **Nhập tài khoản người nhận**:
   ```
   VD: 0x1234567890abcdef...
   hoặc: user@example.com
   hoặc: 9876543210
   ```

2. **Nhập số tiền**:
   - Gõ trực tiếp: `100.50`
   - Hoặc click "$100" để chọn nhanh

3. **Nhập nội dung** (tùy chọn):
   ```
   VD: Thanh toán hóa đơn tháng 12
   ```

4. **Click "Chuyển khoản"**:
   - Loading overlay sẽ hiện ra
   - Chờ 2-3 giây để xử lý
   - Modal thành công sẽ hiển thị

### Bước 3: Xem chi tiết giao dịch

Sau khi chuyển khoản thành công:
- Modal hiển thị thông tin chi tiết:
  - ✅ Người nhận
  - ✅ Số tiền
  - ✅ Thời gian
  - ✅ Mã giao dịch
  - ✅ Blockchain TX Hash

- Click "Đóng" để quay lại

### Bước 4: Kiểm tra lịch sử

- Giao dịch mới sẽ xuất hiện đầu tiên
- Click vào giao dịch để xem chi tiết (future feature)
- Lịch sử được lưu trong trình duyệt

## 🎨 Tính năng UI/UX

### Animations
- ✨ Float animation cho logo
- ✨ Slide up cho các sections
- ✨ Hover effects cho buttons
- ✨ Pulse animation cho status indicators
- ✨ Modal slide up animation

### Visual Effects
- 🌈 Gradient backgrounds
- 🔮 Glassmorphism effects
- 💫 Smooth transitions
- 🎯 Interactive hover states
- ⚡ Loading spinners

### Color Scheme
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#10b981)
- **Danger**: Red (#ef4444)
- **Dark Background**: Navy (#0f172a)

## 🔐 Bảo mật

### Client-side Validation
- ✅ Kiểm tra số tiền > 0
- ✅ Kiểm tra số dư đủ
- ✅ Validate input fields
- ✅ Sanitize user input

### Blockchain Security
- ✅ Giao dịch được ghi bất biến
- ✅ Không thể xóa/sửa lịch sử
- ✅ Timestamp chính xác
- ✅ Transaction hash unique

## 💡 Tips & Tricks

### 1. Chuyển khoản nhanh
- Sử dụng nút "$100" để nhập nhanh
- Lưu địa chỉ người nhận thường xuyên

### 2. Theo dõi giao dịch
- Copy TX Hash để tra cứu trên explorer
- Lưu screenshot modal thành công

### 3. Quản lý số dư
- Kiểm tra số dư trước khi chuyển
- Số dư được cập nhật real-time

### 4. Xem lịch sử
- Giao dịch mới nhất ở trên cùng
- Scroll xuống để xem giao dịch cũ

## ❓ FAQ

### Q: Tôi có cần kết nối ví không?
A: Không bắt buộc cho demo. Nhưng để giao dịch thật trên blockchain cần kết nối ví IOTA.

### Q: Số dư có thật không?
A: Trong demo, số dư là giả lập. Trên mainnet sẽ là số dư thật từ ví.

### Q: Giao dịch có được ghi lên blockchain không?
A: Trong demo, giao dịch được mô phỏng. Khi kết nối ví và có Package ID, giao dịch sẽ thật sự ghi lên IOTA blockchain.

### Q: Làm sao để verify giao dịch?
A: Copy TX Hash và tra cứu trên IOTA Explorer: https://explorer.iota.cafe/

### Q: Tôi có thể hủy giao dịch không?
A: Không. Sau khi ghi lên blockchain, giao dịch không thể hủy hoặc sửa đổi.

### Q: Lịch sử giao dịch lưu ở đâu?
A: Trong demo, lưu ở localStorage của trình duyệt. Trên blockchain, lưu vĩnh viễn.

## 🛠️ Troubleshooting

### Vấn đề: Không kết nối được ví
**Giải pháp**:
- Kiểm tra đã cài IOTA Wallet extension
- Refresh trang và thử lại
- Kiểm tra network (phải là testnet)

### Vấn đề: Giao dịch không hiển thị
**Giải pháp**:
- Kiểm tra console (F12) xem có lỗi
- Clear localStorage và thử lại
- Refresh trang

### Vấn đề: Loading mãi không xong
**Giải pháp**:
- Refresh trang
- Kiểm tra kết nối internet
- Kiểm tra console logs

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Kiểm tra console (F12)
2. Đọc phần Troubleshooting
3. Liên hệ team phát triển

---

**Enjoy BlockBank! 🚀💰**
