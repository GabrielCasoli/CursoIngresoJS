/*Gabriel Casoli
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
 	var cantidadDeLámparas;
 	var marca;
 	var precioPorUnidad;
 	var precioSinDescuento;
 	var precioConDescuento;
 	var descuento;
 	var ingresosBrutos;
 	var montoDelImpuesto;
 	var precioConImpuestos;

 	ingresosBrutos = 1.10;

 	precioPorUnidad = 35;

 	cantidadDeLámparas = parseInt(document.getElementById('txtIdCantidad').value);

 	marca = document.getElementById('Marca').value;

 	precioSinDescuento = cantidadDeLámparas * precioPorUnidad;
 	
 	if (cantidadDeLámparas >5)
 	{

 		descuento = 50;

 	}//A
 	else
 	{
 		if(cantidadDeLámparas == 5)
 		{
 			if(marca == "ArgentinaLuz")
 			{

				descuento = 40;

 			}
 			else
 			{

	 			descuento = 30;

 			}
 		}//B
 		else
 		{
 			if(cantidadDeLámparas == 4)
 			{
 				if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 				{

 					descuento = 25;

 				}
 				else
 				{

 					descuento = 20;

 				}
 			}//C
 			else
 			{
 				if (cantidadDeLámparas == 3)
 				{
 					if(marca == "ArgentinaLuz")
 					{
 						descuento = 15;
 					}
 					else
 					{
 						if(marca == "FelipeLamparas")
 						{
 							descuento = 10;
 						}
 						else
 						{
 							descuento = 5;
 						}
 					}
 				}//D
 				else
 				{

 				}
 			}
 		}
 	}

 	precioConDescuento = precioSinDescuento - (precioSinDescuento * (descuento/100));

	document.getElementById('txtIdprecioDescuento').value = precioConDescuento;	

	if (precioConDescuento > 120)
	{
		precioConImpuestos = precioConDescuento * ingresosBrutos;

		montoDelImpuesto = precioConImpuestos - precioConDescuento;
 
		document.getElementById('txtIdprecioDescuento').value = precioConImpuestos;

		alert("Usted pago " + montoDelImpuesto + " de IIBB.");
	}
	else
	{

	}//E

	console.log(marca);
}