/**
 * Created by kane.washburn on 07/09/15.
 */
(function(){
    'use strict';
    module.exports={
        lintCheck: {
            src:['main-app/app/less/*.less'],
            development: {
                options: {
                    paths: ['.build/main-app/app/css/']
                },
                files: {
                    ".build/main-app/app/css/": "main-app/app/less/*.less"
                }
            }
        }
    };
})();