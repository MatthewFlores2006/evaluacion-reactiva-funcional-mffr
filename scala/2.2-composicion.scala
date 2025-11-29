case class Libro(
  id: Int,
  titulo: String,
  precio: Double,
  descuento: Double = 0,
  impuesto: Double = 0
)

// Define funciones de transformación (0.3 puntos)
val aplicarDescuento: Libro => Libro = libro => {
  // Aplica 15% de descuento
  libro.copy(descuento = libro.precio * 0.15)
}

val aplicarImpuesto: Libro => Libro = libro => {
  // Aplica 12% de IVA sobre precio con descuento
  val precioConDescuento = libro.precio - libro.descuento
  libro.copy(impuesto = precioConDescuento * 0.12)
}

val redondearPrecio: Libro => Libro = libro => {
  // Redondea precio final a 2 decimales
  val precioFinal = libro.precio - libro.descuento + libro.impuesto
  libro.copy(precio = BigDecimal(precioFinal).setScale(2, BigDecimal.RoundingMode.HALF_UP).toDouble)
}

// Usa composición de funciones (0.4 puntos)
val procesarPrecioFinal = aplicarDescuento andThen aplicarImpuesto andThen redondearPrecio

// Aplica a lista de libros
val libros = List(
  Libro(1, "Clean Code", 45.99),
  Libro(2, "Refactoring", 39.99)
)

val librosConPrecioFinal = libros.map(procesarPrecioFinal)

println(librosConPrecioFinal)
/*

¿Qué ventaja tiene la composición vs un solo método grande? 

Que nuestro código se vuelve más comprensible al ser más pequeño, 
reutilizable al ser más dividido y en algunos casos exacto, 
y fácil de mantener por requerir pocas modificaciones en un sector.

En ciertos casos hasta puede ayudar con el rendimiento de nuestro equipo, pues ejecutar
un método (o en algunos casos una entera clase) que abarque miles de líneas va a tener un
efecto notable sobre un equipo no tan avanzado, mientras que un sistema compuesto permite
que solo una parte pequeña y exacta del sistema esté abierto en un momento.

¿Cómo facilita el testing?

Permite probar secciones pequeñas y aisladas, 
lo que permite más fácilmente encontrar algún problema.

*/