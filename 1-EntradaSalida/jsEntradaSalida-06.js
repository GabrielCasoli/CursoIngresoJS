/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumIngresado;
	var segundoNumIngresado;
	var sumar;

	primerNumIngresado = document.getElementById("txtIdNumeroUno").value;
	segundoNumIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumIngresado = parseInt(primerNumIngresado);
	segundoNumIngresado = parseInt(segundoNumIngresado);

	sumar = primerNumIngresado + segundoNumIngresado;

	alert("la suma es " + sumar);


}

