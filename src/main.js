import AuthButton from './compoments/AuthButton'

let authLib1 = {}
authLib1.install = function (Vue, options) {
    Vue.component('AuthButton', AuthButton)
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(authLib1);
}
export default authLib1