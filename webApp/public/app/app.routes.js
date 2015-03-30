// CONFIGURE OUR ROUTES / CONTROLLERS
angular.module('routerRoutes', [
	'ngRoute',
	// 'ngResource','ngSanitize',
])

// Configure our routes
.config(function($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider

		// ---- Primary routes ----

		// HOME
		.when('/', {
			templateUrl : 'app/views/pages/home.html',
			controller : 'homeController',
			controllerAs: 'home'
		})

		// ABOUT
		.when('/about', {
			templateUrl : 'app/views/pages/about.html',
			controller  : 'aboutController',
			controllerAs: 'about'
		})

		// CONTACT
		.when('/contact', {
			templateUrl : 'app/views/pages/contact.html',
			controller : 'contactController',
			controllerAs: 'contact'
		})

		// RESEARCH 
		.when('/reaCenter', {
			templateUrl : 'app/views/pages/researchSplash.html',
			controller : 'researchController',
			controllerAs: 'research'
		})

		// EDUCATION
		.when('/eduCenter', {
			templateUrl : 'app/views/pages/educationSplash.html',
			controller : 'educationController',
			controllerAs: 'education'
		})

		// ---- Education Information routes ----

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

		// ---- Research Information routes ----

		// QUESTIONLIST route
		.when('/questionList', {
			templateUrl : 'app/views/pages/questionList.html',
			controller : 'questionListController',
			controllerAs: 'listControl'
		})

		// CODEBASE route
		.when('/codebaseList', {
			templateUrl : 'app/views/pages/codebaseList.html',
			controller : 'codebaseListController',
			controllerAs: 'cbc'
		})

		// projects
		.when('/projects/:projectId', {
			templateUrl : 'app/views/pages/projectsPartial.html',
			controller : 'projectsController',
			controllerAs: 'pControl'
		});

	// Set our app to have pretty URLs
	$locationProvider.html5Mode(true);
});