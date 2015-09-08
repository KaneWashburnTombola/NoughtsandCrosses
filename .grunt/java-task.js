(function(){
    'use strict';
    module.exports={
        concat:{
            cwd:'main-app/app/scripts/',
            src:'**/*.js',
            dest:'.build/main-app/app/scripts/app.js',
            expand:false
        },
        gruntlint:{
            src:'.grunt/**/*.js'
        }
    };
})();
