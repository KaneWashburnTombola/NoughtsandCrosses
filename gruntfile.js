(function(){
    'use strict';
    var copyTask = require('./.grunt/copy-task');
    var lessTask = require('./.grunt/less-task');
    var javaTask = require('./.grunt/java-task');
    module.exports = function(grunt) {
        grunt.initConfig({
            pkg:grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint:lessTask,
            less:lessTask,
            jshint:javaTask,
            concat:javaTask
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.registerTask('lessFiles',['lesslint','less']);
        grunt.registerTask('jsFiles',['jshint','concat:concat']);
        grunt.registerTask('default',['copy','lessFiles','jsFiles']);
    };
})();