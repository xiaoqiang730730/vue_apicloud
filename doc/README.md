---
title: 介绍
lang: zh-cn
---

# vue_apicloud 构建 文档

使用vue和apicloud可以快速构建一个App

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