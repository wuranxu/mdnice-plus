import {createFromIconfontCN} from '@ant-design/icons';
import CONFIG from "@/consts/config";

const IconFont = createFromIconfontCN({
  scriptUrl: CONFIG.ICON_URL, // 在 iconfont.cn 上生成
});

export default IconFont;
