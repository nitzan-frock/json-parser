angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/posts');

        $stateProvider
        .state('posts', {
            url: '/posts',
            component: 'usersList'
        })
        .state('newPost', {
            url:'/newpost',
            component: 'newPost' 
        })
    }
]);