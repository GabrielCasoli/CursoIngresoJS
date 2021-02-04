/*
Gabriel Casoli
Ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var sumar;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	sumar = numeroUno + numeroDos;

	alert("la Suma es " + sumar);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var restar;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	restar = numeroUno - numeroDos;

	alert("la Resta es " + restar);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicar = numeroUno * numeroDos;

	alert("la Multiplicación es " + multiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividir;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	dividir = numeroUno / numeroDos;

	alert("la División es " + dividir);
}

