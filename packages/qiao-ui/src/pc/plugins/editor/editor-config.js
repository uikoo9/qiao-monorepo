// configs
import toolbarConfig from './config/toolbar-config.js';
import menuConfig from './config/menu-config.js';

/**
 * getToolbarConfig
 * @returns toolbarConfig
 */
export const getToolbarConfig = () => {
  return toolbarConfig;
};

/**
 * getEditorConfig
 * @returns config
 */
export const getEditorConfig = (needUploadConfig, uploadConfig) => {
  const config = Object.assign({}, menuConfig);

  if (needUploadConfig) {
    if (!uploadConfig) {
      console.log(
        'need upload config, see: https://www.wangeditor.com/v5/menu-config.html#%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87',
      );
    } else {
      config.MENU_CONF.uploadImage = uploadConfig;
    }
  }

  return config;
};
