/*
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	var edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad <= 12)
	{
		alert("Eres un niño.");
	}

	else if (edad >= 13 && edad <= 17)
	{
		alert("Eres un adolescente.");
	}

	else if (edad >=18)
	{
		alert("Eres mayor de edad.");
	}


}//FIN DE LA FUNCIÓN