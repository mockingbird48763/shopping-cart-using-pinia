import { createPinia } from 'pinia'
import { presistedstate } from './plugins/persistedstate'
// 創建 pinia 並返回 pinia 實例
const pinia = createPinia()
// 註冊插件
pinia.use(presistedstate)

export default pinia