/*
var projectDefinition = {
	author: 	name(s) of people who worked on the project 
	path: 		source file directory; relative to location of 'webapp/public' directory!
	question:	what project is answering
	summary:	what tool does (expected outcome)
	runCmd:		array of executeable commands we need to run in order to use the tool
				[0] = step 1, [1], = step 2, etc...

	SHOULD WE ADD ANOTHER PROPERTY RE: CODEBASE? That way we can classify/quickly find what we need for OTHER research perspective? 
}
*/

/* LISTED IN ALPHABETICAL ORDER; title is same as GitHub account hosting the repository;
	Most information has been copy/pasted directly from GitHub */

// NOTE: If a GitHub name has a number in it, it has been removed (no alphanumeric characters in var names)

var student = {
	pauthor: 	["@371student", "@chrisjcook", "@sarahannnicholson"],
	path: 		"assets/project_sources/371student/",
	question: 	"How is the growth of a software project affected by coupling?",
	psum1: 		"This tool analyzes three codebases: Django, Pyramid, and Flask.",
	psum2: 		"Results from this tool could be used to make insights about Python software projects that use Git as a versioning tool. It could potentially draw attention to things like technical debt / legacy code. Insights on the development process itself can be made by knowing how adding dependencies (or increasing coupling) affects the growth of the project.", 
	psum3: 		"This tool first executes a script that moves iteratively throught the history of the master branch of a software project, then uses Snakefood (http://furius.ca/snakefood/) to capture the complexity of the dependency graph at that point in time. This complexity metric (\"Coupling Factor\") is calculated as the ratio of dependency-graph edges to nodes.",
	psum4: 		"It then uses GitStats (https://github.com/hoxu/gitstats) to serve monthly-growth information. This growth metric (\"Growth Factor\") is calculated by: 1) Dividing average commits/month by average Coupling Factor, 2) Multiply by 4, 3) Commits/Month divided by number determied in step 2.", 
};

var devin = {
	pauthor: 	["@devin13", "@DigitalCoffee"],
	path: 		"assets/project_sources/371student/devin13/",
	question: 	"How does the number of progressive (new feature) and anti-regressive (maintenance) changes over time affect the number of bugs discovered?",
	psum1: 		"This tool analyzes three codebases: Ruby on Rails, node.js, Bootstrap.",
	psum2: 		"This is useful for showing the usefulness (or not) of anti-regressive changes such as refactoring code, and if too many new features are causing unreasonable spikes in bugs.", 
	psum3: 		"This tool gathers data to create graphs of progressive changes, anti-regressive changes and the number of reported bugs. The data on bugs, anti-regressive and progressive changes will be taken by performing searches in the GitHub issue tracker, which can be searched using \"bug created:2012-11-01..2012-12-01\" to specify the dates of tickets created with the word bug in them, or \"label:bug created:2012-11-01..2012-12-01\" if that project uses a label to represent bugs. The tool uses a Python script that hits GitHub's API in monthly increments to search the number of issues or pull requests with certain queries and/or labels.",
	psum4: 		"The script will print out the number of found issues as it receives them, about every 3 seconds (to keep within github's rate limit), and once it reaches the end date, will print out the total, and the month number/number of found issues in csv format.", 
};

var eburdon = {
	pauthor: 	["@eburdon"],
	path: 		"assets/project_sources/eburdon/",
	question: 	"How has Python become more powerful over time?",
	psum1: 		"This tool analyzes just one codebase, Python.",
	psum2: 		"Instead of looking at an industry project based on a language or framework, this tool attemps to map the evolution of Python itself. It looks at the three major pieces of Python: It's codebase (source code and modules), the changes in types of projects written with Python over time, and its user base or development community.", 
	psum3: 		"This tool is heavy in written data and screecaptures, not an automatic scripted code, so it's suggested to read the data provided in the repository at https://github.com/eburdon.",
	psum4: 		"", 
};

var gregnr = {
	pauthor: 	["@gregnr", "@jordan-heemskerk", "@rsaujla", "@pcatkins"],
	path: 		"assets/project_sources/gregnr/",
	question: 	"Does the volume of unit tests in a project relate to the frequency of bugs?",
	psum1: 		"This tool analyzes three codebases: Pixi.js, Angular.js, and MelonJS",
	psum2: 		"It attempts to show that the amount of bugs a project has will decrease as the volume of unit tests increase. It could be of great interest to developers as understanding a relationship between test cases and issues would help to allocate the proper amount of resources to QA.",
	psum3: 		"The developers have identified code bases that have a significant history of unit tests and provide issue tracking on GitHub.",
	psum4: 		"It executes a script that, given a github repository and a path to the unit test folder, will determine two data sets: frequency of bugs, and volume of unit tests over time. It gathers the frequency of bugs by recording the number of issues opened per unit time. It then gathers the volume of unit tests by measuring the number of lines of code in all files within the test directory per unit time. The unit of time will be weekly. Finally, it graphs the data to see if there's any relationships.",
};

