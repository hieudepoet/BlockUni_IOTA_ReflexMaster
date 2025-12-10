# BlockBank - Blockchain Banking dApp on IOTA

## 📋 Mô tả dự án

BlockBank là một ứng dụng phi tập trung (dApp) được xây dựng trên IOTA testnet sử dụng **Move smart contract** và **React + TypeScript + Tailwind CSS** frontend. Ứng dụng mô phỏng hệ thống ngân hàng số với tính năng ghi lại lịch sử giao dịch chuyển khoản lên blockchain, đảm bảo tính bất biến và minh bạch của dữ liệu giao dịch.

## 🎯 Mục đích

Giải quyết vấn đề **thay đổi lịch sử giao dịch** trong hệ thống ngân hàng truyền thống bằng cách sử dụng công nghệ blockchain để lưu trữ bất biến các giao dịch chuyển khoản.

## ✨ Tính năng

- 🏦 **Giao diện Digital Banking**: Giao diện React hiện đại với Tailwind CSS
- 💸 **Chuyển khoản**: Mô phỏng chức năng chuyển khoản ngân hàng
- ⛓️ **Blockchain Recording**: Ghi lại mọi giao dịch lên IOTA blockchain
- 📜 **Lịch sử giao dịch**: Hiển thị lịch sử giao dịch được xác thực trên blockchain
- 🔐 **Bất biến**: Dữ liệu giao dịch không thể bị thay đổi sau khi ghi lên chain
- 🎨 **UI/UX Premium**: Thiết kế đẹp mắt với Tailwind CSS, dark mode, glassmorphism, animations
- ⚡ **TypeScript**: Type-safe code với TypeScript
- 🔥 **React Hooks**: Modern React patterns với custom hooks
- 🎯 **Tailwind CSS**: Utility-first CSS framework

## 🏗️ Kiến trúc

### Smart Contract (Move)
Nằm trong thư mục `move/`
- **Module**: `bank_transaction`
- **Chức năng chính**:
  - `create_ledger()`: Khởi tạo sổ cái giao dịch
  - `record_transaction()`: Ghi lại giao dịch lên blockchain
  - `get_transaction_details()`: Lấy thông tin giao dịch

### Frontend (React + TypeScript + Tailwind)
Nằm trong thư mục `frontend/`
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **State Management**: Custom React Hooks
- **Components**:
  - `Header`: Logo và wallet connection
  - `BalanceCard`: Hiển thị số dư
  - `TransferForm`: Form chuyển khoản
  - `TransactionList`: Lịch sử giao dịch
  - `Loading`: Loading overlay
  - `SuccessModal`: Modal thông báo thành công

## 📦 Thông tin Package & Transaction

### Package ID
```
[PACKAGE_ID_WILL_BE_HERE_AFTER_DEPLOYMENT]
```

### Transaction Hash (Deployment)
```
[TX_HASH_WILL_BE_HERE_AFTER_DEPLOYMENT]
```

### Ledger Object ID
```
[LEDGER_ID_WILL_BE_HERE_AFTER_CREATION]
```

### Network
- **Network**: IOTA Testnet
- **RPC Endpoint**: https://api.testnet.iota.cafe

## 🚀 Hướng dẫn cài đặt và chạy

### 1. Clone repository

```bash
git clone <repository-url>
cd BlockUni_IOTA_ReflexMaster
```

### 2. Cài đặt dependencies cho Frontend

```bash
cd frontend
npm install
```

### 3. Chạy Development Server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại: http://localhost:5173/

### 4. Build cho Production

```bash
npm run build
```

## 🔧 Cấu trúc thư mục

