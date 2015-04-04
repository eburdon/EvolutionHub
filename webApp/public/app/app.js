// MODULE / PAGE CONTROLS
var application = angular.module('routerApp', [
	'routerRoutes', 
	'ngAnimate'
]);

// ---- MASTER CONTROLLER ---- 
application.controller('mainController', function() {
	var vm = this;
	vm.bigMessage = "MAIN WELCOME MESSAGE";
});


// ---- Primary Controllers ----

// HOME
application.controller('homeController', function() {
	var vm = this;
	vm.message = "This is my homepage!";
});


// ABOUT; Trying to get server-side response here!
application.controller('aboutController', ['$scope', function($scope) {
	var vm = this;
	vm.message = 'This is my about controller!';

	$scope.fooAlert = function () {
		alert("Hello Alert - from controller");
	};

	$scope.fooConsole = function () {
		// this should be console log
		alert("Hello Console - from controller");
	}
}]);


// CONTACT
application.controller('contactController', function() {
	var vm = this;
	vm.message = 'Contact us!';

	// FILL IN
});


// RESEARCH 
application.controller('researchController', function() {
	var vm = this;
	vm.message = 'Do stuff here!';

	// researchLinks.js
	vm.tool1Adr = coolTool.link1[0]; vm.tool1Txt = coolTool.link1[1];
	vm.tool2Adr = coolTool.link2[0]; vm.tool2Txt = coolTool.link2[1];
});


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
});


// ---- Education Controllers ----

// SOFTWARE LAWS -- HERE
application.controller('softwareLawsController', function() {
	var vm = this;
	vm.message = 'Software laws here!';

	// softLawContent.js
	vm.mainTitle  = softLawContent.mainTitle;
	vm.paragraph1 = softLawContent.paragraph1;
	vm.paragraph2 = softLawContent.paragraph2;
	vm.paragraph3 = softLawContent.paragraph3;
	vm.paragraph4 = softLawContent.paragraph4;

	vm.law1title = softLawContent.law1title;
	vm.law1text  = softLawContent.law1text;

	vm.law2title = softLawContent.law2title;
	vm.law2text  = softLawContent.law2text;

	vm.law3title = softLawContent.law3title;
	vm.law3text  = softLawContent.law3text;

	vm.law4title = softLawContent.law4title;
	vm.law4text  = softLawContent.law4text;

	vm.law5title = softLawContent.law5title;
	vm.law5text  = softLawContent.law5text;

	vm.law6title = softLawContent.law6title;
	vm.law6text  = softLawContent.law6text;

	vm.law7title = softLawContent.law7title;
	vm.law7text  = softLawContent.law7text;

	vm.law8title = softLawContent.law8title;
	vm.law8text  = softLawContent.law8text;
});

// BENCHMARKS
application.controller('benchmarksController', function() {
	var vm = this;
	vm.message = 'Benchmarks go here!';

	// benchmarkContent.js
	vm.paragraph1 = benchmarkContent.paragraph1;
	vm.paragraph2 = benchmarkContent.paragraph2;
	vm.paragraph3 = benchmarkContent.paragraph3;
});

// ---- Research Controllers ----

// QUESTION LIST
application.controller('questionListController', function() {
	var vm = this;
	vm.message = 'Question list stuff here!'; // DEBUG STATEMENT

	// Defined in alphabetical order; projectDefintions.js
	// Try not to exceed 4 paragraphs
	// author.(question Number)(author number)
	// -----------------------------
	vm.question1  = student.question;
	vm.authors11  = student.pauthor[0];		vm.authors12  = student.pauthor[1];		
	vm.authors13  = student.pauthor[2];
	vm.sum1para1  = student.psum1;			vm.sum1para2  = student.psum2;			
	vm.sum1para3  = student.psum3;			vm.sum1para4  = student.psum4;
	// -----------------------------
	vm.question2  = devin.question;
	vm.authors21  = devin.pauthor[0];		vm.authors22  = devin.pauthor[1];
	vm.sum2para1  = devin.psum1;			vm.sum2para2  = devin.psum2;			
	vm.sum2para3  = devin.psum3;			vm.sum2para4  = devin.psum4;
	// -----------------------------
	vm.question3  = eburdon.question;
	vm.authors31  = eburdon.pauthor[0];
	vm.sum3para1  = eburdon.psum1;			vm.sum3para2  = eburdon.psum2;			
	vm.sum3para3  = eburdon.psum3;			vm.sum3para4  = eburdon.psum4;
	// -----------------------------
	vm.question4  = gregnr.question;
	vm.authors41  = gregnr.pauthor[0];		vm.authors42  = gregnr.pauthor[1];		
	vm.authors43  = gregnr.pauthor[2];		vm.authors44  = gregnr.pauthor[3];
	vm.sum4para1  = gregnr.psum1;			vm.sum4para2  = gregnr.psum2;			
	vm.sum4para3  = gregnr.psum3;			vm.sum4para4  = gregnr.psum4;
	// -----------------------------
	vm.question5  = guand.question;
	vm.authors51  = guand.pauthor[0];		vm.authors52  = guand.pauthor[1];		
	vm.authors53  = guand.pauthor[2];
	vm.sum5para1  = guand.psum1;			vm.sum5para2  = guand.psum2;			
	vm.sum5para3  = guand.psum3;			vm.sum5para4  = guand.psum4;
	// -----------------------------
	vm.question6  = Hoverbear.question;
	vm.authors61  = Hoverbear.pauthor[0];	vm.authors62  = Hoverbear.pauthor[1];
	vm.sum6para1  = Hoverbear.psum1;		vm.sum6para2  = Hoverbear.psum2;			
	vm.sum6para3  = Hoverbear.psum3;		vm.sum6para4  = Hoverbear.psum4;
	// -----------------------------
	vm.question7  = Jsryo.question;
	vm.authors71  = Jsryo.pauthor[0];		vm.authors72  = Jsryo.pauthor[1];		
	vm.authors73  = Jsryo.pauthor[2];
	vm.sum7para1  = Jsryo.psum1;			vm.sum7para2  = Jsryo.psum2;			
	vm.sum7para3  = Jsryo.psum3;			vm.sum7para4  = Jsryo.psum4;
	// -----------------------------
	vm.question8  = knowelsc.question;
	vm.authors81  = knowelsc.pauthor[0];	vm.authors82  = knowelsc.pauthor[1];
	vm.sum8para1  = knowelsc.psum1;			vm.sum8para2  = knowelsc.psum2;			
	vm.sum8para3  = knowelsc.psum3;			vm.sum8para4  = knowelsc.psum4;
	// -----------------------------
	vm.question9  = mrivettuvic.question;
	vm.authors91  = mrivettuvic.pauthor[0];		vm.authors92  = mrivettuvic.pauthor[1];
	vm.sum9para1  = mrivettuvic.psum1;			vm.sum9para2  = mrivettuvic.psum2;			
	vm.sum9para3  = mrivettuvic.psum3;			vm.sum9para4  = mrivettuvic.psum4;
	// -----------------------------
	vm.question10 = PolloDiablo.question;
	vm.authors101 = PolloDiablo.pauthor[0];
	vm.sum10para1 = PolloDiablo.psum1;			vm.sum10para2 = PolloDiablo.psum2;			
	vm.sum10para3 = PolloDiablo.psum3;			vm.sum10para4 = PolloDiablo.psum4;

});