var guand = {
	pauthor: 	["@guand", "@paulmoon", "@Iamj1234"],
	path: 		"assets/project_sources/guand/",
	question: 	"How does the rate of feature additions change as a project grows in size?",
	psum1: 		"This tool analyzes three codebases: Backbone, Bootstrap, and Homebrew.",
	psum2: 		"The results from this tool is important because it shows the relationship between the number of features added to a project and the size of the project. Developers may be interested in this relationship to see if they are continuing to add features to improve user satisfaction rather than only fixing bugs.", 
	psum3: 		"This tool uses GitHub API to collect closed issues with the feature label, and a list of the pull requests merged into master. It then uses Gitstats to get information such as Lines of COde from each repository, converted into YYYY-MM-DD format. Finally, Google Sheets is used to plot the information.",
	psum4: 		"", 
};

var Hoverbear = {
	pauthor: 	["@Hoverbear", "@fraserd"],
	path: 		"assets/project_sources/Hoverbear/",
	question: 	"Can we track when different parts of codebases undergo movement during refactoring?",
	psum1: 		"This tool analyzes four codebases: capnproto-rust, rust-url, git2-rs, connect.",
	psum2: 		"As developers, we commonly restructure our code. This is usually done in one commit (otherwise it's sloppy). This tool does not perform significant gathering of outside metrics. Instead, the developers generated several test repositories which were then used to verify the functionality of the tool.", 
	psum3: 		"Overall, it was found that Transit is successful in detecting code moves. Some of the detected moves where not simple refactoring but changes that would have changed the logic of the analyzed programs. It is worth noting that beyond our small test data, the developers did not check the percentage of moves that were not detected by Transit.",
	psum4: 		"It's recommended that you visit the source repository for more information.", 
};
///////
var Jsryo = {
	pauthor: 	["@Jsryo", "@EvanHildebrandt", "@KRollans"],
	path: 		"assets/project_sources/Jsryo/",
	question: 	"Does the file structure of the source code affect the ability for the project to evolve?",
	psum1: 		"This tool analyzes four codebases: JQuery Mobile, JQuery, Bootstrap, and Rails.",
	psum2: 		"It analyzes releases and tags them based on Security Updates, Bug fixes, feature releases, preformance improvements, and/or refactors. The tool then uses some statistics on these to understand the frequency of these types of updates. Developers and readers can then visually inspect the codebase using dependancy visualization tools such as Gource to gain details of the nature of these changes.", 
	psum3: 		"",
	psum4: 		"", 
};

var knowelsc = {
	pauthor: 	["@knowelsc", "@ryanmcdonald"],
	path: 		"assets/project_sources/knowelsc/",
	question: 	"What can available tools tell us about code quality?",
	psum1: 		"This tool analyzes three codebases: Ruby on Rails, node.js, Bootstrap.",
	psum2: 		"Actually, we should rephrase. This isn't so much as a tool as a research methodology. It's suggested that you visit the project repository for exact details on the results this development team collected and how you can do it yourself using the tools they found. It's pretty cool though - they were able to assign a GPA to various projects based on the metrics they collected.", 
	psum3: 		"",
	psum4: 		"", 
};

var mrivettuvic = {
	pauthor: 	["@mrivettuvic", "@MisterPotter"],
	path: 		"assets/project_sources/mrivettuvic/",
	question: 	"What is the relation between software development methodologies and development time per feature in a software system?",
	psum1: 		"This tool analyzes four codebases: Marmotta, ProjectForge, SonarQube, and DSpace.",
	psum2: 		"It gathers a series of metrics through the issue tracking software that is used by the selected codebases (Jira) via a Python script that assumes the same issue tracking software had been used throughout the lifespan of the project. The starting and finishing date will be used to calculate the time spent on that feature, and the date they started using the issue tracking software will be used so the time they have completed features relative to the time in to the project can be measured.", 
	psum3: 		"To control the results, collected feature information will filter outliers by collecting 'major' priority features that were completed in over 30 minutes, and less than one year. For every collected codebase, you will have to input what software development method they used manually. When the information is collected, an appropriate graph will be created using matplotlib.",
	psum4: 		"", 
};

var PolloDiablo = {
	pauthor: 	["@PolloDiablo"],
	path: 		"assets/project_sources/PolloDiablo/",
	question: 	"Do developers respond to user feedback submitted through online forums?",
	psum1: 		"This tool analyzes just one codebase: Reddit. More specifically, it looks at the patch notes and subreddits for League of Legends, World of Warcraft, and Team Fortress 2.",
	psum2: 		"This tool is entirely written in Java. It has one file with all the code necessary to scrape data from Reddit Posts and store it in the RedditPosts database table. With this the user is able to create an interface to use the information. The next file contains all the code necessary to scrape data from Patch Notes and store it in the PatchNotes database table, which the user can then use to implement the next interface. Finally, with the first two database tables created, a third analysis file can be used to generate .csv files which can then generate graphs in Microsoft Excel.", 
	psum3: 		"",
	psum4: 		"", 
};

