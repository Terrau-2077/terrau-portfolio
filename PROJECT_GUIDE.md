---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3046022100a420dc70726d1c8a7937061276a97d74a9e986ddbac2c41457bb4dc8db110006022100b32c1f96949e08029c00f3c212f9d7a0cbe46d3b17d13ba90f42b29224a67b8a
    ReservedCode2: 3046022100b5c07a75fd1445ad9593e4fd3434d6e5aa8263201bfa553a6a5b386cb4c3781b022100954a3069de61071c61b8b6969b7881a164b55dc8946cfacb7a211d731b30047d
---

# Terrau 个人网页项目说明

## 📁 项目文件夹结构

```
terrau-portfolio/
├── public/                      # 静态资源文件夹（直接复制到网站）
│   └── avatar.jpg              # 你的头像图片
│
├── src/                        # 源代码文件夹
│   ├── components/            # React 组件文件夹
│   │   ├── Header.tsx         # 顶部导航栏
│   │   ├── Hero.tsx           # 首屏大图区域
│   │   ├── About.tsx          # 关于我页面
│   │   ├── Articles.tsx       # 文章列表页面
│   │   ├── Portfolio.tsx      # 作品集页面
│   │   ├── SocialLinks.tsx    # 社交媒体链接
│   │   ├── Footer.tsx         # 底部版权信息
│   │   ├── ArticleDetail.tsx  # 文章详情页 ⭐新增
│   │   └── ProjectDetail.tsx  # 项目详情页 ⭐新增
│   │
│   ├── data/                  # 数据文件夹 ⭐新位置
│   │   └── content.ts        # 所有文章和项目数据
│   │
│   ├── App.tsx               # 主应用组件（路由配置）
│   ├── index.css             # 全局样式（Tailwind CSS）
│   └── main.tsx             # 入口文件
│
├── dist/                      # 构建输出文件夹（自动生成）
│
├── package.json              # 项目配置和依赖
├── tailwind.config.js        # Tailwind CSS 配置
├── vite.config.ts            # Vite 构建工具配置
├── tsconfig.json            # TypeScript 配置
└── index.html               # HTML 入口文件
```

---

## ✏️ 如何更新内容（⭐重要）

### 只需要修改一个文件！

所有文章和项目内容都在 `src/data/content.ts` 中，修改这里即可更新网站！

### 添加新文章

打开 `src/data/content.ts`，在 `articles` 数组中添加新文章：

```tsx
export const articles: Article[] = [
  // ... 现有文章 ...

  // 👇 在这里添加新文章
  {
    id: 'your-article-id',           // 唯一ID，用英文slug
    title: '你的文章标题',            // 文章标题
    excerpt: '文章简介，写1-2句话',   // 列表页显示的简介
    date: 'April 2026',              // 日期
    readTime: '8 min read',          // 阅读时间
    tags: ['AI', 'Tutorial'],        // 标签
    author: 'Terrau',                // 作者名
    content: `
# 文章标题（会自动显示）

正文内容...

## 小标题

段落内容...
    `
  },
];
```

### 添加新项目

打开 `src/data/content.ts`，在 `projects` 数组中添加新项目：

```tsx
export const projects: Project[] = [
  // ... 现有项目 ...

  // 👇 在这里添加新项目
  {
    id: 'your-project-id',           // 唯一ID，用英文slug
    title: '项目名称',                // 项目标题
    description: '项目描述',          // 简短描述
    tags: ['React', 'Python'],       // 技术标签
    icon: 'Zap',                     // 图标名称
    status: 'In Progress',            // 状态
    color: 'from-blue-500 to-indigo-600',  // 渐变色
    overview: '项目概述详细介绍',      // 详情页概述
    features: [                       // 功能列表
      '功能1',
      '功能2',
    ],
    challenges: '遇到的挑战',         // 遇到的挑战
    solutions: '解决方案',            // 如何解决
    githubUrl: 'https://github.com/...',  // GitHub链接（可选）
    demoUrl: 'https://demo.com',     // 演示链接（可选）
  },
];
```

### 图标选项

可用图标：`Zap`、`Layers`、`BarChart`、`ExternalLink`

### 渐变色选项

- `from-amber-500 to-orange-600`（橙黄）
- `from-emerald-500 to-teal-600`（青绿）
- `from-blue-500 to-indigo-600`（蓝紫）
- `from-violet-500 to-purple-600`（紫粉）
- `from-pink-500 to-rose-600`（粉红）

### 项目状态选项

`In Progress`（进行中）、`Live`（已上线）、`Completed`（已完成）、`Ongoing`（持续更新）

---

## 🚀 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 **+** → **New repository**
3. 填写仓库名称：`terrau-portfolio`
4. 选择 **Public**
5. 点击 **Create repository**

### 第二步：本地初始化 Git

在项目文件夹中打开终端，执行：

```bash
cd terrau-portfolio

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/terrau-portfolio.git

# 推送到 GitHub
git push -u origin main
```

### 第三步：配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings**
2. 左侧菜单找到 **Pages**
3. 在 **Source** 下选择：
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. 点击 **Save**
5. 等待 1-2 分钟，你的网站就会上线

### 第四步：自动构建部署（推荐）

创建一个 GitHub Actions 文件自动部署：

1. 在 GitHub 仓库页面，点击 **Settings** → **Pages**
2. **Build and deployment** 选择 **GitHub Actions**
3. 在仓库根目录创建文件 `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy
        uses: peaceiris/actions-ghpages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

现在每次你 `git push` 代码，网站都会自动更新！

---

## 🌐 部署到 Versal

### 方法一：通过 GitHub 导入

1. 登录 [Versal](https://versal.com)
2. 选择 **Import from GitHub**
3. 授权 GitHub 访问
4. 选择 `terrau-portfolio` 仓库
5. Versal 会自动检测并配置

### 方法二：手动上传

1. 构建项目：`pnpm build`
2. 将 `dist` 文件夹的内容下载
3. 上传到 Versal

---

## 💻 本地开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器（实时预览）
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

---

## ❓ 常见问题

**Q: 如何更新邮箱？**
A: 在 `src/components/SocialLinks.tsx` 中搜索 `Terrau2077@163.com` 并替换。

**Q: 如何更换头像？**
A: 将新图片命名为 `avatar.jpg` 替换 `public/avatar.jpg`，然后重新构建。

**Q: 文章详情页支持什么格式？**
A: 支持 `# 标题`、`## 子标题`、`- 列表项`、普通段落。详见 `content.ts` 中的示例。

---

## 📞 需要帮助？

如果有任何问题，随时问我！
