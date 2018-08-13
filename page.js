var ghpages = require('gh-pages');
 
ghpages.publish('doc/.vuepress/dist', {
    branch: 'gh-pages',
    repo: 'git@github.com:xiaoqiang730730/vue_apicloud.git'
}, function(err) {
    console.log(err);
});