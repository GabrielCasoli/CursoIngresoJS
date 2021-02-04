/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var cantidadDeAlambre;

	largoDelTerreno = document.getElementById('txtIdLargo').value;
	anchoDelTerreno = document.getElementById('txtIdAncho').value;

	largoDelTerreno = parseInt(largoDelTerreno);
	anchoDelTerreno = parseInt(anchoDelTerreno);

	cantidadDeAlambre = 2*(largoDelTerreno + anchoDelTerreno)*3;

	alert("La cantidad de alambre que se necesita comprar es " + cantidadDeAlambre + "m.");

}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambre;

	const PI = 3.14;

	radio = document.getElementById('txtIdRadio').value;

	radio = parseInt(radio);

	perimetro = 2 * PI * radio;

	alambre = perimetro * 3;

	alert("La cantidad de alambre que se necesita comprar es " + alambre + "m.");
}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var area;
	var cemento;
	var cal;


	largoDelTerreno = document.getElementById('txtIdLargo').value;
	anchoDelTerreno = document.getElementById('txtIdAncho').value;

	largoDelTerreno = parseInt(largoDelTerreno);
	anchoDelTerreno = parseInt(anchoDelTerreno);

	area = largoDelTerreno * anchoDelTerreno;

	cemento = area * 2;

	cal = area * 3;

	alert("La cantidad que se tiene que comprar son " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");


}