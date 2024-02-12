
function colorChange(){
    document.getElementById("redHeart").style.color = "red";
    document.getElementById("heartButton").innerHTML = "Aba esma Click"
    document.getElementById("heartButton").style.visibility = "visible";
    document.getElementById("midLine").style.visibility = "hidden";
    }

var myFlag = false;
function increaseCount(){
    if(!myFlag){
document.getElementById("myAside").style.visibility = "visible";
document.getElementById("instruction").style.visibility = "visible";
document.getElementById("p1").style.visibility = "visible";
document.getElementById("p2").style.visibility = "visible";
document.getElementById("p3").style.visibility = "visible";
myFlag = true;
}
document.getElementById("heartButton").removeEventListener("click",increaseCount)
}

var counter = 10;
var size = 5.5;
function newFunction(){
    size+=0.2;
    counter--;
    console.log("Updating p2 with value: " + counter);
    document.getElementById("p2").innerHTML = counter;
    document.getElementById("redHeart").style.fontSize= size+"em";
    if(counter==1){
        document.getElementById("heartButton").innerHTML= '<a href="pics.html" style="color:white;">Aba last choti<a></a>';
    }
}

function mainFunc(){
    increaseCount();
    newFunction();}

    function final(){
        document.getElementById("mymain").style.visibility = "hidden";
        document.getElementById("last1").style.visibility = "visible";
        document.getElementById("last2").style.visibility = "visible";
        document.getElementById("last1").innerHTML = "I LOVE YOU DHERAII";
        document.getElementById("last2").innerHTML = "CHUPPPPAAAA &#x1F618;";
    }



