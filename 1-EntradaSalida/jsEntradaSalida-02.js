/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
var persona = prompt("Please enter your name", "Jose");

if (persona != null) 
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";

	alert("Jose");
}

