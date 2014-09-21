var app = angular.module('angularBlog', ['firebase', 'ui.router', 'ui.gravatar', 'restangular', 'ngSanitize']);


//Routes
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'app/views/main.html',
        });
        
}]);