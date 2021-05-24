/*Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

function mostrar()
{
	var estacionDelAño;
	var destino;
	var estadoDelViaje;

	estacionDelAño = document.getElementById('txtIdEstacion').value;

	destino = document.getElementById('txtIdDestino').value;

	switch(estacionDelAño)
	{
		case "Invierno":
		{
			if(destino == "Bariloche")
			{
				estadoDelViaje = "Se viaja";
			}
			else
			{
				estadoDelViaje = "No se viaja";
			}
			break;
		}
		case "Verano":
		{
			if(destino == "Mar del plata"|| destino == "Cataratas")
			{
				estadoDelViaje = "Se viaja";
			}
			else
			{
				estadoDelViaje = "No se viaja";
			}
			break;
		}
		case "Otoño":
		{
			estadoDelViaje= "Se viaja";
			break;
		}
		case "Primavera":
		{
			if(destino != "Bariloche")
			{
				estadoDelViaje = "No se viaja";
			}
			else
			{
				estadoDelViaje = "Se viaja";
			}
			break;
		}
	}

	alert(estadoDelViaje);




}//FIN DE LA FUNCIÓN