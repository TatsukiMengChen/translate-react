// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import translate from "i18n-jsautotranslate";

let isInitialized = false;

/**
 * 统一的翻译初始化函数
 * 避免重复初始化和配置不一致的问题
 */
export const initTranslate = () => {
  if (isInitialized) {
    return;
  }

  // 使用客户端边缘翻译服务
  translate.service.use("client.edge");
  // 启用URL参数控制语言
  translate.language.setUrlParamControl();
  // 开始监听语言变化
  translate.listener.start();
  // 隐藏语言选择标签（这是关键！）
  translate.selectLanguageTag.show = false;
  // 执行翻译
  translate.execute();

  isInitialized = true;
};

export default initTranslate;
