angular.module('routerApp', ['routerRoutes', 'ngAnimate'] )

//create the controllers; this will be controller for ENTIRE site
.controller('mainController', function() {
	var vm = this;
	vm.bigMessage = "MAIN WELCOME MESSAGE";
})

// Home page-specific controller
.controller('homeController', function() {
	var vm = this;
	vm.message = "This is my homepage!";
})

// About page controller
.controller('aboutController', function() {
	var vm = this;
	vm.message = 'This is my about page!';
})

// Finally, contact page controller
.controller('contactController', function() {
	var vm = this;
	vm.message = 'Contact us!';
})

// RESEARCH CENTER
.controller('researchController', function() {
	var vm = this;
	vm.message = 'Do stuff here!';
})

// EDUCATION CENTER
.controller('educationController', function() {
	var vm = this;
	vm.message = 'Learn stuff here!';
})

// SOFTWARE LAWS
.controller('softwareLawsController', function() {
	var vm = this;
	vm.message = 'Software laws here!';
})

// QUESTION LIST
.controller('questionListController', function() {
	var vm = this;
	vm.message = 'Question list stuff here!';
})

// CODEBASELIST
.controller('codebaseListController', function() {
	var vm = this;
	vm.message = 'Codebase stuff here!';
});