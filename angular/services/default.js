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
            },
            getEmbedUrl : function() {
                return $rootScope.config.embed_url;
            }
        };
    });

    services.service('latestVideoService', ['$http', '$resource', 'Api', '$rootScope',
        function($http, $resource, Api, $rootScope) {
            var api_args = Api.getArgs();
            return {
                getEmbedUrl : function() {
                    return Api.getEmbedUrl();
                },
                getFeaturedVideo : function() {
                    var params = {
                        "part" : api_args.part,
                        "maxResults" : 1,
                        "channelId" : api_args.channel_id,
                        "order" : "date",
                        "type" : "video",
                        "key" : Api.config.key.browser
                    };
                    return $resource(Api.getApiUrl()+'search', params, {
                        collection : {method: 'GET', params: params, isArray: false}
                    });
                    //https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRMokxzufyesqkXCL8IQxMA&maxResults=5&order=date&type=video&key={YOUR_API_KEY}
                },
                getLatestVideos: function() {
                    var params = {
                        "part" : api_args.part,
                        "maxResults" : 5,
                        "channelId" : api_args.channel_id,
                        "order" : "date",
                        "type" : "video",
                        "key" : Api.config.key.browser
                    };
                    return $resource(Api.getApiUrl()+'search', params, {
                        collection : {method: 'GET', params: params, isArray: false}
                    });
                    //https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRMokxzufyesqkXCL8IQxMA&maxResults=10&order=date&type=video&key={YOUR_API_KEY}
                },
                getLatestActivity: function() {
                    var params = {
                        "part" : api_args.part,
                        "maxResults" : 5,
                        "channelId" : api_args.channel_id,
                        "key" : Api.config.key.browser
                    };
                    return $resource(Api.getApiUrl()+'activities', params, {
                        activities : {method: 'GET', params: params, isArray: false}
                    });
                    //https://www.googleapis.com/youtube/v3/activities?part=snippet&maxResults=20&mine=true&key={YOUR_API_KEY}
                }
            };

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