import { createApp } from 'vue'
// i18n （PS：导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'
import App from './App.vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
// 导入 svgIcon
import installIcons from '@/icons'
// 导入全局样式
import './style/index.css'
const app = createApp(App)
installIcons(app)
app.use(store).use(ElementPlus).use(router).use(i18n).mount('#app')
