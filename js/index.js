var nb_1 = 12;
var nb_2 = 5;
var result_ex3 = nb_1 % nb_2;
    
function Add(){
document.getElementById('2_result').innerHTML = result_ex3;
}

var value1= "";
function iterateWords(){
value1 += document.getElementById('6_input').value;
document.getElementById('6_result').innerHTML = value1;
}
    
function resetWords(){
value1 = "";
document.getElementById('6_result').innerHTML = value1;
}

function screenWidth(){
    var screenwidth = window.innerWidth;
    document.getElementById('8_result').innerHTML = screenwidth;
    }
    window.onload = screenWidth;

function convertirToL(){
	var nb_x = document.getElementById('4_input1').value;
	var result1_ex9 = nb_x * 1000;
  	document.getElementById('4_result').innerHTML = result1_ex9;  
}

function convertirToM(){
	var nb_y = document.getElementById('4_input2').value;
	var result2_ex9 = nb_y / 1000;
  	document.getElementById('4_2_result').innerHTML = result2_ex9;  
}

        