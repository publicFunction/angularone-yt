(function() {

    angular.module('directives', [])
        .directive('getLiveStatus', function($interval) {

            return {
                element: 'A',
                template : 'Live<span class="live-{{is_live}}"></span>',
                link: function(scope, elem, attr) {
                    scope.is_live = false;

                    $interval(function() {
                        console.log("Check Live Status");
                        scope.is_live = false;
                    }, 2000);

                }
            }
        });

})();