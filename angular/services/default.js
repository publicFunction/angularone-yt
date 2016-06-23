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

    services.service('latestVideoService', ['$http', '$resource', 'Api', '$rootScope',
        function($http, $resource, Api, $rootScope) {

            return {
                getFeaturedVideo : function() {

                },
                getLatestVideos: function() {

                }
            }
            
            /*return $resource(Api.getApiUrl(), {}, {
                content : {method: 'GET', params: {}, isArray: false}
            });*/
        }
    ]);

    services.service('PlaylistsService', ['$http', '$resource', 'Api',
        function($http, $resource, Api) {
            var default_args = Api.getArgs();
            var data = {
                'part' : default_args.part,
                'channelId' : default_args.channel_id,
                'maxResults' : default_args.max_results,
                'key' : Api.config.key.server
            };
            return $resource(Api.getApiUrl()+'playlists', data, {
                playlists: {method:'GET', params: data, isArray: false}
            });
        }
    ]);

    services.service('PlaylistServiceView', ['$http', '$resource', '$state', '$stateParams', 'Api',
        function($http, $resource, $state, $stateParams, Api) {

            var data = {
                'part' : Api.config.args.part,
                'playlistId' : $stateParams.id,
                'maxResults' : Api.config.args.max_results,
                'key' : Api.config.key.server
            };

            return {
                setPlaylistId: function(playlist_id) {
                    data.playlistId = playlist_id;
                },
                getPlaylistContent: function () {
                    return $resource(Api.getApiUrl()+'playlistItems', data, {
                                playlist: {method:'GET', params: data, isArray: false}
                            });
                }
            }
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