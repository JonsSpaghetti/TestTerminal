const std = {
    clear : clearScreen
}

function clearScreen(){
        //This could work..
        var listElements = document.body.getElementsByTagName('li');
        for (var i = listElements.length; i > 0 ; i -- ){
            listElements[0].remove();
        }
        //Iteration 2 should preserve history.
    }

module.exports = std;
