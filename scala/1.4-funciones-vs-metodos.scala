case class Libro(id: Int, titulo: String, autor: String, categoria: String)

// FORMA 1: Como método de una clase (0.3 puntos)
class Biblioteca(libros: List[Libro]) {
  def buscarPorAutor(autor: String): List[Libro] = {
    // Tu implementacion
    libros.filter(_.autor == autor)
  }
}

// FORMA 2: Como función pura (0.3 puntos)
object FuncionesBiblioteca {
  def buscarPorAutor(libros: List[Libro], autor: String): List[Libro] = {
    // Tu implementacion
    libros.filter(_.autor == autor)
  }
}

// Ejemplos de uso:
val libros = List(
  Libro(1, "Clean Code", "Robert Martin", "Programacion"),
  Libro(2, "Refactoring", "Martin Fowler", "Programacion")
)

// Uso con método:
val biblioteca = new Biblioteca(libros)
val resultado1 = biblioteca.buscarPorAutor("Robert Martin")
println(resultado1)

// Uso con función:
val resultado2 = FuncionesBiblioteca.buscarPorAutor(libros, "Robert Martin")
println(resultado2)

/*

¿Cuál es la diferencia conceptual?

Un método es una función asociada a una instancia de una clase u objeto. 
En este caso, buscarPorAutor es un método que actúa sobre la propiedad interna libros de la instancia de Biblioteca.

Una función pura es una función independiente que toma parámetros y devuelve un valor 
sin modificar el estado externo ni tener efectos secundarios.
La función buscarPorAutor en FuncionesBiblioteca toma una lista de libros 
y el autor como parámetros y devuelve una lista de libros sin modificar nada fuera de la función.

¿Cuándo usar métodos vs funciones puras?

Los métodos se usan cuando se requiere encapsular 
el estado dentro de una clase y operar sobre ese estado. 
Por ejemplo, si se desea que Biblioteca gestione su propia 
lista de libros y se requiere tener acceso a métodos que operen sobre esa lista.

Las funciones puras son más fáciles de testear, depurar y componer. 
Son ideales cuando no se requiere mantener estado y simplemente hay que transformar datos. 
La función buscarPorAutor es más general y reutilizable en distintos contextos
sin depender de ningún estado interno.


¿Cuál facilita más el testing y por qué?

Las puras porque no dependen de un estado mutable y se pueden probar de manera independiente. 
Basta con proporcionar los parámetros correctos y verificar que el resultado sea el esperado.

*/