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

    controllers.controller('DefaultController', ['$scope', '$state', '$http', '$rootScope', 'latestVideoService', 'Api',
        function ($scope, $state, $http, $rootScope, latestVideoService, Api) {

            $scope.featured = {};
            $scope.featured = latestVideoService.getFeaturedVideo().collection();

            $scope.latest = {};
            $scope.latest = latestVideoService.getLatestVideos().collection();

            $scope.activity = {};
            $scope.activities = latestVideoService.getLatestActivity().activities();

            $scope.getIframeSrc = function (videoId) {
                return latestVideoService.getEmbedUrl()+videoId;
            }

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

            $scope.rememberPlayListTitle = function (title) {
                localStorage.setItem('playlist_title', title);
            }
        }
    ]);

    controllers.controller('PlaylistViewController',
        ['$scope', '$state', '$stateParams', '$http', 'PlaylistServiceView',
        function ($scope, $state, $stateParams, $http, PlaylistServiceView) {

            PlaylistServiceView.setPlaylistId($stateParams.id);

            $scope.playlist = {};
            $scope.playlist = PlaylistServiceView.getPlaylistContent().playlist();

            $scope.playlist_title = {};
            if(localStorage.getItem('menu')) {
                $scope.playlist_title = localStorage.getItem('playlist_title')+' Playlist';
            }

        }
    ]);

    controllers.controller('AboutController', function($scope, $state) {

    });

    controllers.controller('ContactController', function($scope, $state) {

    });

    controllers.controller('ActionController', function($scope, $state) {

    });

})();