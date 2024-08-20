import { SpaCandle } from "@icon-park/vue-next";
import { ElMessage } from "element-plus";
export const msg = () => {
    const message = "本站主域名worst.love正在备案中，为您带来不好的体验深感抱歉！";
  
    ElMessage({
      message: message,
    });
  };

export const msgvpn = () => {
  const message = "检测到您的IP位于中国大陆之外，为了保障您的体验请关闭VPN"
  ElMessage({
    message: message,
  });
};