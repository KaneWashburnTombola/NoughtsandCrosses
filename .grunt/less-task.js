/**
 * Created by kane.washburn on 07/09/15.
 */
(function(){
    'use strict';
    module.exports={
        lintCheck: {
            src:'**/*.less',
            cwd:'main-app/app/less/',
            dest:'.build/main-app/app/css/',
            expand:true,
            ext:'.css'
        }
    };
})();