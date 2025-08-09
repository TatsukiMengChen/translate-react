import { useState, useEffect } from "react";
// @ts-expect-error - i18n-jsautotranslate 没有类型声明
import translate from "i18n-jsautotranslate";
import { initTranslate } from "../../utils/translateInit";
import ArrowIcon from "./ArrowIcon";
import TranslateIcon from "./TranslateIcon";
import styles from "./index.module.css";

// 使用统一的初始化函数
initTranslate();

import type { TranslateProps } from "../../types";

const Translate = ({ languages }: TranslateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // 获取当前语言
  const currentLanguage = translate.language.getCurrent();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      // 延迟隐藏，等待动画完成
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200); // 与CSS动画时间一致
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSelect = (lang: { label: string; value: string }) => {
    setIsOpen(false);
    translate.changeLanguage(lang.value);
  };

  return (
    <div
      className={`${styles.translate} ignore`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className={styles.translateTrigger}>
        <TranslateIcon /> <ArrowIcon />
      </span>

      {isVisible && languages && languages.length > 0 && (
        <div
          className={`${styles.translateDropdown} ${
            isAnimating ? styles.fadeIn : styles.fadeOut
          }`}
        >
          {languages.map((lang) => {
            const isCurrentLanguage = lang.value === currentLanguage;
            return (
              <div
                key={lang.value}
                className={`${styles.translateOption} ${
                  isCurrentLanguage ? styles.translateOptionCurrent : ""
                }`}
                onClick={() => handleSelect(lang)}
              >
                {lang.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Translate;
