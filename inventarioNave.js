// # 🏆 Desafío: "El Gestor de Inventario de la Nave"

// ## Contexto:
// Deben crear un script que gestione el inventario de una nave espacial. Deben aplicar lógica para procesar artículos, aplicar descuentos y verificar si hay stock suficiente.

// ### 1. Datos iniciales
// Crea un array de objetos llamado `inventario`. Cada objeto debe tener:
// - `nombre`
// - `categoria`
// - `precio` (número)
// - `stock` (número)

// *Mínimo 3 productos.*
// ### 2. Función de Procesamiento

// Crea una Arrow Function llamada `procesarPedido` que reciba como parámetros:
// - El nombre del producto
// - La cantidad deseada

// ### 3. Lógica interna
// - Usa un método de array para buscar el producto.
// - Usa `if/else` para verificar:
//   - Si el producto existe.
//   - Si hay stock suficiente.
// - Si todo es correcto, calcula el total usando operadores aritméticos.
// - Aplica un "Descuento de Flota" del 10% si el total es superior a 500 créditos (usando comparadores).

// ### 4. Salida
// La función debe retornar un mensaje (string) confirmando la compra con el total, o un mensaje de error detallado.

// ### 5. Presentación
// Se debe presentar en clases comentando la solución. 


const inventario = [
   { nombre: "Oxígeno", categoria: "Recursos Vitales", precio: 150, stock: 50},
   { nombre: "Combustible Deuterio", categoria: "Combustible", precio: 300, stock: 30},
   { nombre: "Repuestos Motores", categoria: "Mantenimiento", precio: 450, stock: 15},
   { nombre: "Escudos Defensivos", categoria: "Protección", precio: 600, stock: 8}
];

// Función para procesar pedidos de la nave
const procesarPedido = (nombreProducto, cantidad) => {
   // Buscar el producto en el inventario usando find()
   const producto = inventario.find(item => item.nombre.toLowerCase() === nombreProducto.toLowerCase());

   // Verificar si el producto existe
   if (!producto) {
      return `❌ Error: El producto "${nombreProducto}" no existe en el inventario.`;
   }

   // Verificar si hay stock suficiente
   if (cantidad > producto.stock) {
      return `❌ Error: Stock insuficiente. Solo hay ${producto.stock} unidades de ${producto.nombre}.`;
   }

   // Verificar que la cantidad sea válida
   if (cantidad <= 0) {
      return `❌ Error: La cantidad debe ser mayor a 0.`;
   }

   // Calcular el total usando operadores aritméticos
   let total = producto.precio * cantidad;

   // Aplicar "Descuento de Flota" del 10% si el total es superior a 500 créditos
   let descuentoAplicado = false;
   if (total > 500) {
      const descuento = total * 0.10;
      total = total - descuento;
      descuentoAplicado = true;
   }

   // Retornar mensaje de confirmación con detalles de la compra
   let mensaje = `✅ Compra realizada exitosamente:\n`;
   mensaje += `   Producto: ${producto.nombre}\n`;
   mensaje += `   Cantidad: ${cantidad} unidades\n`;
   mensaje += `   Precio unitario: ${producto.precio} créditos\n`;
   mensaje += `   Subtotal: ${producto.precio * cantidad} créditos\n`;
   
   if (descuentoAplicado) {
      mensaje += `   Descuento de Flota (10%): -${(producto.precio * cantidad * 0.10).toFixed(2)} créditos\n`;
   }
   
   mensaje += `   Total a pagar: ${total.toFixed(2)} créditos`;

   return mensaje;
};

// Pruebas del sistema
console.log("=== GESTOR DE INVENTARIO DE LA NAVE ===\n");
console.log(procesarPedido("Oxígeno", 2));
console.log("\n---\n");
console.log(procesarPedido("Combustible Deuterio", 3));
console.log("\n---\n");
console.log(procesarPedido("Escudos Defensivos", 1));
console.log("\n---\n");
console.log(procesarPedido("Repuestos Motores", 20)); // Stock insuficiente
console.log("\n---\n");
console.log(procesarPedido("Hielo Seco", 5)); // Producto no existe