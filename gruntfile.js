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
                    src:['']
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.registerTask('default',['copy']);
    };

})();