// CODEBASELIST
application.controller('codebaseListController', function() {
	var vm = this;
	vm.message = 'Codebase stuff here!';

	vm.section1  = "Reddit";
	vm.S1Q1 = Reddit.prjONEquestion;

	vm.section2  = "jQuery Mobile";
	vm.S2Q1 = JQueryMobile.prjONEquestion;

	vm.section3  = "jQuery";
	vm.S3Q1 = JQuery.prjONEquestion;
	vm.S3Q2 = JQuery.prjTWOquestion;

	vm.section4  = "Bootstrap";
	vm.S4Q1 = Bootstrap.prjONEquestion;
	vm.S4Q2 = Bootstrap.prjTWOquestion;
	vm.S4Q3 = Bootstrap.prjTHREEquestion;

	vm.section5  = "Rails";
	vm.S5Q1 = Rails.prjONEquestion;
	vm.S5Q2 = Rails.prjTWOquestion;

	vm.section6  = "Django";
	vm.S6Q1 = Django.prjONEquestion;

	vm.section7  = "Pyramid";
	vm.S7Q1 = Pyramid.prjONEquestion;

	vm.section8  = "Flask";
	vm.S8Q1 = Flask.prjONEquestion;

	vm.section9  = "Node.js";
	vm.S9Q1 = NodeJS.prjONEquestion;

	vm.section10 = "Python";
	vm.S10Q1 = Python.prjONEquestion;

	vm.section11 = "Pixi.js";
	vm.S11Q1 = PixiJS.prjONEquestion;

	vm.section12 = "Angular.js";
	vm.S12Q1 = AngularJS.prjONEquestion;
	vm.S12Q2 = AngularJS.prjTWOquestion;

	vm.section13 = "Melon.js";
	vm.S13Q1 = MelonJS.prjONEquestion;

	vm.section14 = "Backbone.js";
	vm.S14Q1 = Backbone.prjONEquestion;

	vm.section15 = "Homebrew";
	vm.S15Q1 = Homebrew.prjONEquestion;

	vm.section16 = "io.js";
	vm.S16Q1 = IOJS.prjONEquestion;

	vm.section17 = "Marmotta";
	vm.S17Q1 = Marmotta.prjONEquestion;

	vm.section18 = "ProjectForge";
	vm.S18Q1 = ProjectForge.prjONEquestion;

	vm.section19 = "SonarQube";
	vm.S19Q1 = SonarQube.prjONEquestion;
});

application.controller('projectsController', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		var parameters = location.search;
		console.log("running + ", $routeParams, parameters);

		$scope.projectId = $routeParams.projectId;

		$http.get('http://localhost:8081/execute/' + $routeParams.projectId + parameters)
			.success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				$scope.dataready = true;
				data.projectInfo.runcmd[0].arguments[4] = "redacted";

				$scope.projectInfo = data.projectInfo;
				$scope.projectOutput = data.output;
				$scope.projectOutputFile = data.file;
				$http.get('http://localhost:8080/' + data.file)
					.success(function(data, status, headers, config) {
						$scope.projectOutputFileData = data;
					})
					.error(function(data, status, headers, config) {

					});
			})
			.error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				console.log("error");
				console.log(data);
				$scope.projectOutput = data;
				$scope.dataready = false;
			});
	}
]);
