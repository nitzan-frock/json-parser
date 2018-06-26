'use strict';

angular.
    module('myApp').component('user', {
        templateUrl: 'components/users-list/user/user.template.html',
        bindings: {
            user: '<'
        },
        controller: ['$http', function userController($http) {
            const self = this;

            self.$onInit = function () {
                self.showPosts = false;
            }

            self.$onChanges = function (changes) {
                if (changes.user) {
                    self.user = angular.copy(self.user)
                }
                self.userIndex = self.user.index + 1;
            }

            self.userClicked = function () {
                self.showPosts = !self.showPosts;
            }
        }]
    });