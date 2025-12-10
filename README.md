# BlockBank - Web3 Banking Platform

<div align="center">

![BlockBank](https://img.shields.io/badge/BlockBank-Web3%20Banking-gold?style=for-the-badge)
![IOTA](https://img.shields.io/badge/IOTA-Testnet-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

**A luxurious Web3 banking platform built on IOTA blockchain**

[Live Demo](#) • [Explorer](#smart-contract-info) • [Documentation](#)

</div>

---

## 📋 Nội dung

BlockBank là một nền tảng ngân hàng kỹ thuật số phi tập trung (dApp) được xây dựng trên IOTA blockchain. Dự án này tập trung vào việc ghi lại lịch sử giao dịch chuyển khoản một cách bất biến và minh bạch thông qua smart contract.

### Đặc điểm nổi bật:
- 🔐 **Bảo mật blockchain**: Mọi giao dịch được ghi lại bất biến trên IOTA
- 💎 **Giao diện sang trọng**: Theme đen và vàng kim, phong cách Web3 hiện đại
- 🚀 **Smart Contract**: Sử dụng Move language trên IOTA
- 📱 **Responsive**: Tối ưu cho mọi thiết bị
- ⚡ **Fast & Secure**: Tận dụng sức mạnh của IOTA blockchain

---

## 🎯 Mục đích

### Mục tiêu chính:
1. **Học tập và Rèn luyện**: Phát triển kỹ năng smart contract development với Move language
2. **Giải quyết vấn đề thực tế**: Ngăn chặn việc thay đổi lịch sử giao dịch trong hệ thống ngân hàng truyền thống
3. **Trải nghiệm Web3**: Cung cấp nền tảng để người dùng trải nghiệm công nghệ blockchain

### Vấn đề giải quyết:
- ❌ Lịch sử giao dịch có thể bị thay đổi trong hệ thống tập trung
- ✅ Blockchain đảm bảo tính bất biến của dữ liệu giao dịch
- ✅ Minh bạch và có thể kiểm chứng mọi lúc

---

## 🏗️ Kiến trúc

```
BlockUni_IOTA_ReflexMaster/
├── move/                          # Smart Contract (IOTA Move)
│   ├── Move.toml                  # Package configuration
│   ├── sources/
│   │   └── bank_transaction.move  # Main contract
│   └── build/                     # Compiled artifacts
│
├── frontend-new/                  # React Frontend
│   ├── src/
│   │   ├── App.tsx               # Main application
│   │   ├── index.css             # Tailwind styles
│   │   └── main.tsx              # Entry point
│   ├── tailwind.config.js        # Tailwind configuration
│   └── package.json
│
└── README.md                      # This file
```

---

## 🚀 Cách sử dụng

### Prerequisites
- Node.js 20.19+ hoặc 22.12+
- IOTA CLI
- Git

### 1. Clone Repository

```bash
git clone <repository-url>
cd BlockUni_IOTA_ReflexMaster
```

### 2. Setup Frontend

```bash
cd frontend-new
npm install
npm run dev
```

Ứng dụng sẽ chạy tại: **http://localhost:5173/**

### 3. Build Smart Contract

```bash
cd move
iota move build
```

### 4. Deploy Smart Contract (Optional)

```bash
# Đảm bảo đã cấu hình IOTA CLI với testnet
iota client switch --env testnet

# Deploy contract
iota client publish --gas-budget 100000000

# Tạo ledger object
iota client call \
  --package <PACKAGE_ID> \
  --module bank_transaction \
  --function create_ledger \
  --gas-budget 10000000
```

---

## 📦 Smart Contract Info

### Deployment Information

> **Note**: Contract sẽ được deploy lên IOTA Testnet

#### Package Information
- **Package ID**: `[Sẽ cập nhật sau khi deploy]`
- **Module**: `bank_transaction`
- **Network**: IOTA Testnet

#### Transaction Links
- **Deployment TX**: [View on Explorer](#)
- **Package Explorer**: [View Package](#)
- **Ledger Object**: [View Object](#)

#### Contract Functions
- `create_ledger()` - Khởi tạo sổ cái giao dịch
- `record_transaction()` - Ghi lại giao dịch lên blockchain
- `get_transaction_details()` - Lấy thông tin giao dịch

---

## 🎨 Features

### ✅ Đã hoàn thành

#### Frontend
- [x] Giao diện sang trọng đen-vàng kim
- [x] Balance card với toggle show/hide
- [x] Username display (Ikaris)
- [x] Account number ẩn với nút hiển thị
- [x] Quick actions menu
- [x] About section
- [x] How to use guide
- [x] Recent transactions section
- [x] Responsive design
- [x] Shimmer & glow effects

#### Smart Contract
- [x] Transaction ledger structure
- [x] Record transaction function
- [x] Event emission
- [x] Immutable storage

### 🔜 Coming Soon

- [ ] Transfer functionality
- [ ] Cards management
- [ ] Investment features
- [ ] Settings & preferences
- [ ] Real wallet connection
- [ ] Transaction history display
- [ ] Multi-language support

---

## 🛠️ Tech Stack

### Smart Contract
- **Language**: Move
- **Blockchain**: IOTA
- **Network**: Testnet
- **Framework**: IOTA Move Framework

### Frontend
- **Framework**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 7
- **Icons**: Lucide React
- **Fonts**: Inter, Orbitron

---

## 📖 Hướng dẫn sử dụng

### Cho người dùng

1. **Truy cập ứng dụng**
   - Mở trình duyệt và truy cập URL của app
   
2. **Kết nối ví** (Coming soon)
   - Click nút "Connect Wallet"
   - Chọn ví IOTA của bạn
   - Xác nhận kết nối

3. **Khám phá tính năng**
   - Xem số dư (mock data)
   - Thử chức năng Transfer (đang phát triển)
   - Xem lịch sử giao dịch

4. **Lưu ý**
   - ⚠️ Đây là demo platform
   - 📊 Data hiện tại được mock
   - 🔧 Smart contracts đang trong quá trình phát triển

### Cho developers

#### Deploy Contract

```bash
# Build
cd move
iota move build

# Deploy
iota client publish --gas-budget 100000000

# Lưu Package ID và cập nhật vào README
```

#### Update Frontend Config

```typescript
// Cập nhật sau khi deploy
const CONFIG = {
  packageId: 'YOUR_PACKAGE_ID',
  ledgerId: 'YOUR_LEDGER_ID',
};
```

#### Build for Production

```bash
cd frontend-new
npm run build
# Deploy dist/ folder lên hosting
```

---

## 🔐 Bảo mật

- ✅ Smart contract sử dụng `entry` functions
- ✅ Input validation
- ✅ Immutable transaction records
- ✅ Event emission cho tracking
- ✅ Shared object pattern cho ledger

---

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết

---

## 👥 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

---

## 📞 Liên hệ

- **Project**: BlockBank - Web3 Banking Platform
- **Developer**: BlockUni Team
- **Email**: [your-email@example.com]
- **GitHub**: [your-github-profile]

---

## ⚠️ Disclaimer

**Lưu ý quan trọng:**

- Đây là một dự án học tập và demo
- Không sử dụng với tiền thật hoặc dữ liệu nhạy cảm
- Smart contracts chưa được audit
- Chỉ sử dụng trên testnet
- Developers không chịu trách nhiệm về bất kỳ tổn thất nào

---

## 🙏 Acknowledgments

- [IOTA Foundation](https://www.iota.org/) - Blockchain platform
- [Move Language](https://move-language.github.io/move/) - Smart contract language
- [React](https://react.dev/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide](https://lucide.dev/) - Icon library

---

<div align="center">

**Made with ❤️ for the Web3 community**

⭐ Star this repo if you find it helpful!

</div>
