(function(){
    'use strict';

    var services = angular.module('services', ['ngResource']);
    
    services.factory('Api', function($rootScope) {
        return {
            'config' : $rootScope.config,
            getApiUrl : function () {
                return $rootScope.config.url;
            },
            getArgs : function () {
                return $rootScope.config.args;
            }
        };
    });

    services.service('homeService', ['$http', '$resource', 'Api', '$rootScope',
        function($http, $resource, Api, $rootScope) {
            console.debug(Api.getArgs());
            return $resource(Api.getApiUrl(), {}, {
                content : {method: 'GET', params: {}, isArray: false}
            });
        }
    ]);

    services.service('PlaylistsService', ['$http', '$resource', 'Api',
        function($http, $resource, Api) {
            return $resource(Api.getApiUrl()+'schools', {}, {
                schools: {method:'GET', params:{}, isArray:true}
            });
        }
    ]);

    services.service('dummyServiceView', ['$http', '$resource', '$state', 'Api',
        function($http, $resource, $state, ApiUrl) {
            return $resource(Api.getApiUrl()+'schools/'+$state.params.id, {}, {
                school: {method:'GET', params:{}, isArray: false}
            });
        }
    ]);

    services.service('setMenu', [
        function() {
            var option = 'home';
            return {
                getMenu: function() {
                    return option;
                },
                setMenu: function() {
                    return option;
                }
            }
        }
    ]);

})();