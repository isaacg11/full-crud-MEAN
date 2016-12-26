namespace live_exam_practice {

    angular.module('live_exam_practice', ['ui.router', 'ngResource']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: live_exam_practice.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('Add', {
                url: '/addMovie',
                templateUrl: '/ngApp/views/addMovie.html',
                controller: live_exam_practice.Controllers.AddMovieController,
                controllerAs: 'vm'
            })
            .state('Edit', {
                url: '/editMovie',
                templateUrl: '/ngApp/views/editMovie.html',
                controller: live_exam_practice.Controllers.EditMovieController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
