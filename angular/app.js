(function(){

    var app_config;
    var application = angular.module('boilerplate', ['controllers', 'services', 'directives', 'ngCookies', 'ui.router', 'angularModalService']);

    /* Routes */
    application.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

        $urlRouterProvider.otherwise('/');

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://www.youtube.com/**']);

        $stateProvider
            .state('home', {
                url         : "/",
                templateUrl : "/templates/home.html",
                controller  : 'DefaultController'
            })
            .state('playlists', {
                url         : "/playlists",
                templateUrl : "/templates/playlists/index.html",
                controller  : 'PlaylistsController'
            })
            .state('playlist-details', {
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
        })
        .run(
        function ($rootScope, $templateCache) {
            $rootScope.$on('$viewContentLoaded', function() {
                $templateCache.removeAll();
            });
            $.getJSON('/angular/config.json', function(response) {
                var jsonString = JSON.stringify(response[0]);
                app_config = JSON.parse(jsonString);
                $rootScope.config = app_config;
            });
        });
})();

