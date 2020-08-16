var Toast = {}
Toast.install = function (Vue) {
    Vue.prototype.$msg = 'Hello World';
}

module.exports = Toast;