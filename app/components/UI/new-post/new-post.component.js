angular.module('myApp').component('newPost', {
    templateUrl: 'components/UI/new-post/new-post.template.html',
    controller: ['$http',function newPostController () {
        const self = this;

        self.username = '';
        self.title = '';
        self.body = '';
        
        self._submitPost = function () {
            console.log("post submitted");
        } 
    }]
})