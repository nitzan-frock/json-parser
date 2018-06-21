'use strict';

angular.
    module('myApp').component('usersList', {
        templateUrl: 'components/users-list/users-list.template.html',
        controller: ['$http', function usersListController($http) {
            const self = this;

            $http.get('assets/users/users.json').then(response => {
                self.users = response.data;
            });
        }]
    });