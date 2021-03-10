import LoginButton from './components/LoginButton'

let authLib = {}
authLib.install = function (Vue, options) {
    Vue.component('LoginButton', LoginButton)
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(authLib);
}
export default authLib