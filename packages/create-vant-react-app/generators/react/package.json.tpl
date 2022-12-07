{
  "name": "<%= name %>",
  "version": "0.0.1",
  "description": "",
  "main": "lib/<%= name %>.js",
  "module": "es/index.js",
  "style": "lib/index.css",
  "typings": "lib/index.d.ts",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "vant-react-cli dev",
    "lint": "vant-react-cli lint",
    "build": "vant-react-cli build",
    "build:site": "vant-react-cli build-site",
    "release": "vant-react-cli release --tag next",
    "release:site": "pnpm build:site && npx gh-pages -d site-dist"
  },
  "author": "",
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.25",
    "@types/react-dom": "^18.0.9",
    "vant-react-cli": "latest",
    "vue": "^3.0.0",
    "sass": "^1.49.7"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@vant"
    ]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
