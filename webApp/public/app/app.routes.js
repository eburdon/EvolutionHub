// ROUTES FOR INJECTING
angular.module('routerRoutes', ['ngRoute'])

// Configure our routes
.config(function($routeProvider, $locationProvider) {
	$routeProvider

		// Route for the homepage
		.when('/', {
			templateUrl : 'app/views/pages/home.html',
			controller : 'homeController',
			controllerAs: 'home'
		})

		// Route for the ABOUT page
		.when('/about', {
			templateUrl : 'app/views/pages/about.html',
			controller : 'aboutController',
			controllerAs: 'about'
		})

		// Route for CONTACT page
		.when('/contact', {
			templateUrl : 'app/views/pages/contact.html',
			controller : 'contactController',
			controllerAs: 'contact'
		})

		// RESEARCH route
		.when('/reaCenter', {
			templateUrl : 'app/views/pages/researchSplash.html',
			controller : 'researchController',
			controllerAs: 'research'
		})

		// EDUCATION route
		.when('/eduCenter', {
			templateUrl : 'app/views/pages/educationSplash.html',
			controller : 'educationController',
			controllerAs: 'education'
		})

		// EVOLUTION LAWS route
		.when('/softLaws', {
			templateUrl : 'app/views/pages/softwareLaws.html',
			controller : 'softwareLawsController',
			controllerAs: 'softLaw'
		})

		// BENCHMARKS route
		.when('/benchmarks', {
			templateUrl : 'app/views/pages/benchmarks.html',
			controller : 'benchmarksController',
			controllerAs: 'bench'
		})

		// QUESTIONLIST route
		.when('/questionList', {
			templateUrl : 'app/views/pages/questionList.html',
			controller : 'questionListController',
			controllerAs: 'qlc'
		})

		// CODEBASE route
		.when('/codebaseList', {
			templateUrl : 'app/views/pages/codebaseList.html',
			controller : 'codebaseController',
			controllerAs: 'cbc'
		});

	// Set our app to have pretty URLs
	$locationProvider.html5Mode(true);
});