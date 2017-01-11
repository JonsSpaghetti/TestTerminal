function cmdHandler(cmd, dict) {
	if (dict.hasOwnProperty(cmd)) {
		if(typeof(dict[cmd]) !='object'){
			return dict[cmd];
		}
		else if (typeof(dict[cmd]) == 'object') {
			var rVal = "";
			for(line in dict[cmd]){
				if(line != (dict[cmd].length - 1)) {
					rval += dict[cmd][line] + "<br>>>";
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
