/**
 * Calcula días de retraso de un préstamo
 * Función PURA: mismo input = mismo output, sin efectos secundarios
 */
function calcularDiasRetraso(fechaPrestamo, fechaDevolucion, diasPermitidos) {
    // Tu implementación (0.4 puntos)
    // NO uses Date.now() ni console.log ni variables externas
    // Solo calcula con los parámetros recibidos
    const fechaPrestamoDate = new Date(fechaPrestamo);
    const fechaDevolucionDate = new Date(fechaDevolucion);
    const diferenciaTiempo = fechaDevolucionDate - fechaPrestamoDate;
    const diasRetraso = diferenciaTiempo / (1000 * 3600 * 24);
    const diasDeRetrasoFinal = diasRetraso - diasPermitidos;
    return Math.max(0, diasDeRetrasoFinal);
}

/**
 * Calcula multa por días de retraso
 * Regla: $0.50 por día de retraso
 */
function calcularMulta(diasRetraso) {
    // Tu implementación (0.4 puntos)
    // Debe ser determinística: siempre el mismo resultado para el mismo input
    return diasRetraso * 0.50;
}

// Ejemplos de prueba:
console.log(calcularDiasRetraso("2024-01-01", "2024-01-20", 14)); // 6 días
console.log(calcularMulta(6)); // $3.00

/*
¿Por qué estas funciones son puras?

Porque no interactúan con ningún elemento externo;
Reciben parámetros y tan solo con ello se realizan todos los cálculos.
A más de ello, mientras reciban los mismos parámetros, el resultado siempre será el mismo.

¿Qué pasaría si usaras Date.now() dentro?

Se introdujera variación en los resultados, y ya no fuese una función pura.
Esto porque al obtener el tiempo actual se pide un valor dinámico,
lo que rompe el punto de una función pura:
resultados consistentes.

Ventaja de funciones puras para testing/pruebas

La predictibilidad de una función completamente consistente ayuda en el momento
de entender las pruebas que se realizan, pues si se comprende el flujo de la función,
se puede llegar a una conclusión acertada de cuál debería ser el resultado esperado.
Además, el hecho de no usar elementos externos apoya esta predictibilidad, pues
siempre se van a mantener exactamente igual por el hecho de no depender de factores
externos.

 */