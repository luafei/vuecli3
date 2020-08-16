import Vue from 'vue';
// 全局注册组件
Vue.directive('focus', {
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    },
    bind: function () {

    }
})
