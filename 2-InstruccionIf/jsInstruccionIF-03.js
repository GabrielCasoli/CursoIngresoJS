/* Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	var edad;

	edad = document.getElementById('txtIdEdad').value;

	edad = parseInt(edad);

	if (edad >= 18)
	{
		alert("Eres Mayor de edad.")
	}
	else if (edad <= 18)
	{
		alert("Eres Menor de edad.")
	}

}//FIN DE LA FUNCIÓN