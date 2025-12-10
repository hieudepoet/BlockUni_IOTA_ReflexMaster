# Hướng dẫn Deploy chi tiết

## Bước 1: Chuẩn bị môi trường

### 1.1. Kiểm tra IOTA CLI đã cài đặt
```bash
iota --version
```

### 1.2. Kiểm tra network hiện tại
```bash
iota client active-env
```

### 1.3. Chuyển sang testnet (nếu chưa)
```bash
iota client switch --env testnet
```

### 1.4. Kiểm tra địa chỉ ví
```bash
iota client active-address
```

### 1.5. Lấy testnet tokens (nếu cần)
Truy cập: https://faucet.testnet.iota.cafe/
Nhập địa chỉ ví của bạn để nhận IOTA testnet tokens

## Bước 2: Build Smart Contract

```bash
# Di chuyển vào thư mục project
cd d:\Web3\iota\BlockUni_IOTA_ReflexMaster

# Build Move package
iota move build
```

**Kết quả mong đợi:**
```
BUILDING bank_transaction_ledger
```

Nếu có lỗi, kiểm tra:
- File `Move.toml` đúng format
- File `sources/bank_transaction.move` không có lỗi syntax
- Dependencies được cấu hình đúng

## Bước 3: Deploy Smart Contract

```bash
iota client publish --gas-budget 100000000
```

**Lưu ý quan trọng:**
Sau khi deploy thành công, bạn sẽ thấy output như sau:

```
----- Transaction Digest ----
[TRANSACTION_DIGEST_HERE]

----- Transaction Data ----
...

----- Transaction Effects ----
Status : Success
Created Objects:
  - ID: [PACKAGE_ID] , Owner: Immutable
  - ID: [UPGRADE_CAP_ID] , Owner: Account Address ( [YOUR_ADDRESS] )
...
```

**Hãy lưu lại:**
1. **Transaction Digest** (TX Hash)
2. **Package ID** (Object với Owner: Immutable)
3. **Upgrade Cap ID** (để upgrade sau này)

### Ví dụ:
```
Transaction Digest: 8x7y6z5w4v3u2t1s0r9q8p7o6n5m4l3k2j1i0h9g8f7e6d5c4b3a2z1y0x9w8v7u6t
Package ID: 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
```

## Bước 4: Tạo Ledger Object

Sau khi có Package ID, tạo shared ledger object:

```bash
iota client call \
  --package [PACKAGE_ID] \
  --module bank_transaction \
  --function create_ledger \
  --gas-budget 10000000
```

**Thay [PACKAGE_ID] bằng Package ID thực tế của bạn**

**Kết quả:**
```
----- Transaction Digest ----
[CREATE_LEDGER_TX_DIGEST]

----- Transaction Effects ----
Status : Success
Created Objects:
  - ID: [LEDGER_ID] , Owner: Shared
```

**Lưu lại:**
- **Ledger ID** (Object với Owner: Shared)

## Bước 5: Cập nhật Frontend

Mở file `app.js` và cập nhật phần CONFIG:

```javascript
const CONFIG = {
    NETWORK: 'testnet',
    PACKAGE_ID: '0x1234...', // Thay bằng Package ID của bạn
    MODULE_NAME: 'bank_transaction',
    LEDGER_ID: '0x5678...', // Thay bằng Ledger ID của bạn
};
```

## Bước 6: Test gọi Smart Contract

Test record transaction:

```bash
iota client call \
  --package [PACKAGE_ID] \
  --module bank_transaction \
  --function record_transaction \
  --args [LEDGER_ID] "[0x1234]" "[0x5678]" 100000000 1702234567000 "[TXN123]" "[Test transfer]" \
  --gas-budget 10000000
```

**Giải thích arguments:**
- `[LEDGER_ID]`: ID của ledger object
- `"[0x1234]"`: From account (dạng bytes)
- `"[0x5678]"`: To account (dạng bytes)
- `100000000`: Amount (100 USD * 1,000,000)
- `1702234567000`: Timestamp (milliseconds)
- `"[TXN123]"`: Transaction ID
- `"[Test transfer]"`: Description

## Bước 7: Cập nhật README.md

Mở `README.md` và cập nhật phần Package & Transaction:

```markdown
### Package ID
[YOUR_PACKAGE_ID]

### Transaction Hash (Deployment)
[YOUR_DEPLOYMENT_TX_HASH]

### Ledger Object ID
[YOUR_LEDGER_ID]
```

## Bước 8: Chạy Frontend

### Option 1: Python HTTP Server
```bash
python -m http.server 8000
```

### Option 2: Node.js HTTP Server
```bash
npm install -g http-server
http-server -p 8000
```

### Option 3: VS Code Live Server
1. Cài extension "Live Server"
2. Right-click `index.html`
3. Chọn "Open with Live Server"

Truy cập: http://localhost:8000

## Bước 9: Test ứng dụng

1. Mở http://localhost:8000
2. Click "Connect Wallet" (nếu có IOTA wallet extension)
3. Nhập thông tin chuyển khoản
4. Click "Chuyển khoản"
5. Kiểm tra giao dịch trong lịch sử

## Troubleshooting

### Lỗi: "Insufficient gas"
```bash
# Lấy thêm testnet tokens từ faucet
# Hoặc tăng gas budget
--gas-budget 200000000
```

### Lỗi: "Package not found"
- Kiểm tra lại Package ID
- Đảm bảo đã deploy thành công
- Kiểm tra network đúng (testnet)

### Lỗi: "Object not found"
- Kiểm tra Ledger ID
- Đảm bảo đã gọi create_ledger thành công

### Lỗi build: "Dependency error"
```bash
# Xóa cache và build lại
rm -rf build/
iota move build
```

## Verify Deployment

### Kiểm tra Package trên Explorer
Truy cập: https://explorer.iota.cafe/
Tìm kiếm Package ID của bạn

### Kiểm tra Transaction
Tìm kiếm Transaction Digest để xem chi tiết

### Kiểm tra Object
Tìm kiếm Ledger Object ID để xem trạng thái

## Next Steps

Sau khi deploy thành công:
1. ✅ Test chức năng chuyển khoản
2. ✅ Verify transactions trên explorer
3. ✅ Document Package ID và TX Hash
4. ✅ Share với team/community
5. ✅ Cải thiện UI/UX
6. ✅ Thêm tính năng mới

---

**Chúc bạn deploy thành công! 🚀**
