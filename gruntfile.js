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
            watch:{
                javascript: {
                    files: 'main-app/app/scripts/**/*.js',
                    tasks:'jsFiles',
                    spawn:false
                },
                css: {
                    files: 'main-app/app/less/**/*.less',
                    tasks:'lessFiles',
                    spawn:false
                }
            }

        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.registerTask('lessFiles',['lesslint','clean:css','less','watch:css']);
        grunt.registerTask('jsFiles',['jshint','clean:javascript','concat:concat','watch:javascript']);
        grunt.registerTask('default',['copy','lessFiles','jsFiles']);
    };
})();