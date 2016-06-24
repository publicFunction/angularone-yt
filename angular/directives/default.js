(function() {

    angular.module('directives', [])
        .directive('embedIframe', function(Api) {
            /*return {
                restrict: 'E',
                scope : {
                    videoId : '@videoId'
                },
                template : function(elem, attr) {
                    console.log(elem);
                    console.log(attr);


                    return '<iframe height="480" src="{{attr.videoId}}" frameborder="0" allowfullscreen></iframe>'
                }
            };*/
        });

})();