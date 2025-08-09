import { Translate } from "../lib";
import "./App.css";

const languages = [
  { label: "简体中文", value: "chinese_simplified" },
  { label: "English", value: "english" },
  { label: "日本語", value: "japanese" },
  { label: "한국어", value: "korean" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World! 你好，世界！</h1>
        <p>这是一个多语言网站示例。This is a multilingual website example.</p>
        <div style={{ margin: "20px 0" }}>
          <Translate languages={languages} />
        </div>
        <div>
          <p>欢迎使用 translate-react 组件库！</p>
          <p>Welcome to translate-react component library!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
