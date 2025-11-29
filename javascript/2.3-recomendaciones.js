/**
 * Sistema de recomendación de libros
 *
 * Algoritmo:
 * 1. Filtrar libros de categorías que el usuario ha leído (0.3 pts)
 * 2. Calcular score de recomendación para cada libro (0.4 pts):
 *    - Popularidad: +1 punto por cada 10 préstamos
 *    - Recencia: libros 2020+ tienen +2 puntos
 *    - Rating: rating * 10 puntos
 * 3. Reducir a top 10 libros con mayor score (0.3 pts)
 */
function recomendarLibros(libros, usuario, historialPrestamos) {
    // PASO 1: Filtrar por categorías favoritas del usuario
    const librosRelevantes = libros.filter(libro =>
        usuario.categoriasFavoritas.includes(libro.categoria)
    );

    // PASO 2: Agregar score a cada libro
    const librosConScore = librosRelevantes.map(libro => {
        const popularidad = (historialPrestamos.find(p => p.libroId === libro.id)?.cantidad || 0) / 10;

        const recencia = (libro.anio >= 2020) ? 2 : 0;

        const rating = libro.rating * 10;

        const score = popularidad + recencia + rating;

        return { ...libro, score };
    });

    // PASO 3: Obtener top 10
    const top10 = librosConScore
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

    return top10;
}

const libros = [
    { id: 1, titulo: "JavaScript para Todos", categoria: "Programacion", anio: 2021, rating: 4.5 },
    { id: 2, titulo: "El Gran Gatsby", categoria: "Literatura", anio: 1925, rating: 4.2 },
    { id: 3, titulo: "Node.js Avanzado", categoria: "Programacion", anio: 2020, rating: 4.8 },
    { id: 4, titulo: "Matemáticas para Ingenieros", categoria: "Matematicas", anio: 2022, rating: 4.7 },
    { id: 5, titulo: "Teoría de la Relatividad", categoria: "Ciencia", anio: 1919, rating: 4.9 }
];

// Ejemplo de datos:
const usuario = {
    id: 1,
    categoriasFavoritas: ["Programacion", "Matematicas"]
};

const historialPrestamos = [
    { libroId: 1, cantidad: 45 },
    { libroId: 2, cantidad: 23 }
];

const recomendados = recomendarLibros(libros, usuario, historialPrestamos);
console.log(recomendados);
