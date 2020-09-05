import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$scNavheight = uni.getSystemInfoSync().statusBarHeight;	// 设备默认导航高度
Vue.prototype.$windowWidth = uni.getSystemInfoSync().safeArea.width;	// 安全区域宽度
Vue.prototype.$windowHeight = uni.getSystemInfoSync().safeArea.height;	// 安全区域宽度

const app = new Vue({
    ...App
})
app.$mount()
