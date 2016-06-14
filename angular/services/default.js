(function(){
    'use strict';

    var services = angular.module('services', ['ngResource']);
    
    services.factory('ApiUrl', function() {
        return {
            url: '/'
        }
    });

    services.service('homeService', ['$http', '$resource', 'ApiUrl',
        function($http, $resource, ApiUrl) {
            return $resource(ApiUrl.url, {}, {
                content : {method: 'GET', params: {}, isArray: false}
            });
        }
    ]);

    services.service('dummyService', ['$http', '$resource', 'ApiUrl',
        function($http, $resource, ApiUrl) {
            return $resource(ApiUrl.url+'schools', {}, {
                schools: {method:'GET', params:{}, isArray:true}
            });
        }
    ]);

    services.service('dummyServiceView', ['$http', '$resource', '$state', 'ApiUrl',
        function($http, $resource, $state, ApiUrl) {
            return $resource(ApiUrl.url+'schools/'+$state.params.id, {}, {
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