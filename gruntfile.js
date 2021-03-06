(function(){
    'use strict';
    var copyTask = require('./.grunt/copy-task');
    var lessTask = require('./.grunt/less-task');
    var javaTask = require('./.grunt/java-task');
    var cleanTask= require('./.grunt/clean-task');

    module.exports = function(grunt) {
        grunt.initConfig({
            pkg:grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint:lessTask,
            less:lessTask,
            jshint:javaTask,
            concat:javaTask,
            clean:cleanTask,
            karma:{
                unit:{
                    options:{
                        logLevel:'WARN',
                        frameworks:['mocha','chai','sinon-chai'],
                        reporters: ['nyan'],
                        port:9876,
                        singleRun:true,
                        browsers:['PhantomJS'],
                        files: [
                            'bower_components/angular/angular.js',
                            'bower_components/angular-mocks/angular-mocks.js',
                            'bower_components/angular-ui-router/release/angular-ui-router.js',
                            'main-app/app/scripts/modules.js',
                            'main-app/app/scripts/**/*.js',
                            'main-app/app/testing/**/*.js'
                        ]
                    }
                }
            },
            watch:{
                javascript: {
                    files: ['main-app/app/scripts/modules.js','main-app/app/scripts/services/**/*.js','main-app/app/scripts/directives/**/*.js','main-app/app/scripts/controllers/**/*.js'],
                    tasks:'jsFiles',
                    spawn:false
                },
                css: {
                    files: 'main-app/app/less/**/*.less',
                    tasks:'lessFiles',
                    spawn:false
                },
                html:{
                    files:'main-app/app/html/**/*.html',
                    tasks:'copy:html',
                    spawn:false
                },
                index:{
                    files:'main-app/app/index.html',
                    tasks:'copy:index',
                    spawn:false
                },
                animation:{
                    files:'main-app/app/animation/animate.css',
                    tasks:'copy:animation',
                    spawn:false
                },
                karma:{
                    files:'main-app/app/testing/**/*.js',
                    tasks:['karma']
                }
            }
        });
        grunt.loadNpmTasks('grunt-express-server');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-karma');
        grunt.registerTask('lessFiles',['lesslint','clean:css','less']);
        grunt.registerTask('jsFiles',['jshint','clean:javascript','concat:concat']);
        grunt.registerTask('test',['jshint','karma','watch']);
        grunt.registerTask('default',['lessFiles','karma','jsFiles','server','copy','watch']);
        var port = 35002;
        grunt.registerTask('server', 'Start a custom web server', function() {
            var server = require('./.grunt/server-task');
            server.listen(port);
            grunt.log.writeln('Listening on port ' + port);
        });
    };
})();