# 1. 如何啟動
* `npm install`
* `npm start`
# 2. 專案架構
+ `/src/components`
  - `Header.js`: 用於修改所有頁面上方標題欄位
+ `/src/pages`
  - `Home.js`: 專案起始頁
  - `UserReposList.js`: 列出UserRepos頁面
  - `SingleReposPage`: 點擊單一Repos後，顯示該Repos細項的頁面
+ `/src/redux`
  - `/src/redux/action`
    - `index.js`: 存放api呼叫方式
    - `Type.js`: dispatch 至 reducer 方式命名
  - `/src/redux/api`
    - `requests.js`: api呼叫的基礎url
  - `/src/reux/reducer`
    - `RootReducers.js`: reducer集中管理
    - `UserReposReducer.js`: 用於儲存api回傳後資料
