# 🧙‍♂️ Monad Wallet Explorer (Vision-Zerox)

Vision-Zerox is a web application that allows users to quickly query an Monad address or an ENS name via a browser. It fetches and displays the NFTs and tokens associated with the queried address. The project utilizes Next.js, TailwindCSS, and Shadcn for the frontend and uses the OpenSea APIs for data fetching.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Node.js, Express Server, MongoDB ( Not precisely )
- **Styling**: Tailwind CSS, Shadcn for UI Components
- **Web3 Technology**: Wagmi, Viem, Monad Testnet
- Utilizes OpenSea API to fetch and display NFTs.
- Utilizes Alchemy API to fetch tokens and their current prices.


## 🔥 Features

### 🧾 Wallet Lookup
- Enter any **Monad wallet address** to instantly view wallet information.
- Displays:
  - ✅ Native token balance (e.g., **MON**)
  - ✅ ERC-20–like token balances
  - ✅ ERC-721 / ERC-1155–like NFT holdings

---

### 💰 Token Balance View
- Shows all ERC-20–like tokens held by the address.
- Each token card displays:
  - **Token name** and **symbol**
  - **Token balance**
  - **Contract address**
  - 🔜 *(Coming Soon)*: **Real-time token value**

---

### 🎨 NFT Gallery View
- Responsive grid layout showing all NFTs owned by the wallet.
- Each NFT card includes:
  - 🖼️ **Image preview** (if metadata available)
  - 🆔 **Token ID**
  - 📛 **Collection name**
  - 📄 **Contract address**

---

### ⚡ Built for Monad Blockchain
- Fully optimized for the **Monad ecosystem**
- Fast and efficient wallet scanning
- Modular architecture to support future features like:
  - Price data
  - NFT metadata indexing
  - Transaction history


## 📦 Installation 

```bash
git clone https://github.com/Kali-Decoder/Vision-Zerox.git
npm install
npm run dev
```
## 📦 To Add Any Shadcn Component 

```bash
npx shadcn-ui init
npx shadcn-ui add button
```


