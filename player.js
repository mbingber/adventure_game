var inquirer = require('inquirer');

var game = require('./game.source');

/*

This file has no test specs. It might be a tricky one. You need to look at 
the docs for the inquirer npm package, and see if you can figure out how 
to make the game run!

If you're running out of time, check out our solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/



function playGame(node) {
	if (node.connections.length === 0) {
		console.log(node.text);
	} else {
		var question = {
			type: 'list',
			name: node.title,
			message: node.text,
			choices: node.getConnectionStrings()
		}
		inquirer.prompt(question, function(answer) {
			playGame(node.route(answer[question.name]));
		});
	}
}

if (game.g.startingPoint === null) {
	throw new Error('you need a starting point');
} else {
	playGame(game.g.startingPoint);
}