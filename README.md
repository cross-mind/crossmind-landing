# CrossMind Landing Page

AI 联合创始人产品的官方 landing page。

## 技术栈

- **Astro** - 静态站点生成
- **React** - 交互组件
- **Tailwind CSS** - 样式
- **Web3Forms** - 免费邮件发送服务

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 环境变量配置

复制 `.env.example` 为 `.env`:

```bash
cp .env.example .env
```

然后填入你的 Web3Forms Access Key:
1. 访问 https://web3forms.com/
2. 免费注册并获取 Access Key
3. 填入 `.env` 文件

## 部署到 Vercel

### 方式 1: 通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel
```

### 方式 2: 通过 GitHub + Vercel Dashboard

1. 将代码推送到 GitHub
2. 在 Vercel Dashboard 导入项目
3. 配置环境变量 `WEB3FORMS_ACCESS_KEY`
4. 部署完成

## 域名配置

部署后在 Vercel Dashboard:
1. 进入项目 Settings → Domains
2. 添加 `crossmind.io` 作为自定义域名
3. 按提示配置 DNS 记录

## 功能模块

- **Hero** - 首屏价值主张
- **Features** - 核心功能展示
- **Pricing** - 定价方案(含早鸟优惠)
- **Waitlist** - 早鸟用户注册表单

## License

MIT
