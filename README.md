# 介绍
使用vue和apicloud可以快速构建一个App。

- [一周一App](http://xiaoqiang730730.github.io/vue_apicloud/oneweekoneapp.html)
- [app上架](http://xiaoqiang730730.github.io/vue_apicloud/appstore.html)

todo
- app推送
- 自动更新(apicloud官方提供了[云修复](https://docs.apicloud.com/Dev-Guide/smartUpdate)，可以整合使用)


# 快速开始

```bash
# 1. 先检查下 Node.js 是否安装成功

$ node -v
v10.0.0

$ npm -v
6.2.0

# 2. 由于众所周知的原因，可以考虑切换源为 taobao 源
$ npm set registry https://registry.npm.taobao.org/

# 3. 全局安装 vue-cli 一般是要 sudo 权限的
$ npm install --global vue-cli

# 4. 全局安装 apicloud-cli, 这个在客户端中调试页面需要用到
$ npm install --global apicloud-cli

# 5. 创建一个基于 vue_apicloud 模板的项目
$ vue init xiaoqiang730730/vue_apicloud my-project

# 6. 安装依赖，走你

$ cd my-project
$ npm install
$ npm run start

# 7. 打包构建

$ npm run package

```

# 默认vue-cli配置更改说明

1. browserslist
由于国内的安卓版本比较颗粒化，低版本的手机flex会有兼容问题，设置browserslist为`> 0.01%`, 差不多接近全部了。

2. 本地打包资源路径问题

3. 请求问题

由于apicloud是本地文件模式，页面发起请求会存在跨域问题，打包之后使用window.api.ajax，而在开发环境可以使用$.ajax、axios等