(function(){

    var application = angular.module('boilerplate', ['controllers', 'services', 'directives', 'ui.router', 'ngCookies']);
    angular.module('controllers', []);
    angular.module('services', []);
    angular.module('directives', []);

    /* Routes */
    application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state('/', {
                url         : "",
                templateUrl : "/templates/home.html",
                controller  : 'DefaultController'
            })
            .state('playlists', {
                url         : "/playlists",
                templateUrl : "/templates/playlists/index.html",
                controller  : 'PlaylistsController'
            })
            .state('playlist-detail', {
                url         : "/playlist/:id",
                templateUrl : "/templates/playlists/detail.html",
                controller  : 'PlaylistViewController'
            })
            .state('about', {
                url         : "/about",
                templateUrl : "/templates/about.html",
                controller  : 'AboutController'
            })
            .state('live', {
                url         : "/live",
                templateUrl : "/templates/live/index.html",
                controller  : 'LiveController'
            })
            .state('contact', {
                url         : "/contact",
                templateUrl : "/templates/contact.html",
                controller  : 'ContactController'
            })
            .state('dropdown-action', {
                url         : "/dropdown/action",
                templateUrl : "/templates/dropdown/action.html",
                controller  : 'ActionController'
            })
            .state('dropdown-other-action', {
                url         : "/dropdown/other-action",
                templateUrl : "/templates/dropdown/other-action.html",
                controller  : 'ActionController'
            });
    }]).run(
        function ($rootScope, $templateCache) {
            $rootScope.$on('$viewContentLoaded', function() {
                $templateCache.removeAll();
            });
            $.getJSON('/angular/config.json', function(response) {
                $rootScope.config = response;
            });
        }
    );
})();

