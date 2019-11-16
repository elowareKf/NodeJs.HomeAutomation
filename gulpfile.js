var gulpfile = require('gulp'),
    nodemon = require('gulp-nodemon');

gulpfile.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env:{
            PORT: 3000
        },
        ignore:['./node_modules/**']
    })
        .on('restart', function(){
            console.log('Restarting')
        });
})
