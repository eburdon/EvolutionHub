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

	vm.tool1Adr = coolTool.link1[0]; vm.tool1Txt = coolTool.link1[1];
	vm.tool2Adr = coolTool.link2[0]; vm.tool2Txt = coolTool.link2[1];
})

// EDUCATION 
application.controller('educationController', function() {
	var vm = this;
	vm.message = 'Learn stuff here!';

	// General Links
	vm.gen1Addr = eduGenLink.link1[0]; vm.gen1Text = eduGenLink.link1[1];
	vm.gen2Addr = eduGenLink.link2[0]; vm.gen2Text = eduGenLink.link2[1];
	vm.gen3Addr = eduGenLink.link3[0]; vm.gen3Text = eduGenLink.link3[1];

	// Links to papers
	vm.ppr1Adr = eduPaperLink.link1[0]; vm.ppr1Txt = eduPaperLink.link1[1];
	vm.ppr2Adr = eduPaperLink.link2[0]; vm.ppr2Txt = eduPaperLink.link2[1];
	vm.ppr3Adr = eduPaperLink.link3[0]; vm.ppr3Txt = eduPaperLink.link3[1];
	vm.ppr4Adr = eduPaperLink.link4[0]; vm.ppr4Txt = eduPaperLink.link4[1];
	vm.ppr5Adr = eduPaperLink.link5[0]; vm.ppr5Txt = eduPaperLink.link5[1];
	vm.ppr6Adr = eduPaperLink.link6[0]; vm.ppr6Txt = eduPaperLink.link6[1];
	vm.ppr7Adr = eduPaperLink.link7[0]; vm.ppr7Txt = eduPaperLink.link7[1];

	// Links to books
	vm.bk1Adr = eduBookLink.link1[0]; vm.bk1Txt = eduBookLink.link1[1];
	vm.bk2Adr = eduBookLink.link2[0]; vm.bk2Txt = eduBookLink.link2[1];
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