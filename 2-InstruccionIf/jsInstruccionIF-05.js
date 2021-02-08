/*
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	var edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad <= 13 || edad >= 18)
	{
		alert("No eres un adolescente.");
	}

	alert("ok");

}//FIN DE LA FUNCIÓN