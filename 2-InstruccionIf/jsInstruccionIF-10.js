/*Gabriel Casoli
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var notaExamen;

	var mensaje;


	notaExamen = Math.floor(Math.random() * 10) + 1;
	
	if (notaExamen >7)
	{

		mensaje = ("EXCELENTE");

	}
	else
	{

		if (notaExamen > 4)
		{

			mensaje = ("APROBÓ");

		}
		else
		{

			mensaje = ("Vamos, la proxima se puede");

		}
	}

	alert(mensaje);

	console.log(notaExamen);


}//FIN DE LA FUNCIÓN