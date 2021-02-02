/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreDelAlumno; 
	var apellidoDelAlumno;
	var edadDelAlumno; 
	

	nombreDelAlumno = document.getElementById("txtIdNombre").value;

	apellidoDelAlumno = prompt("ingrese su Apellido");

    edadDelAlumno = document.getElementById("txtIdEdad").value;
	

	alert('Ud se llama:  ' + nombreDelAlumno  + apellidoDelAlumno + ' y tiene  ' + edadDelAlumno +  'años ');
}

