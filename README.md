# translate-react

一个基于 `i18n-jsautotranslate` 的 React 翻译组件包，提供简洁易用的多语言切换功能。

## 特性

- 🌐 支持多种语言自动翻译
- 🎨 现代化的下拉选择器设计
- 🚀 轻量级，零配置开箱即用
- 🛡️ TypeScript 支持
- 🔄 自动监听 DOM 变化并翻译
- ⚡ 基于 Edge 翻译服务，快速可靠

## 安装

```bash
npm install translate-react i18n-jsautotranslate
# 或者
yarn add translate-react i18n-jsautotranslate
# 或者
pnpm add translate-react i18n-jsautotranslate
```

## 快速开始

### 基本使用

```tsx
import { Translate, initTranslate } from "@leimingyun/translate-react";

const languages = [
  { label: "简体中文", value: "chinese_simplified" },
  { label: "English", value: "english" },
  { label: "日本語", value: "japanese" },
  { label: "한국어", value: "korean" },
];

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>这是一个多语言网站示例。</p>

      {/* 翻译组件 */}
      <Translate languages={languages} />
    </div>
  );
}

export default App;
```

### 手动切换语言

```tsx
import translate from "i18n-jsautotranslate";

const handleLanguageChange = (language: string) => {
  translate.changeLanguage(language);
};

// 在按钮点击事件中使用
<button onClick={() => handleLanguageChange("english")}>
  Switch to English
</button>;
```

## API 参考

### Translate 组件

一个下拉式的语言切换组件。

#### Props

| 属性名    | 类型         | 必填 | 描述           |
| --------- | ------------ | ---- | -------------- |
| languages | `Language[]` | ✅   | 支持的语言列表 |

#### Language 类型

```typescript
interface Language {
  label: string; // 显示的语言名称，如 "简体中文"
  value: string; // 语言代码，如 "chinese_simplified"
}
```

## 支持的语言

| 语言代码              | 语言名称 |
| --------------------- | -------- |
| `chinese_simplified`  | 简体中文 |
| `chinese_traditional` | 繁体中文 |
| `english`             | 英语     |
| `japanese`            | 日语     |
| `korean`              | 韩语     |
| `french`              | 法语     |
| `german`              | 德语     |
| `spanish`             | 西班牙语 |
| `russian`             | 俄语     |
| `arabic`              | 阿拉伯语 |

## 样式自定义

组件使用 CSS Modules，你可以通过以下方式自定义样式：

```css
/* 覆盖默认样式 */
.translate {
  /* 你的样式 */
}

.translateDropdown {
  /* 下拉菜单样式 */
}
```

## 注意事项

1. **单次初始化**：确保在整个应用中只调用一次 `initTranslate()`
2. **语言选择标签**：本组件会自动隐藏 `i18n-jsautotranslate` 的默认语言选择标签
3. **DOM 监听**：组件会自动启动 DOM 变化监听，动态添加的内容也会被翻译

## 许可证

MIT
