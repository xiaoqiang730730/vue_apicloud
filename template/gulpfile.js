const gulp = require('gulp');
const replace = require('gulp-replace');
const ip = require('ip');
const exec = require('child_process').exec;
const fs = require('fs-extra');
const archiver = require('archiver');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

let zip = (name)=> {

    let zipPath = './dist.zip';
    //创建一最终打包文件的输出流
    let output = fs.createWriteStream(zipPath);
    
    // //生成archiver对象，打包类型为zip
    let archive = archiver('zip', {
        zlib: { level: 9} //Sets the compression level.
    });

    // 'close' event is fired only when a file descriptor is involved
    output.on('close', function() {
        // console.log(archive.pointer() + ' total bytes');
        // console.log('archiver has been finalized and the output file descriptor has closed.');

        fs.moveSync('./dist.zip', `./dist/${name}.zip`)

    });
    
    // This event is fired when the data source is drained no matter what was the data source.
    // It is not part of this library but rather from the NodeJS Stream API.
    // @see: https://nodejs.org/api/stream.html#stream_event_end
    output.on('end', function() {
        console.log('Data has been drained');
    });
    
    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function(err) {
        if (err.code === 'ENOENT') {
        // log warning
        } else {
        // throw error
        throw err;
        }
    });
    
    // good practice to catch this error explicitly
    archive.on('error', function(err) {
        throw err;
    });
    
    // pipe archive data to the file
    archive.pipe(output);

    // 文件
    archive.directory('dist/', 'widget');

    archive.finalize();
}

// zip('dist/', 'km.zip')

let address = ip.address();
let config = require('./config/index.js');

gulp.task('config', function(cb) {

    let _apiConfig = fs.readFileSync('./_apiConfig.xml', 'utf-8');

    _apiConfig = _apiConfig.replace(/<content(.*)\/>/gim, function() {
        return `<content src="http://${address}:${config.dev.port}/" />`
    })

    fs.writeFileSync('./src/config.xml', _apiConfig);

});

gulp.task('devwp', function(cb) {

    fs.removeSync('./dist');
    
    require('./build/webpack.dev.conf.js').then(config=> {
        
        let entry = config.entry;

        Object.keys(entry).forEach(function (name) {
            config.entry[name] = [`webpack-dev-server/client?http://${address}:${config.devServer.port}/`,'webpack/hot/only-dev-server'].concat(config.entry[name])
        })

        // config.entry.app.unshift(`webpack-dev-server/client?http:${address}//:${config.devServer.port}/`);
        
        let compiler = webpack(config);

        config.devServer.progress = true;
        // config.devServer.inline = true;
        new WebpackDevServer(compiler, config.devServer).listen(config.devServer.port, '0.0.0.0', (err) => {
            if (err) {
                throw err;
            }
            
        });

        compiler.plugin('done', stats => {
            console.log('\n编译成功，请刷新浏览器');
            console.log(`Listening at ${address}:` + config.devServer.port);
        });

    });
    
})


gulp.task('package', function(cb) {
    fs.removeSync('./dist');
    require('./build/package.js')().then(()=> {
        let file = fs.readFileSync('./_apiConfig.xml', 'utf-8');
        fs.writeFileSync('./dist/config.xml', file);
        zip('app');
        console.log('打包成功，在dist目录下面app.zip');
    }, ()=> {
        console.log('fail');
    })
})

gulp.task('dev', ['config', 'devwp']);