import Vue from 'vue'
import App from './App.vue'
// store
import store from './store'
// router
import router from '@/router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

console.log('process.env', process.env);
Vue.prototype.aa = {id: 1, name: 'edwin'};

import Toast from './plugins/toast';
Vue.use(Toast);

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

// vue filter
Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})



new Vue({
    store,
    router,
    created() {
        console.log('main.js 组织钩子被调用')
    },
    render: h => h(App)
}).$mount('#app')
