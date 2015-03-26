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

	// FILL IN
})


// RESEARCH 
application.controller('researchController', function() {
	var vm = this;
	vm.message = 'Do stuff here!';

	// researchLinks.js
	vm.tool1Adr = coolTool.link1[0]; vm.tool1Txt = coolTool.link1[1];
	vm.tool2Adr = coolTool.link2[0]; vm.tool2Txt = coolTool.link2[1];
})


// EDUCATION 
application.controller('educationController', function() {
	var vm = this;
	vm.message = 'Learn stuff here!';

	// General Links; educationLinks.js
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

	// file source name
	vm.paragraph1 = softLawContent.paragraph1;
	vm.paragraph2 = softLawContent.paragraph2;
	vm.paragraph3 = softLawContent.paragraph3;
})

// BENCHMARKS
application.controller('benchmarksController', function() {
	var vm = this;
	vm.message = 'Benchmarks go here!';

	// benchmarkContent.js
	vm.paragraph1 = benchmarkContent.paragraph1;
	vm.paragraph2 = benchmarkContent.paragraph2;
	vm.paragraph3 = benchmarkContent.paragraph3;
})

// ---- Research Controllers ----

// QUESTION LIST
application.controller('questionListController', function() {
	var vm = this;
	vm.message = 'Question list stuff here!'; // DEBUG STATEMENT

	// Defined in alphabetical order; projectDefintions.js
	// author.(question Number)(author number)
	vm.question1  = student.question; 	 	vm.summary1   = student.psummary;
	vm.authors11  = student.pauthor[0];		vm.authors12  = student.pauthor[1];		vm.authors13  = student.pauthor[2];

	vm.question2  = devin.question;		 	vm.summary2   = devin.psummary;
	vm.authors21  = devin.pauthor[0];		vm.authors22  = devin.pauthor[1];

	vm.question3  = eburdon.question;		vm.summary3   = eburdon.psummary;
	vm.authors31  = eburdon.pauthor[0];

	vm.question4  = gregnr.question;		vm.summary4   = gregnr.psummary;
	vm.authors41  = gregnr.pauthor[0];		vm.authors42  = gregnr.pauthor[1];		vm.authors43  = gregnr.pauthor[2];		vm.authors44  = gregnr.pauthor[3];

	vm.question5  = guand.question;			vm.summary5   = guand.psummary;
	vm.authors51  = guand.pauthor[0];		vm.authors52  = guand.pauthor[1];		vm.authors53  = guand.pauthor[2];

	vm.question6  = Hoverbear.question;		vm.summary6   = Hoverbear.psummary;
	vm.authors61  = Hoverbear.pauthor[0];	vm.authors62  = Hoverbear.pauthor[1];

	vm.question7  = Jsryo.question;			vm.summary7   = Jsryo.psummary;
	vm.authors71  = Jsryo.pauthor[0];		vm.authors72  = Jsryo.pauthor[1];		vm.authors73  = Jsryo.pauthor[2];

	vm.question8  = knowelsc.question;		vm.summary8   = knowelsc.psummary;
	vm.authors81  = knowelsc.pauthor[0];	vm.authors82  = knowelsc.pauthor[1];

	vm.question9  = mrivettuvic.question;	vm.summary9   = mrivettuvic.psummary;
	vm.authors91  = mrivettuvic.pauthor[0];	vm.authors92  = mrivettuvic.pauthor[1];

	vm.question10 = PolloDiablo.question;	vm.summary10  = PolloDiablo.psummary;
	vm.authors101 = PolloDiablo.pauthor[0];

})

// CODEBASELIST
application.controller('codebaseListController', function() {
	var vm = this;
	vm.message = 'Codebase stuff here!';
});