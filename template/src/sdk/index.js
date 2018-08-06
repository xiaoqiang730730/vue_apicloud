export default {
    isApp: navigator.userAgent.indexOf('vue_apicloud') > 0 ? true : false,
    isAndroid: /android/gi.test(navigator.appVersion.toLocaleLowerCase())
}