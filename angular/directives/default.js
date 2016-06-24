(function() {

    angular.module('directives', [])
        .directive('embedIframe', function() {
            console.debug("CALLED");
            return {
                //template : "<iframe height='480' src='{{Api.getEmbedUrl(video.id.videoId)}}' frameborder='0' allowfullscreen></iframe>"
                template : "Hello World!",
                controller: DefaultController
            };
        });

})();