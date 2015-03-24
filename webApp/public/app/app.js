// MODULE / PAGE CONTROLS
var application = angular.module('routerApp', [
	'routerRoutes', 
	'ngAnimate'
])

// ---- MASTER CONTROLLER ---- 
application.controller('mainController', function() {
	var vm = this;
	vm.bigMessage = "MAIN WELCOME MESSAGE";
})


// ---- Primary Controllers ----

// HOME
application.controller('homeController', function() {
	var vm = this;
	vm.message = "This is my homepage!";
})

// ABOUT -- PREVIOUS VERSION
/* .controller('aboutController', function() {
//	var vm = this;
//	vm.message = 'This is my about page!';
//}) */

// ABOUT -- TESTING
application.controller('aboutController', ['$scope', function($scope) {
	var vm = this;
	vm.message = 'This is my about page! TEST CONTROLLER';

	// I WANT TO BE ABLE TO EXECUTE A SERVER-SIDE RESPONSE HERE
	$scope.fooAlert = function () {
		alert("Hello Alert - from controller");
	}

	$scope.fooConsole = function () {
		// this should be console log
		alert("Hello Console - from controller");
	}
}])

// CONTACT
application.controller('contactController', function() {
	var vm = this;
	vm.message = 'Contact us!';
})

// RESEARCH 
application.controller('researchController', function() {
	var vm = this;
	vm.message = 'Do stuff here!';
})

// EDUCATION 
application.controller('educationController', function() {
	var vm = this;
	vm.message = 'Learn stuff here!';

	vm.link1Addr = eduLink.link1[0];
	vm.link1Text = eduLink.link1[1];

	vm.link2Addr = eduLink.link2[0];
	vm.link2Text = eduLink.link2[1];
})


// ---- Education Controllers ----

// SOFTWARE LAWS -- HERE
application.controller('softwareLawsController', function() {
	var vm = this;
	vm.message = 'Software laws here!';

	vm.paragraph1 = softLawContent.paragraph1;
	vm.paragraph2 = softLawContent.paragraph2;
	vm.paragraph3 = softLawContent.paragraph3;
})

// BENCHMARKS
application.controller('benchmarksController', function() {
	var vm = this;
	vm.message = 'Benchmarks go here!';

	vm.paragraph1 = benchmarkContent.paragraph1;
	vm.paragraph2 = benchmarkContent.paragraph2;
	vm.paragraph3 = benchmarkContent.paragraph3;
})

// ---- Research Controllers ----

// QUESTION LIST
application.controller('questionListController', function() {
	var vm = this;
	vm.message = 'Question list stuff here!';
})

// CODEBASELIST
application.controller('codebaseListController', function() {
	var vm = this;
	vm.message = 'Codebase stuff here!';
});