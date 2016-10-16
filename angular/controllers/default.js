(function(){

    var controllers = angular.module('controllers', []);

    controllers.controller('MenuController', ['$scope', '$state', function($scope, $state) {
        $scope.setMenu = function(menu) {
            localStorage.setItem('menu', menu);
        };
        $scope.getMenu = function(menu) {
            if(localStorage.getItem('menu') == menu) {
                return true;
            }
        };
    }]);

    controllers.controller('DefaultController', ['$scope', '$state', '$http', '$rootScope', 'latestVideoService', 'Api', 'ModalService',
        function ($scope, $state, $http, $rootScope, latestVideoService, Api, ModalService) {

            $scope.featured = {};
            $scope.featured = latestVideoService.getFeaturedVideo().collection();

            $scope.latest = {};
            $scope.latest = latestVideoService.getLatestVideos().collection();

            $scope.activity = {};
            $scope.activities = latestVideoService.getLatestActivity().activities();

            $scope.getIframeSrc = function (videoId) {
                return latestVideoService.getEmbedUrl()+videoId;
            };

            $scope.viewVideo = function(video) {
                ModalService.showModal({
                    templateUrl : '/templates/videos/detail.html',
                    controller: 'VideoController',
                    inputs: {
                        video : video
                    }
                }).then(function (modal) {
                    
                });
            }
        }
    ]);

    controllers.controller('VideoController', ['$scope', '$state', '$http', '$rootScope', 'video', 'close',
        function ($scope, $state, $http, $rootScope, video, close) {

            $scope.close = close;
            
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
            if(localStorage.getItem('playlist_title')) {
                $scope.playlistTitle = localStorage.getItem('playlist_title')+' Playlist';
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