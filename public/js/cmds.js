//Command dictionary.  formatted as follows:
//typed command : output/function to call.
//Returning just text is straightforward.
//Multiline text is returned in an array.
//functions are defined and returned as functions.

//require other command libraries that you wrote/want to use
var stdLib = require('./std.js');

//Base lib of test commands to showcase different ways of calling things.
cmds = {
	help : ['possible commands:', 'test','katherine'],
	katherine : "Is pretty chill I guess.  Is not a proper noun.",
	test : "testing 1, 2, 3.",
}

//adds modules from the earlier require.
for(var cmd in stdLib) cmds[cmd] = stdLib[cmd];

module.exports = cmds;
