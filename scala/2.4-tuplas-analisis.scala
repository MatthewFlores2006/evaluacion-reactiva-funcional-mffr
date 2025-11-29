import java.time.LocalDate
import java.time.format.DateTimeFormatter

case class Prestamo(
  id: Int,
  libroId: Int,
  usuarioId: Int,
  fechaPrestamo: String,
  activo: Boolean
)

/**
 * Retorna estadísticas de un usuario usando tuplas
 * Tupla: (totalPrestamos, prestamosActivos, promedioLibrosPorMes)
 */
def obtenerEstadisticasUsuario(
  prestamos: List[Prestamo],
  usuarioId: Int
): (Int, Int, Double) = {
  // Tu implementacion usando operaciones funcionales
  // Usa filter, map, foldLeft/reduce según necesites
 // Filtrar los préstamos del usuario
  val prestamosUsuario = prestamos.filter(_.usuarioId == usuarioId)

  // Total de préstamos
  val totalPrestamos = prestamosUsuario.length
  
  // Prestamos activos
  val prestamosActivos = prestamosUsuario.count(_.activo)
  
  // Calcular promedio de libros por mes
  if (totalPrestamos > 0) {
    // Parseamos las fechas de los préstamos
    val fechas = prestamosUsuario.map(p => LocalDate.parse(p.fechaPrestamo, DateTimeFormatter.ISO_DATE))
    
    // Obtenemos el primer y el último préstamo para calcular los meses transcurridos
    val fechaInicial = fechas.min
    val fechaFinal = fechas.max
    
    // Calcular la diferencia en meses
    val mesesDiferencia = java.time.temporal.ChronoUnit.MONTHS.between(fechaInicial, fechaFinal).toInt + 1
    
    // Promedio de libros por mes
    val promedioLibrosPorMes = totalPrestamos.toDouble / mesesDiferencia
    (totalPrestamos, prestamosActivos, promedioLibrosPorMes)
  } else {
    // Si no tiene préstamos, devolvemos un promedio de 0
    (totalPrestamos, prestamosActivos, 0.0)
  } 
}

// Ejemplo:
val prestamos = List(
  Prestamo(1, 101, 1, "2024-01-15", false),
  Prestamo(2, 102, 1, "2024-02-10", true),
  Prestamo(3, 103, 1, "2024-03-05", true)
)

val (total, activos, promedio) = obtenerEstadisticasUsuario(prestamos, 1)
println(s"Total: $total, Activos: $activos, Promedio: $promedio")