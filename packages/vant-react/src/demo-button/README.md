# DemoButton 按钮

### 介绍

DemoButton 是一个示例按钮组件

### 引入

```js
import { DemoButton } from 'react-library-demo';
```

## 代码演示

### 基础用法

```tsx
import Button from 'react-library-demo';

function button() {
  return (
    <div>
      <Button>demo-button</Button>
    </div>
  );
}
```

## API

### Props

| 参数     | 说明     | 类型     | 默认值    |
| -------- | -------- | -------- | --------- |
| children | 按钮类型 | _string_ | `primary` |
