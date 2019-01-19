
function turnToRed(){
    var thebody = document.getElementById("thecontent").textContent;
    var thewords = thebody.split(" ");
    for(var i=0; i < thewords.length ; i ++)
    {
        var first = thewords[i];
        var lastLetter = first.charAt(first.length -1);
        document.write( ' ' + first.substring(0, first.length - 1 ) + lastLetter.fontcolor("red").bold( )  );

    }
}