import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import 'taro-ui/dist/style/index.scss';
import dva from './dva';
import models from './models';
import * as user from './utils/user';
import {set as setGlobalData } from './global_data';

import Index from './pages/index/index'

// import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// const store = configStore()

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    console.log('系统出错了!');
    // dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/ucenter/index/index',
      'pages/ucenter/address/address',
      'pages/ucenter/addressAdd/addressAdd',
      'pages/auth/login/login',
      'pages/checkout/checkout',
      'pages/auth/accountLogin/accountLogin',
      'pages/goods/goods',
      'pages/search/search',
      'pages/catalog/catalog',
      'pages/cart/cart',
      'pages/auth/register/register',
      'pages/ucenter/order/order',
      'pages/ucenter/orderDetail/orderDetail',
      'pages/ucenter/aftersaleList/aftersaleList',
      'pages/ucenter/couponList/couponList',
      'pages/groupon/myGroupon/myGroupon',
      'pages/ucenter/collect/collect',
      'pages/ucenter/footprint/footprint',
      'pages/ucenter/couponSelect/couponSelect',
      'pages/payResult/payResult',
      'pages/category/category',
      'pages/coupon/coupon',
      'pages/auth/reset/reset'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "backgroundColor": "#fafafa",
      "borderStyle": "white",
      "selectedColor": "#AB956D",
      "color": "#666",
      "list": [{
        "pagePath": "pages/index/index",
        "iconPath": './static/images/home.png',
        "selectedIconPath": './static/images/home@selected.png',
        "text": "首页"
      }, {
        "pagePath": "pages/catalog/catalog",
        "iconPath": './static/images/category.png',
        "selectedIconPath": './static/images/category@selected.png',
        "text": "分类"
      }, {
        "pagePath": "pages/cart/cart",
        "iconPath": './static/images/cart.png',
        "selectedIconPath": './static/images/cart@selected.png',
        "text": "购物车"
      }, {
        "pagePath": 'pages/ucenter/index/index',
        "iconPath": './static/images/my.png',
        "selectedIconPath": './static/images/my@selected.png',
        "text": "个人"
      }]
    },
    subpackages: [{
      root: "packages",
      name: "pack2",
      pages: [
        'pages/demo/index'
      ],
    }],
    "networkTimeout": {
      "request": 10000,
      "downloadFile": 10000
    },
    "debug": true,
  }

  componentWillMount() {
    this.update();
    let arr = [{
          "background.customImages":["/Users/xiongxiong/Pictures/beijing2.jpg"],
          "background.useDefault": false,
          "background.useFront": false,
          "background.style": {
              "opacity": 0.2,
              "background-size": "cover"
          },
          "diffEditor.ignoreTrimWhitespace": false,
          "files.autoSave": "onFocusChange",
          "editor.fontSize": 16,
          "gitlens.advanced.messages": {
              "suppressShowKeyBindingsNotice": true
          },
          "open-in-browser.default": "chrome",
          "projectManager.showProjectNameInStatusBar": true,
          "vetur.format.defaultFormatter.html": "js-beautify-html",
          "breadcrumbs.enabled": true,
          "vetur.format.defaultFormatter.js": "none",
          "vetur.format.options.tabSize": 2,
          "gitlens.views.fileHistory.enabled": true,
          "gitlens.views.lineHistory.enabled": true,
          "jumpToAliasFile.alias": {
              // console
              "won": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/won-service",
              "U": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/core/utils/functions",
              "C": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/core/utils/C",
              "Bus": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/core/utils/Bus",
              "core": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/core",
              "assets": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/assets",
              "won-mixins": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/won-service/_mixins",
              "won-biz": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/won-service/biz",
              "won-comp": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/won-service/_components",
              "won-config": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/won-service/_config",
              "won-json": "/Users/huhu/hu/leapv3/leapcloud_console_v2/src/won-service/_json",
              // h5
              "containers": "/Users/huhu/leapH5/leapcloud_h5/src/js/redux/containers",
              "components": "/Users/huhu/leapH5/leapcloud_h5/src/components",
              "views": "/Users/huhu/leapH5/leapcloud_h5/src/js/f7/views",
              "pages": "/Users/huhu/leapH5/leapcloud_h5/src/js/f7/pages",
              "actions": "/Users/huhu/leapH5/leapcloud_h5/src/js/reflux/actions",
              "utils": "/Users/huhu/leapH5/leapcloud_h5/src/utils",
              "stores": "/Users/huhu/leapH5/leapcloud_h5/src/js/reflux/stores",
              "config": "/Users/huhu/leapH5/leapcloud_h5/src/config",
              "vendor": "/Users/huhu/leapH5/leapcloud_h5/src/vendor",
              "test": "/Users/huhu/leapH5/leapcloud_h5/src/test",
              "styles": "/Users/huhu/leapH5/leapcloud_h5/src/styles",
              "common": "/Users/huhu/leapH5/leapcloud_h5/src/js/common",
              "modules": "/Users/huhu/leapH5/leapcloud_h5/src/js/modules",
              "store2": "/Users/huhu/leapH5/leapcloud_h5/src/vendor/store2",
              "maxleap-im": "/Users/huhu/leapH5/leapcloud_h5/src/vendor/maxleap-im",
              "hybrid": "/Users/huhu/leapH5/leapcloud_h5/src/hybrid",
              "business": "/Users/huhu/leapH5/leapcloud_h5/src/business",
              "store": "/Users/huhu/leapH5/leapcloud_h5/src/store",
              "@viewComponents": "/Users/huhu/leapH5/leapcloud_h5/src/baseViewComponents",
              "@baseComponents": "/Users/huhu/leapH5/leapcloud_h5/src/baseComponents",
              "@businessComponents": "/Users/huhu/leapH5/leapcloud_h5/src/businessComponents",
              "@businessPages": "/Users/huhu/leapH5/leapcloud_h5/src/businessPages",
              "@businessReduxAction": "/Users/huhu/leapH5/leapcloud_h5/src/businessReduxAction",
              "@businessReduxReducers": "/Users/huhu/leapH5/leapcloud_h5/src/businessReduxReducers"
          },
          "terminal.integrated.shell.osx": "/bin/zsh",
          "debug.node.autoAttach": "off",
          "editor.tabSize": 2,
          "[html]": {
              "editor.defaultFormatter": "HookyQR.beautify"
          },
          "[javascript]": {
              "editor.defaultFormatter": "vscode.typescript-language-features"
          },
          "[json]": {
              "editor.defaultFormatter": "HookyQR.beautify"
          },
          "window.zoomLevel": 1,
      }]
    let newArr = Array(2600).fill(0).reduce((r)  => {
      return r.concat(arr)
    }, [])  
    console.time()
    Taro.setStorageSync('key', newArr)
    console.timeEnd()
    console.time()
    Taro.getStorageSync('key');
    console.timeEnd()  
  }

  componentDidMount(){
   
    
  }

  update = () => {
    if(process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function() {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
    }
  }

  componentDidShow () {
    user.checkLogin().then(res => {
      setGlobalData('hasLogin', true);
    }).catch(() => {
      setGlobalData('hasLogin', false);
    });
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
