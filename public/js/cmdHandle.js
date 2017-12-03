function cmdHandler(cmd, dict) {
	if (dict.hasOwnProperty(cmd)) {
		//function response handling
		if(typeof(dict[cmd]) == 'function') {
			return { 
				code: dict[cmd] + ';',
				call: dict[cmd].name + '();'
			}
		}
		//single lines will come in non-objects/strings
		else if(typeof(dict[cmd]) != 'object'){
			return dict[cmd];	
		}
		//multiline responses come in objects
		else if (typeof(dict[cmd]) == 'object') {
			var rVal = "";
			for(var line in dict[cmd]){
				if(line != (dict[cmd].length - 1)) {
					rVal += dict[cmd][line] + "<br>>>";
				}
				else {
					rVal += dict[cmd][line];
				}
			}
			return rVal;
		}
	}
	else {
		return "Command not recognized.";
	}
}
module.exports = cmdHandler;
