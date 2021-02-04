/*Gabriel Casoli
TP Ejercicio 1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultado;

	primerPrecio = document.getElementById('txtIdPrecioUno').value;
	segundoPrecio = document.getElementById('txtIdPrecioDos').value;
	tercerPrecio = document.getElementById('txtIdPrecioTres').value;

	primerPrecio = parseInt(primerPrecio);
	segundoPrecio = parseInt(segundoPrecio);
	tercerPrecio = parseInt(tercerPrecio);

	resultado = primerPrecio + segundoPrecio + tercerPrecio;

	alert("La suma de los valores ingresados es: "+resultado);


}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var resultado;

	primerPrecio = document.getElementById('txtIdPrecioUno').value;
	segundoPrecio = document.getElementById('txtIdPrecioDos').value;
	tercerPrecio = document.getElementById('txtIdPrecioTres').value;

	primerPrecio = parseInt(primerPrecio);
	segundoPrecio = parseInt(segundoPrecio);
	tercerPrecio = parseInt(tercerPrecio);

	resultado = (primerPrecio + segundoPrecio + tercerPrecio)/3;

	alert("El promedio de los valores ingresados es: "+resultado);


}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var preciosSinIva;
	var iva;
	var resultado;

	iva = 21;

	primerPrecio = document.getElementById('txtIdPrecioUno').value;
	segundoPrecio = document.getElementById('txtIdPrecioDos').value;
	tercerPrecio = document.getElementById('txtIdPrecioTres').value;

	primerPrecio = parseInt(primerPrecio);
	segundoPrecio = parseInt(segundoPrecio);
	tercerPrecio = parseInt(tercerPrecio);

	preciosSinIva = primerPrecio + segundoPrecio + tercerPrecio;

	resultado = preciosSinIva *iva /100 + preciosSinIva;

	alert("El precio final mas Iva es: " + resultado);
	
}