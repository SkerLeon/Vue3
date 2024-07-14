# Vite Project
- [README 目錄](#vite-project)
  - [系統說明](#系統說明)
  - [資料夾說明](#資料夾說明)
  - [測試帳號密碼](#測試帳號密碼)
  - [在 Local 端的安裝＆運行步驟](#在-local-端的安裝運行步驟)

## 系統說明
專案運行方式是使用 `Node.js`、`npm`、`Vue vite`。

### 核心相依項目（dependencies）
| :pushpin: 項目 | :label:  版本 |
| -------- | -------- |
| pinia | ^2.1.7 |
| view-ui-plus | ^1.3.18 |
| vue | ^3.4.29 |
| vue-i18n | ^10.0.0-beta.3 |
| vue-router | ^4.0.13 |

### 開發相依項目（devDependencies）
| :pushpin: 項目 | :label:  版本 |
| -------- | -------- |
| @vitejs/plugin-vue | ^5.0.5 |
| sass | ^1.77.8 |
| vite | ^5.3.1 |

## 資料夾說明
| :file_folder: 資料夾名稱 | :memo: 說明 |
| -------- | ------------- |
| .vscode  | VS Code 設定 |
| node_modules | Node.js 模組 |
| public   | 靜態資源 |
| src      | 源碼文件 |
| ├── assets | 靜態資源如圖片、樣式等 |
| │   ├── images | 圖片 |
| │   ├── style  | 樣式文件 |
| │   │   ├── base | 基本樣式 |
| │   │   ├── components | 組件樣式 |
| │   │   ├── layout | 佈局樣式 |
| │   │   ├── pages | 頁面樣式 |
| │   │   ├── utils | 工具樣式 |
| │   │   └── style.scss | 主樣式文件 |
| │   └── vue.svg | Vue 標誌 |
| ├── components | Vue 組件 |
| ├── locales | 國際化文件 |
| │   ├── en.json | 英文翻譯 |
| │   ├── zh.json | 中文翻譯 |
| │   └── i18n.js | i18n 設定 |
| ├── router | 路由設定 |
| │   └── router.js | 路由配置 |
| ├── stores | 狀態管理 (Pinia) |
| ├── views | 頁面視圖 |
| │   └── i18ntest.vue | 多國語言測試頁面 |
| ├── App.vue | 根組件 |
| ├── main.js | 入口文件 |
| .gitignore | Git 忽略文件 |
| index.html | 主 HTML 文件 |
| package-lock.json | 鎖定版本的依賴文件 |
| package.json | 專案依賴和腳本 |
| README.md | 專案說明文件 |
| vite.config.js | Vite 配置文件 |


## 在 Local 端的安裝＆運行步驟
請依照以下步驟來安裝和運行專案：

1. 克隆這個倉庫
    ```bash
    git clone https://github.com/你的用戶名/你的專案名.git
    ```

2. 進入專案目錄
    ```bash
    cd 你的專案名
    ```

3. 安裝依賴
    ```bash
    npm install
    ```
    或者使用 yarn
    ```bash
    yarn install
    ```

4. 進行開發
    ```bash
    npm run dev
