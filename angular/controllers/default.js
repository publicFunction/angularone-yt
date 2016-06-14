(function(){

    var controllers = angular.module('controllers', []);

    controllers.controller('MenuController', [function() {
        this.option = 'home';
        this.setMenu = function(setMenu) {
            this.option = setMenu;
        };
        this.getMenu = function(getMenu) {
            return this.option === getMenu;
        };
    }]);

    controllers.controller('DefaultController', ['$scope', '$state', '$http', 'homeService',
        function ($scope, $state, $http, homeService) {
            console.log("Check Login Status");
            $scope.content = homeService.content();
            //$scope.schools = {};
            //$scope.schools = dummyService.schools();

            //$scope.viewSchool = function($id) {
            //    $state.transitionTo('schools-detail', {id : $id});
            //}

        }
    ]);

    controllers.controller('SchoolController', ['$scope', '$state', '$http', 'dummyService',
        function ($scope, $state, $http, dummyService) {

            $scope.schools = {};
            $scope.schools = dummyService.schools();

            $scope.viewSchool = function($id) {
                $state.transitionTo('schools-detail', {id : $id});
            }

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