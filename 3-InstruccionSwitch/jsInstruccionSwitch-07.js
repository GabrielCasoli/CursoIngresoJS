/*Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		{
			alert("Usted se encuentra en el punto cardinal Oeste de nuestro pais");
			break;
		}
		case "Cataratas":
		{
			alert("Usted se encuentra en el punto cardinal Norte de nuestro pais");
			break;
		}
		case "Mar del plata":
		{
			alert("Usted se encuentra en el punto cardinal Este de nuestro pais");
			break;
		}
		case "Ushuaia":
		{
			alert("Usted se encuentra en el punto cardinal Sur de nuestro pais");
			break;
		}
	}


	console.log(destinoIngresado);

}//FIN DE LA FUNCIÓN