```
BlockUni_IOTA_ReflexMaster/
├── move/                          # Move smart contract
│   ├── Move.toml                  # Move package configuration
│   ├── sources/
│   │   └── bank_transaction.move  # Smart contract
│   └── build/                     # Build artifacts
├── frontend/                      # React application
│   ├── src/
│   │   ├── components/            # React components (Tailwind)
│   │   │   ├── Header.tsx
│   │   │   ├── BalanceCard.tsx
│   │   │   ├── TransferForm.tsx
│   │   │   ├── TransactionList.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── SuccessModal.tsx
│   │   ├── hooks/                 # Custom React hooks
│   │   │   ├── useWallet.ts
│   │   │   └── useLocalStorage.ts
│   │   ├── types/                 # TypeScript types
│   │   │   └── index.ts
│   │   ├── utils/                 # Utility functions
│   │   │   └── helpers.ts
│   │   ├── config/                # Configuration
│   │   │   └── index.ts
│   │   ├── App.tsx                # Main App component
│   │   ├── main.tsx               # Entry point
│   │   └── index.css              # Tailwind directives
│   ├── tailwind.config.js         # Tailwind configuration
│   ├── postcss.config.js          # PostCSS configuration
│   ├── package.json
│   └── vite.config.ts
├── README.md                      # This file
└── PROJECT_SUMMARY.md             # Project summary
```

## 🛠️ Tech Stack

### Smart Contract
- **Language**: Move
- **Blockchain**: IOTA
- **Network**: Testnet

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Fonts**: Google Fonts (Inter)

### Development Tools
- **Linting**: ESLint
- **Type Checking**: TypeScript Compiler
- **Package Manager**: npm
- **PostCSS**: Autoprefixer

## 📱 Hướng dẫn sử dụng

1. **Kết nối ví** (Tùy chọn): Click "Connect Wallet" để kết nối IOTA wallet
2. **Nhập thông tin chuyển khoản**:
   - Tài khoản người nhận
   - Số tiền (hoặc click "$100" để chọn nhanh)
   - Nội dung chuyển khoản (tùy chọn)
3. **Chuyển khoản**: Click "Chuyển khoản" để thực hiện giao dịch
4. **Xác nhận**: Giao dịch sẽ được ghi lên blockchain và hiển thị trong lịch sử

## 🎨 Tailwind CSS Features

- ✅ Custom color palette matching original design
- ✅ Custom animations (float, slide-up, pulse, spin, modal-slide-up)
- ✅ Glassmorphism effects with backdrop-blur
- ✅ Gradient backgrounds
- ✅ Custom shadows
- ✅ Responsive design utilities
- ✅ Animation delays for staggered effects
- ✅ Hover and focus states

## 🔐 Bảo mật

- ✅ Smart contract sử dụng `entry` functions để bảo vệ
- ✅ TypeScript type safety
- ✅ Input validation
- ✅ Sử dụng `shared object` cho ledger
- ✅ Event emission để tracking
- ✅ Immutable transaction records

## 🧪 Testing

### Test Frontend

```bash
cd frontend
npm run lint        # Run ESLint
npm run build       # Test production build
```

### Test Smart Contract

```bash
cd move
iota move build

# Test trên testnet (sau khi deploy)
iota client call --package [PACKAGE_ID] --module bank_transaction --function record_transaction --args [LEDGER_ID] "[FROM]" "[TO]" 100000000 [TIMESTAMP] "[TX_ID]" "[DESC]" --gas-budget 10000000
```

## 🌟 Tính năng nâng cao (Future)

- [ ] Tích hợp IOTA Wallet SDK
- [ ] Query transactions từ blockchain
- [ ] Multi-signature transactions
- [ ] Transaction filters và search
- [ ] Export transaction history
- [ ] Dark/Light mode toggle
- [ ] Multi-language support (i18n)
- [ ] Real-time notifications
- [ ] Transaction analytics dashboard

## 📚 Tài liệu tham khảo

- [IOTA Documentation](https://docs.iota.org/)
- [Move Language](https://move-language.github.io/move/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 👨‍💻 Phát triển

**Developer**: BlockUni Team  
**Smart Contract**: IOTA Move  
**Frontend**: React + TypeScript + Tailwind CSS  
**Network**: IOTA Testnet  
**Version**: 2.0.0

## 📄 License

MIT License

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo Pull Request hoặc Issue.

---

**Note**: Đây là phiên bản MVP (Minimum Viable Product) cho mục đích demo và học tập. Không sử dụng trong môi trường production với tiền thật.
