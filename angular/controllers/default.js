(function(){

    var controllers = angular.module('controllers', []);

    controllers.controller('MenuController', ['$scope', '$state', function($scope, $state) {
        this.setMenu = function(menu) {
            localStorage.setItem('menu', menu);
        };
        this.getMenu = function(menu) {
            if(localStorage.getItem('menu') == menu) {
                return true;
            }
        };
    }]);

    controllers.controller('DefaultController', ['$scope', '$state', '$http', '$rootScope', 'latestVideoService',
        function ($scope, $state, $http, $rootScope, latestVideoService) {

            $scope.featured = {};
            $scope.featured = latestVideoService.getFeaturedVideo();

            $scope.latest = {};
            $scope.latest = latestVideoService.getLatestVideos();

            $scope.activity = {};
            $scope.activity = latestVideoService.getLatestActivity();

        }
    ]);

    controllers.controller('LiveController', ['$scope', '$state', '$http', '$rootScope',
        function ($scope, $state, $http, $rootScope) {

        }
    ]);

    controllers.controller('PlaylistsController', ['$scope', '$state', '$http', 'PlaylistsService',
        function ($scope, $state, $http, PlaylistsService) {
            $scope.playlists = {};
            $scope.playlists = PlaylistsService.playlists();
        }
    ]);

    controllers.controller('PlaylistViewController',
        ['$scope', '$state', '$stateParams', '$http', 'PlaylistServiceView',
        function ($scope, $state, $stateParams, $http, PlaylistServiceView) {

            PlaylistServiceView.setPlaylistId($stateParams.id);

            $scope.playlist = {};
            $scope.playlist = PlaylistServiceView.getPlaylistContent().playlist();

        }
    ]);

    controllers.controller('AboutController', function($scope, $state) {

    });

    controllers.controller('ContactController', function($scope, $state) {

    });

    controllers.controller('ActionController', function($scope, $state) {

    });

})();