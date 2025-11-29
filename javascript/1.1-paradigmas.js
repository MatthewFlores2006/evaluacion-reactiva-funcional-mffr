const libros = [
  { id: 1, titulo: "Clean Code", categoria: "Programacion", anio: 2008, prestado: false },
  { id: 2, titulo: "Design Patterns", categoria: "Programacion", anio: 1994, prestado: true },
  { id: 3, titulo: "Refactoring", categoria: "Programacion", anio: 1999, prestado: false },
  { id: 4, titulo: "Calculus", categoria: "Matematicas", anio: 2010, prestado: false }
];

// Implementación 1: Paradigma IMPERATIVO (0.4 puntos)
function filtrarLibrosImperativo(libros, categoria)
{
    let librosFiltrados = [];
    let cont = 0;
  // Tu implementación usando for/while, mutación de variables
  for(let i = 0; i < libros.length; i++)
    {
        if(libros[i].categoria === categoria && !libros[i].prestado)
        {
            librosFiltrados[cont] = libros[i];
            cont++;
        }
        for (let j = 0; j < libros.length - 1; j++)
        {
            for (let j = i + 1; j < librosFiltrados.length; j++)
            {
                if (librosFiltrados[i].anio > librosFiltrados[j].anio)
                {
                    let temp = librosFiltrados[i];
                    librosFiltrados[i] = librosFiltrados[j];
                    librosFiltrados[j] = temp;
                }
            }
        }
    }

    return librosFiltrados;
}

// Implementación 2: Paradigma DECLARATIVO (0.4 puntos)
function filtrarLibrosDeclarativo(libros, categoria)
{
  // Tu implementación usando filter, sort (métodos funcionales)
    return libros
        .filter(libro => libro.categoria === categoria && !libro.prestado)
        .sort((a, b) => a.anio - b.anio);
}

console.log(filtrarLibrosImperativo(libros, "Programacion"));
console.log(filtrarLibrosDeclarativo(libros, "Programacion"));