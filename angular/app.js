(function(){

    var application = angular.module('boilerplate', ['controllers', 'services', 'directives', 'ui.router', 'ngCookies']);
    angular.module('controllers', []);
    angular.module('services', []);
    angular.module('directives', []);

    application.constant('KEY', {'server' : 'p3r]pojepjprt]r9t]04tu', 'browser' : ''});

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
                url         : "/playlists/:id",
                templateUrl : "/templates/playlists/detail.html",
                controller  : 'PlaylistsViewController'
            })
            .state('/about', {
                url         : "/about",
                templateUrl : "/templates/about.html",
                controller  : 'AboutController'
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
    }]);

})();

