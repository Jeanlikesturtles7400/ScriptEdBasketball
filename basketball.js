function promptForPlayerName(player){
    var greeting = player + "what is your name?";
    var name = prompt(greeting);
    
    if (name.length > 15) {
       alert("wow that's a long name!");
    }
    return name;
}
function trytwopointshot(){
    var firstplayer = Math.random();
    var secondplayer = Math.random();
    if(firstplayer > 0.2 && secondplayer > 0.2){
        return true ;
    } else{
        return false;
    }
}
function trythreepointshot(){
    var firstplayer = Math.random();
    var secondplayer =Math.random();
    if(firstplayer)
}
alert(just repeat!)