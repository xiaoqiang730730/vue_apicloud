var ghpages = require('gh-pages');
 
ghpages.publish('./doc/.vuepress/dist', function(err) {
    console.log(err);
});