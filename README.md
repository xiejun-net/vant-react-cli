# Vant React CLI

Vant React CLI frok 自 Vant Cli，是一个基于 Vite 实现的 React 组件库构建工具，通过 Vant React CLI 可以快速搭建一套功能完备的 React 组件库。

### 特性

- 基于 Vite 实现，享受愉悦的开发体验
- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESLint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### 快速上手

执行以下命令可以快速创建一个基于 Vant CLI 的项目：

```bash
# 通过npm
npm init vant-react-app

# 通过 yarn
yarn create vant-react-app

# 通过npx
npx create-vant-react-app

```

### 手动安装

```shell
# 通过 npm
npm i vant-react-cli -D

# 通过 yarn
yarn add vant-react-cli -D

# 通过 pnpm
pnpm add vant-react-cli -D
```

安装完成后，请将以下配置添加到 package.json 文件中

```json
{
  "scripts": {
    "dev": "vant-cli dev",
    "lint": "vant-cli lint",
    "build": "vant-cli build",
    "build:site": "vant-cli build-site",
    "release": "vant-cli release --tag next",
    "release:site": "pnpm build:site && npx gh-pages -d site-dist"
  },
  "author": "",
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "react": "^18.0.25",
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.25",
    "@types/react-dom": "^18.0.9",
    "vant-react-cli": "workspace:*",
    "vue": "^3.0.0",
    "sass": "^1.49.7"
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Chrome >= 51", "iOS >= 10"]
}
```
