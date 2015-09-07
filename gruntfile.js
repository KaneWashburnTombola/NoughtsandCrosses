/**
 * Created by kane.washburn on 07/09/15.
 */
(function(){
    'use strict';
    module.exports = function(grunt) {
        grunt.initConfig({
            pkg:grunt.file.readJSON('package.json'),
            copy:{
                mainappimages:{
                    cwd:'',
                    src:['main-app/app/images/batman.jpg'],
                    dest:'.build/',
                    expand:true
                },
                mainappsounds:{
                    cwd:'',
                    src:['main-app/app/sounds/ready aim fire.mp3'],
                    dest:'.build/',
                    expand:true
                },
                html:{
                    cwd:'',
                    src:['main-app/app/index.html'],
                    dest:'.build/',
                    expand:true
                },
                bower:{
                    cwd:'',
                    src:['bower_components/**/*.*'],
                    dest:'.build/main-app/app/thirdparty/',
                    expand:true
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.registerTask('default',['copy']);
    };

})();