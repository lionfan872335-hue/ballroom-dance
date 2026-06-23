# 開發日誌

## 2026-06-23 — 專案初始化 → 完整開發 → 部署上線

### 里程碑
| 時間 | 事件 |
|------|------|
| 初始化 | 建立專案結構：首頁、style.css、script.js |
| 擴充 | 6→10 舞科，加入維也納華爾滋、快步、捷舞、鬥牛舞 |
| 重構 | 首頁改為摩登五項 / 拉丁五項分類架構 |
| 影片嵌入 | 10 頁舞科加入 YouTube 教學影片 + 世界冠軍比賽影片 |
| 資源頁面 | 建立 resources.html（音樂連結、練習表、外部資源） |
| 部署 | GitHub Pages 上線 |

### 技術決策
- **靜態網站**：純 HTML/CSS/JS，無框架，輕量快速
- **影片容器**：16:9 padding-bottom 手法實現響應式 iframe
- **Git 管理**：專案獨立 git repo，避免與上層嵌套混淆
- **部署平台**：GitHub Pages（public repo）

### 檔案結構
```
國標舞自學網站/
├── index.html          # 首頁（10 舞科卡片 + 學習路徑 + 推薦頻道）
├── style.css           # 全域樣式（含 RWD）
├── script.js           # 互動功能
├── resources.html      # 學習資源頁
├── dances/
│   ├── waltz.html      # 華爾滋
│   ├── tango.html      # 探戈
│   ├── foxtrot.html    # 狐步
│   ├── viennese.html   # 維也納華爾滋
│   ├── quickstep.html  # 快步
│   ├── rumba.html      # 倫巴
│   ├── chacha.html     # 恰恰
│   ├── jive.html       # 捷舞
│   ├── samba.html      # 森巴
│   └── paso.html       # 鬥牛舞
└── PROJECT.md          # 專案檢查表
```

### 待討論 / 未來方向
- [ ] 加入各舞科步型資料庫（附圖解）
- [ ] 自訂網域名稱
- [ ] 練習計時器工具頁面
- [ ] 搜尋功能
