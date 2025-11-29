/**
 * Genera un reporte completo de la biblioteca
 * Usa SOLO: map, filter, reduce, sort, etc.
 */
const libros = [
    { id: 1, titulo: "JavaScript para Todos", categoria: "Programacion", anio: 2021, rating: 4.5 },
    { id: 2, titulo: "El Gran Gatsby", categoria: "Literatura", anio: 1925, rating: 4.2 },
    { id: 3, titulo: "Node.js Avanzado", categoria: "Programacion", anio: 2020, rating: 4.8 },
    { id: 4, titulo: "Matemáticas para Ingenieros", categoria: "Matematicas", anio: 2022, rating: 4.7 },
    { id: 5, titulo: "Teoría de la Relatividad", categoria: "Ciencia", anio: 1919, rating: 4.9 }
];

const prestamos = [
    { id: 1, libroId: 1, usuarioId: 1, fechaPrestamo: "2024-01-15", activo: false },
    { id: 2, libroId: 2, usuarioId: 2, fechaPrestamo: "2024-02-10", activo: true },
    { id: 3, libroId: 3, usuarioId: 1, fechaPrestamo: "2024-03-05", activo: true },
    { id: 4, libroId: 4, usuarioId: 3, fechaPrestamo: "2024-01-18", activo: false },
    { id: 5, libroId: 5, usuarioId: 2, fechaPrestamo: "2024-03-20", activo: true }
];

const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Carlos" }
];
function generarReporteCompleto(libros, prestamos, usuarios)
{
    return{
        // Total de libros por categoria (0.15 puntos)
        librosPorCategoria:libros.reduce((acc, libro) =>
        {
            acc[libro.categoria] = (acc[libro.categoria] || 0) + 1;
            return acc;
        }, {}),

        // Top 5 usuarios más activos (0.15 puntos)
        usuariosMasActivos: usuarios
            .map(usuario => ({
                ...usuario,
                prestamosActivos: prestamos.filter(prestamo => prestamo.usuarioId === usuario.id && prestamo.activo).length
            }))
            .sort((a, b) => b.prestamosActivos - a.prestamosActivos)
            .slice(0, 5),

        // Libros más prestados (0.15 puntos)
        librosMasPrestados: libros
            .map(libro => ({
                ...libro,
                vecesPrestado: prestamos.filter(prestamo => prestamo.libroId === libro.id).length
            }))
            .sort((a, b) => b.vecesPrestado - a.vecesPrestado)
            .slice(0, 5),

        // Tasa de préstamos activos (0.15 puntos)
        tasaPrestamosActivos: (prestamos.filter(prestamo => prestamo.activo).length / prestamos.length) * 100
    };
}
console.log("Reporte completo:", generarReporteCompleto(libros, prestamos, usuarios));