// ROUTES FOR INJECTING
angular.module('routerRoutes', ['ngRoute'])

// Configure our routes
.config(function($routeProvider, $locationProvider) {
	$routeProvider

		// Route for the homepage
		.when('/', {
			templateUrl : 'app/views/pages/home.html',
			controller : 'homeController',
			contollerAs: 'home'
		})

		// Route for the ABOUT page
		.when('/about', {
			templateUrl : 'app/views/pages/about.html',
			controller : 'aboutController',
			contollerAs: 'about'
		})

		// Route for CONTACT page
		.when('/contact', {
			templateUrl : 'app/views/pages/contact.html',
			controller : 'contactController',
			contollerAs: 'contact'
		})

		// RESEARCH route
		.when('/reaCenter', {
			templateUrl : 'app/views/pages/researchSplash.html',
			controller : 'researchController',
			contollerAs: 'research'
		})

		// EDUCATION route
		.when('/eduCenter', {
			templateUrl : 'app/views/pages/educationSplash.html',
			controller : 'educationController',
			contollerAs: 'education'
		});

	// Set our app to have pretty URLs
	$locationProvider.html5Mode(true);
});