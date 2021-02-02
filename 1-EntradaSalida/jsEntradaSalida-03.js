/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreDelAlumno; 
	var edadDelAlumno; 
	nombreDelAlumno = document.getElementById('txtIdNombre').value;
	edadDelAlumno = prompt("ingrese su ead");

	alert('Ud se llama: ' + nombreDelAlumno + 'y tiene' + edadDelAlumno + 'años');
}