
function turnToRed(){
    var thebody = document.getElementById("thecontent").textContent;
    var thewords = thebody.split(" ");
    for(var i=0; i < thewords.length ; i ++)
    {
        var first = thewords[i];
        var lastLetter = first.charAt(first.length -1);
        var hadpunctuation = ""
        if(lastLetter == "." || lastLetter=="," || lastLetter=="!") {
            hadpunctuation = first.charAt(first.length - 2).fontcolor("red").bold() + first.charAt(first.length -1);
            first = first.substring(0, first.length -1)
            lastLetter="";
        }
        if(first.length > 1)
            var theText = ' ' + first.substring(0,1).fontcolor("green") + first.substring(1, first.length - 1 )
                + lastLetter.fontcolor("red").bold( ) + hadpunctuation;
        else
            var theText = ' ' + first.fontcolor("red")
        theText = theText.fontsize(12);
        var writereturned =  document.write(  theText );
        var elementfound = document.getElementById("thecontent");
        hadpunctuation="";
        lastLetter="";
    }
    document.body.style.textAlign = "center";
    document.body.style.width="900px"
}

function format() {
    console.log('input is ' + document.getElementById('theInput').value)
    document.getElementById('thecontent').textContent = document.getElementById('theInput').value
    turnToRed();
}