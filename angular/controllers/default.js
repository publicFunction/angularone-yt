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

    controllers.controller('DefaultController', ['$scope', '$state', '$http', '$rootScope', 'homeService',
        function ($scope, $state, $http, $rootScope, homeService) {
            $scope.content = homeService.content();
            //$scope.videos = {};
            //$scope.videos = videosService.videos();

            //$scope.viewSchool = function($id) {
            //    $state.transitionTo('schools-detail', {id : $id});
            //}

        }
    ]);

    controllers.controller('LiveController', ['$scope', '$state', '$http', '$rootScope',
        function ($scope, $state, $http, $rootScope) {

        }
    ]);

    controllers.controller('PlaylistsController', ['$scope', '$state', '$http', 'PlaylistsService',
        function ($scope, $state, $http, PlaylistsService) {

            /*$scope.schools = {};
            $scope.schools = dummyService.schools();

            $scope.viewSchool = function($id) {
                $state.transitionTo('schools-detail', {id : $id});
            }*/

        }
    ]);

    controllers.controller('SchoolViewController',
        ['$scope', '$state', '$stateParams', '$http', 'dummyServiceView', 'setMenu',
        function ($scope, $state, $stateParams, $http, dummyServiceView, setMenu) {
            $scope.school = {};
            $scope.school.id = $stateParams.id;
            setMenu.setMenu('school');
            $scope.school = dummyServiceView.school();

        }
    ]);

    controllers.controller('AboutController', function($scope, $state) {

    });

    controllers.controller('ContactController', function($scope, $state) {

    });

    controllers.controller('ActionController', function($scope, $state) {

    });

})();