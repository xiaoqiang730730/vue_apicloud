# 介绍
使用vue和apicloud可以快速构建一个App。

# 快速开始

# 1. 先检查下 Node.js 是否安装成功
$ node -v
v10.0.0

$ npm -v
6.2.0

# 2. 由于众所周知的原因，可以考虑切换源为 taobao 源
$ npm set registry https://registry.npm.taobao.org/

# 3. 全局安装 vue-cli
# 一般是要 sudo 权限的
$ npm install --global vue-cli@2.9

# 4. 全局安装 apicloud-cli
$ npm install --global apicloud-cli

# 5. 创建一个基于 vue_apicloud 模板的项目
$ vue init xiaoqiang730730/vue_apicloud my-project

# 6. 安装依赖，走你
$ cd my-project
$ npm install
$ npm run start


# 更改说明

1. browserslist
由于国内的安卓版本比较颗粒化，低版本的手机flex会有兼容问题，设置browserslist为`> 0.01%`, 差不多接近全部了。

2. 本地打包资源路径问题

3. 请求问题