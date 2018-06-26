angular.module('myApp').component('newPost', {
    templateUrl: 'components/UI/new-post/new-post.template.html',
    controller: ['$http',function newPostController ($http) {
        const self = this;

        self.$onInit = function () {
            self.firstName = '';
            self.lastName
            self.title = '';
            self.body = '';
        }
        
        self._submitPost = function () {
            $http.put()
            console.log("post submitted");
        } 
    }]
})