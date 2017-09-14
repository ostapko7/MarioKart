function reset(){
    location.reload();
}

var clicked = false;
function myFunction(){

if(clicked)
     {
       reset();

     }
else
    {
       myMove();secondMove(); 

    }
clicked = !clicked;

var posMario = 0;
var posYoshi = 0;

function myMove() {
  var y = Math.floor((Math.random() * 10) + 1);
  var elem = document.getElementById("animate");   
  var idY = setInterval(frameY, y);
  function frameY() {
    if (posYoshi == 1000) {
      clearInterval(id);
    } 
	
	
	else {
      posYoshi++; 
      elem.style.left = posYoshi + 'px'; 
    }
	
	if (posYoshi == 800 && posMario < 750) {
			document.getElementById("demo").style.backgroundColor = "lightblue";
			document.getElementById("demo").innerHTML = "Yoshi Wins!";
			document.getElementById("rematch").innerHTML = "Click the stop light to restart the race!";
			}
	
	
	
  }
}

function secondMove() {
  var x = Math.floor((Math.random() * 10) + 1);
  var elem = document.getElementById("second");   
  var idX = setInterval(frameX, x);
  function frameX() {
    if (posMario == 1000) {
      clearInterval(id);
    } 
	
	else {
      posMario++; 
      elem.style.left = posMario + 'px'; 
	  
	if (posMario == 800 && posYoshi < 750) {
		document.getElementById("demo").style.backgroundColor = "lightblue";
		document.getElementById("demo").innerHTML = "Mario Wins!";
		document.getElementById("rematch").innerHTML = "Click the stop light to restart the race!";
		}
		
	if (posMario >= 750 && posMario <= 800 && posYoshi >=750 && posYoshi <= 800) {
		document.getElementById("demo").style.backgroundColor = "lightblue";
		document.getElementById("demo").innerHTML = "It's a tie!";
		document.getElementById("rematch").innerHTML = "Click the stop light to restart the race!";
		}
    }
	
	
  }
}
}