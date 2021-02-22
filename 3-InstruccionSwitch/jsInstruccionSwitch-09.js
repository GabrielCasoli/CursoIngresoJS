/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y

localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var aumento;
	var descuento;
	var precioFinal;

	descuento = 0;
	aumento = 0;

	const PRECIO = 15000;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
		{
			if(destinoIngresado == "Bariloche")
			{
				aumento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					descuento = 20;
				}
				else
				{
					descuento = 10;
				}
			}
			break;
		}
		case "Verano":
		{
			if(destinoIngresado == "Bariloche")
			{
				descuento = 20;
			}
			else
			{
				if(destinoIngresado == "Mar del plata")
				{
					aumento = 20;
				}
				else
				{
					aumento = 10;
				}
			}
			break;
		}
		case "Otoño":
		case "Primavera":
		{
			if(destinoIngresado == "Cordoba")
			{
				precioFinal = PRECIO;
			}
			else
			{
				aumento = 10;
			}
		}
			
	}

	if (aumento != 0)
	{
		precioFinal = PRECIO + (PRECIO * aumento / 100);
	}
	else
	{
		if(descuento != 0)
		{
			precioFinal = PRECIO - (PRECIO * descuento / 100);
		}
	}

	alert("Precio final es: "+precioFinal);

	console.log(estacionIngresada);
	console.log(destinoIngresado);

}//FIN DE LA FUNCIÓN