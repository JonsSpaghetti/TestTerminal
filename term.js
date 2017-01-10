//initializes game/terminal logic.  Instantiates basic cmd dictionary.
$(function init () {
	var pInput = $('#playerInput');
	pInput.focus();
	//setInterval(textUp, 20);
	$('.gameWindow').on("click", function(event) {
		$('#playerInput').focus();
	});
	$('#mirrorText').on("click", function(event) {
		$('#playerInput').focus();
	});
	//timeout handler for caret logic
	var timeoutHandler;
	pInput.on("keydown", function(event) {
		var caret = $('#caret')[0];
		caret.style.webkitAnimationPlayState = "paused";
		caret.style.visibility = "visible";
		clearTimeout(timeoutHandler);
		timeoutHandler = setTimeout(function () {
			unpause(caret)
		}, 500);
		if (event.which == 13){
			var pInput = $('#playerInput')[0];
			var val = pInput.value;
			if (val) {
				$('.gameText').append("<li>" + val + "</li>");
				var scope = angular.element($('#playerInput')).scope();	
				scope.$apply(function() {
					scope.input = "";
				});
				$('.gameText').append("<li>>>" + cmdHandler(val, cmds) + "</li>");
				window.scrollTo(0,$(document).height());

			}
		}
	});
	//define basic cmds
	//This will be an object used as a dict
	//Key-value pairs will be cmd-action/output.
	//output can be a string or a callback function.
	//TODO - convert the command object calls to server-side logic
	cmds = {
		help : ['Possible commands :','test'],
		katherine : "Is pretty chill I guess.  Is not a proper noun.",
		test : "testin 1,2,3"
	}
});

//unpause caret blinking animation
function unpause(element) {
	element.style.webkitAnimationPlayState = "running";
}

//takes cmd and handles output based on dictionary object passed in.
function cmdHandler(cmd, dict) {
	if (dict.hasOwnProperty(cmd)) {
		if (typeof(dict[cmd]) != 'object'){
			return dict[cmd];
		}
		else if(typeof(dict[cmd]) == 'object'){
			var rVal = "";
			for (line in dict[cmd]){
				if( line != (dict[cmd].length - 1)) {
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



//update function for text-input mirroring i might not be necessary right now...
function textUp() {
}
