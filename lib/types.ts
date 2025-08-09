// 语言配置类型
export interface Language {
  label: string;
  value: string;
}

// Translate 组件的 props 类型
export interface TranslateProps {
  languages: Language[];
}

// 翻译初始化配置类型
export interface TranslateConfig {
  /**
   * 是否显示默认的语言选择标签
   * @default false
   */
  showSelectLanguageTag?: boolean;

  /**
   * 自动判断本地语言
   * @default false
   */
  autoDiscriminateLocalLanguage?: boolean;
}
