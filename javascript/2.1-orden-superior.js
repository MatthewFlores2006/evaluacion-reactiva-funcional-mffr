/**
 * Crea un filtrador personalizado usando closures
 * Retorna una función que puede usarse con Array.filter()
 */
function crearFiltrador(criterio)
{
    // Tu implementacion
    // Debe retornar una función que filtre según el criterio
    return function(libro)
    {
        for (let key in criterio)
        {
            if (criterio[key] !== libro[key])
            {
                return false;
            }
        }
        return true;
    };
}

// Ejemplo de uso:
const libros = [
    {titulo: "El Señor de las Moscas", categoria: "Literatura", anio: 1954},
    {titulo: "Eloquent JavaScript: 3rd Edition", categoria: "Programacion", anio: 2018},
    {titulo: "Node.js Avanzado", categoria: "Programacion", anio: 2020}
];
const filtrarProgramacion = crearFiltrador({ categoria: "Programacion" });
const librosProgramacion = libros.filter(filtrarProgramacion);
console.log(librosProgramacion);

const filtrarRecientes = crearFiltrador({ anio: 2020, operador: "mayor" });
const librosRecientes = libros.filter(filtrarRecientes);
console.log(librosRecientes);

/**
 * Procesa préstamos aplicando una estrategia (función) a cada uno
 */
function procesarPrestamos(prestamos, estrategia)
{
    // Tu implementación
    // estrategia es una función que define cómo procesar cada préstamo
    prestamos.forEach(prestamo => {
        estrategia(prestamo);
    });
}

// Ejemplos de uso:
const calcularMultas = (prestamo) =>
{
    if (!prestamo.devuelto && (new Date() - new Date(prestamo.fechaPrestamo)) > 7 * 24 * 60 * 60 * 1000)
        console.log(`Multa por préstamo no devuelto: ${prestamo.libroId}`);
};
const enviarRecordatorios = (prestamo) =>
{
    if (!prestamo.devuelto)
        console.log(`Recordatorio: El libro con ID ${prestamo.libroId} aún no se ha devuelto.`);
};

const prestamos = [
    { libroId: 1, usuarioId: 1, fechaPrestamo: '2023-11-01', devuelto: false },
    { libroId: 2, usuarioId: 2, fechaPrestamo: '2023-11-05', devuelto: true },
    { libroId: 3, usuarioId: 3, fechaPrestamo: '2023-10-25', devuelto: false }
];

procesarPrestamos(prestamos, calcularMultas);
procesarPrestamos(prestamos, enviarRecordatorios);