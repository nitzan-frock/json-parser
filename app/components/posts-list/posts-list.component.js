'use strict';

angular.
    module('myApp').component('postsList', {
        templateUrl: 'components/posts-list/posts-list.template.html',
        bindings: {
            userindex: '<',
            showPosts: '<'
        },
        controller: ['$http', function postsListController($http) {
            let self = this;

            self.$onInit = function () {
                self.postLimit = 2;
            }

            self.$onChanges = function (changes) {
                if (changes.showPosts) {
                    self.showPosts = angular.copy(self.showPosts);
                }
                if (self.showPosts) {
                    self._getPosts();
                } else {
                    self.postLimit = 2;
                }
            }

            self._getPosts = function () {
                $http.get('/assets/posts/posts-user' + self.userindex + '.json').then(response => {
                    self.posts = response.data;
                    self.postsLoaded = 2;
                });
            }


            self.loadPosts = function () {
                self.postLimit += 1;
            }
        }]
    });