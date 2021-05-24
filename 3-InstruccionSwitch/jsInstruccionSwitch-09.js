/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y

localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	/*var estacionIngresada;
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
		break;	
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

	alert("Precio final es: " + precioFinal);

	console.log(estacionIngresada);
	console.log(destinoIngresado);*/

	var estacionDelAño;
	var localidad;
	var precioBase;
	var descuento;
	var aumento;
	var precioFinal;

	precioBase = 15000;

	aumento = 0;

	descuento = 0;

	estacionDelAño = document.getElementById('txtIdEstacion').value;

	localidad = document.getElementById('txtIdDestino').value;


	switch(estacionDelAño)
	{
		case "Invierno":
		{
			if(localidad == "Bariloche")
			{
				aumento = precioBase * 0.20;

			}
			else
			{
				if(localidad == "Mar del plata")
				{
					descuento = precioBase * 0.20; 
				}
				else
				{
					descuento = precioBase * 0.10;
				}
			}
			break;
		}

		case "Verano":
		{
			if(localidad == "Bariloche")
			{
				descuento = precioBase * 0.20;

			}
			else
			{
				if(localidad == "Mar del plata")
				{
					aumento = precioBase * 0.20; 
				}
				else
				{
					aumento = precioBase * 0.10;
				}
			}
			break;
		}

		case "Otoño":
		case "Primavera":
		{
			if(localidad == "Cordoba")
			{
				descuento = precioBase * 0;

			}
			else
			{
				aumento = precioBase * 0.10;
			}
			break;
		}
	}

	console.log("La estacion del año es: " + estacionDelAño);
	console.log("La localidad es: " + localidad);
	console.log("El aumento es:" + aumento);
	console.log("El descuento es: " + descuento);

	precioFinal = precioBase + (aumento - descuento);

	alert("Precio final es: "+ precioFinal);
		
	console.log("El precio final es: " + precioFinal);

}//FIN DE LA FUNCIÓN