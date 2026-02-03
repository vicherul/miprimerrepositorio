// # 🏆 Desafío: "Cine-JS: El Recomendador de Contenido"

// ## Contexto
// Deben procesar un catálogo de películas para aplicar una restricción de edad y calcular precios con impuestos, generando una lista lista para "mostrarse" en una interfaz.

// ## 📝 El Enunciado para los alumnos

// ### 1. El Catálogo
// Crea un array de objetos llamado `peliculas`. Cada objeto debe tener:
// - `titulo`
// - `edadMinima` (número)
// - `precio` (número)
// - `esEstreno` (booleano)

// ### 2. La Función Principal
// Crea una arrow function llamada `generarCartelera` que reciba:
// - El array de películas
// - La `edadUsuario`

// ### 3. Lógica interna
// - Usa el método `.map()` para crear una nueva lista de películas (sin modificar la original).
// - Dentro del `.map()`, usa `if/else` para:
//   - **Calcular el `precioFinal`**: Si `esEstreno` es `true`, sumar un 20% al precio base. Si no, dejar el precio igual.
//   - **Determinar un campo `acceso`**: Si la `edadUsuario` es $\geq$ `edadMinima`, el valor es "Permitido". De lo contrario, es "Denegado".

// ### 4. Salida 
// - La función debe retornar el nuevo array de objetos transformados.

// # 🏆 Desafío: "Cine-JS: El Recomendador de Contenido"

// ## Contexto
// Deben procesar un catálogo de películas para aplicar una restricción de edad y calcular precios con impuestos, generando una lista lista para "mostrarse" en una interfaz.

// ### Implementación

const peliculas = [
  { titulo: "Aventura Galáctica", edadMinima: 7, precio: 400, esEstreno: true },
  { titulo: "Drama Estelar", edadMinima: 13, precio: 250, esEstreno: false },
  { titulo: "Terror Lunar", edadMinima: 18, precio: 350, esEstreno: true }
];

// Función que genera la cartelera transformada sin mutar el array original
const generarCartelera = (peliculasArray, edadUsuario) => {
  return peliculasArray.map(pelicula => {
    // Calcular precioFinal: +20% si es estreno
    const precioFinal = pelicula.esEstreno ? pelicula.precio * 1.20 : pelicula.precio;

    // Determinar acceso según la edad del usuario
    const acceso = edadUsuario >= pelicula.edadMinima ? "Permitido" : "Denegado";

    return {
      titulo: pelicula.titulo,
      edadMinima: pelicula.edadMinima,
      precioBase: pelicula.precio,
      esEstreno: pelicula.esEstreno,
      precioFinal: Number(precioFinal.toFixed(2)),
      acceso: acceso
    };
  });
};

// Ejemplos de uso / pruebas
console.log("=== CARTELERA PARA 20 AÑOS ===");
console.table(generarCartelera(peliculas, 20));

console.log("=== CARTELERA PARA 12 AÑOS ===");
console.table(generarCartelera(peliculas, 12));