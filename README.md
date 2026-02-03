# 專案-商品套框工具

> 為解決以下痛點而開發供內部同仁使用的工具
>
> 1. 每日電商商品圖大量套框與行銷投廣 AD 製作之需求
> 2. 解決設計人力需針對大量品項人工排版耗時
> 3. 降低行銷、PM、設計對於 AD 文案修改的溝通與製作成本

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://create-ads.butters.idv.tw/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC)](https://tailwindcss.com/)

## 📋 目錄

- [🛠 技術棧](#-技術棧)
- [✨ 核心功能](#-核心功能)
- [📝 Demo 說明](#-demo-說明)
- [🚀 快速開始](#-快速開始)
- [📂 專案結構](#-專案結構)

---

**🌐 線上展示**: [https://create-ads.butters.idv.tw/](https://create-ads.butters.idv.tw/)

---

## 🛠 技術棧

### 核心技術

- **React 18.2** - 前端框架
- **React Router DOM 7.x** - 路由管理
- **Vite 4.x** - 建構工具
- **Tailwind CSS 3.x** - CSS 框架
- **Styled Components** - CSS-in-JS
- **Twin.macro** - Tailwind + Styled Components 整合

### 狀態管理

- **Zustand** - 狀態管理

### UI 元件庫

- **Material-UI (MUI) 5.x** - UI 元件庫
- **MUI Date Pickers** - 日期選擇元件

### 工具函式庫

- **Day.js** - 日期處理
- **Axios** - API 請求
- **fetch-jsonp** - JSONP 請求

### 截圖工具

- **dom-to-image** - 網頁 DOM 元素截圖

### 開發工具

- **Sharp** - 圖片壓縮處理
- **Vite Plugin Zip Pack** - 打包壓縮

---

## ✨ 核心功能

### 12賞商品管理

- ✅ **資料串接與截圖**
  - 自動抓取每日 12 賞商品資料
  - 使用後台乾淨商品白底圖取代其他商品圖
  - 提供日期選擇功能
- ✅ **套框截圖下載**
  - 依商品特賣時段自動套用對應框架
  - 下載 640x640 規格圖片
  - 可直接上傳至後台或用於投廣
- ✅ **資訊編輯功能**
  - 點擊卡片即可編輯商品資訊
  - 支援修改「優惠訊息」、「側邊貼紙文案」等常用欄位
  - 僅修改靜態頁面顯示，不影響後台實際資料

### 投廣素材產出

- ✅ **自動排版**
  - 依設計規範自動產生每日 Portal 版頭輪播 AD
  - 產出每日 LINE 推播投廣圖

### 特定商品套框

- ✅ **彈性套框需求**
  - 輸入單一或多組商品 ID，也可直接複製內部共編 google sheet 欄位直接貼上
  - 自動取得商品資料與乾淨白底圖
  - 可選擇不同背景框架樣式 (請與設計確認品框與排版規範)
  - 適用於節日或特殊選品的客製化需求
  - 優惠訊息自行編輯輸入

---

## 📝 Demo 說明

此 Demo 版本為作品集展示用途,已移除以下功能:

- ~~判斷是否內網~~
- ~~12 賞正式 API~~
  - 12 賞目前為假資料
- ~~依 google sheet 欄位抓取商品資料~~

---

## 🚀 快速開始

### 環境需求

- **Node.js**: v18.18 或更高版本
- **npm** 或 **yarn**

### 建議使用的 VSCode 擴充套件

| 擴充套件                                                                                                                      | 用途                       |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) | React 程式碼片段           |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                          | 程式碼品質檢查             |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)                    | Tailwind CSS 自動補全      |
| [Tailwind Twin IntelliSense](https://marketplace.visualstudio.com/items?itemName=lightyen.tailwindcss-intellisense-twin)      | Twin.macro 支援            |
| [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)    | Styled Components 語法高亮 |
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)                   | 路徑自動補全               |
| [MUI Snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.mui-snippets)                                  | Material-UI 程式碼片段     |

### 安裝相關套件

```bash
npm install
```

### 啟動開發環境

啟動專案並自動執行圖片壓縮:

```bash
npm run dev
```

### 建構生產版本

打包專案並建立 .zip 壓縮包:

```bash
npm run build
```

---

## 💻 開發指南

### 🖼️ 圖片壓縮功能

使用 [Sharp](https://www.npmjs.com/package/sharp) 自動壓縮圖片並產出 WebP 格式:

1. **放置素材**: 將圖片素材放在 `input-source/` 資料夾內 (可用子資料夾分類)
2. **執行壓縮**: 執行 `npm run dev` 時自動壓縮
3. **輸出位置**: 壓縮後的圖檔會輸出至 `assets/layout/`

**自動命名範例並 import export**:

```javascript
// assets/layout/index.js 自動產生
import onsaleBgPc from './onsale/bg-pc.png';
import onsaleBgPcWebp from './onsale/bg-pcWebp.webp';
export { onsaleBgPc, onsaleBgPcWebp };
```

**注意事項**:

- 不需壓縮的圖片請放在 `input-source/nominify/` 中
- 壓縮品質參數可在 `convert.js` 中調整
- 圖檔過小可能變 Base64

### 📦 打包功能

使用 [vite-plugin-zip-pack](https://www.npmjs.com/package/vite-plugin-zip-pack) 自動產生後台可上傳壓縮包:

```bash
npm run build
```

執行後會在 `./build-zip/` 資料夾產出可直接上傳後台的 `.zip` 檔案 (請注意檔案大小)。

---

## 📂 專案結構

```
create-ads/
├── public/                          # 靜態資源
│   └── manifest.json                # PWA 配置
├── input-source/                    # 圖片素材來源
│   ├── nominify/                    # 不壓縮的原始圖片
│   ├── boxman/                      # boxman 素材
│   ├── onsale/                      # 12賞相關素材
│   ├── onsale-ads/                  # 投廣素材
│   ├── onsale-border/               # 12賞邊框
│   └── product-border/              # 商品邊框
├── src/
│   ├── assets/                      # 處理後的圖片資源
│   │   ├── base/                    # 基礎素材
│   │   │   ├── header/              # 頁首素材
│   │   │   └── icon/                # 圖標素材
│   │   └── layout/                  # 壓縮後的排版素材
│   │       ├── boxman/
│   │       ├── nominify/
│   │       ├── onsale/
│   │       ├── onsale-ads/
│   │       ├── onsale-border/
│   │       └── product-border/
│   ├── components/                  # React 元件
│   │   ├── basic/                   # 基礎共用元件
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── EditModal/               # 編輯 Modal 元件
│   │   ├── LineAdCard/              # LINE 投廣卡片
│   │   ├── MuiDatePicker/           # 日期選擇器
│   │   ├── OnsaleCard/              # 12賞商品卡片
│   │   ├── PortalAdCard/            # Portal 廣告卡片
│   │   ├── ProductCard/             # 商品卡片
│   │   └── NavList.jsx              # 側邊欄選單
│   ├── constants/
│   │   ├── index.js
│   │   └── mockOnsaleData.js
│   ├── hooks/                       # 自定義 React Hooks
│   ├── pages/                       # 頁面元件
│   │   ├── Dashboard/               # 主控台子頁面
│   │   │   ├── OnsaleAds.jsx        # 12賞投廣
│   │   │   ├── OnsaleBorder.jsx     # 12賞套框
│   │   │   └── ProductBorder.jsx    # 商品套框
│   │   ├── Dashboard.jsx            # 主控台頁面
│   │   ├── Error.jsx                # 錯誤頁面
│   │   └── NotFound.jsx             # 404 頁面
│   ├── stores/                      # Zustand 狀態管理
│   │   ├── useOnsaleStore.js        # 12賞資料狀態
│   │   └── useProductsStore.js      # 商品資料狀態
│   ├── utils/                       # 工具函式
│   │   ├── captureEvent.js          # DOM 截圖工具
│   │   └── formatPriceText.js       # 價格格式化
│   ├── styles/                      # 全域樣式
│   │   └── style.js
│   ├── App.jsx                      # 根元件與路由設定
│   ├── main.jsx                     # 應用程式入口
│   └── index.css                    # 全域 CSS
├── convert.js                       # Sharp 圖片壓縮腳本
├── vite.config.js                   # Vite 配置
├── tailwind.config.js               # Tailwind CSS 配置
├── .env                             # 環境變數 (開發)
├── .env.production                  # 環境變數 (生產)
```

---

## 📌 注意事項

- 此專案為 Demo 展示版本,部分 API 功能已移除
- 建議使用 Node.js v18.18 以上版本

---

## 👤 作者

**Butters**

- GitHub: [@Butters0418](https://github.com/Butters0418)

---

## 📝 License

MIT License
