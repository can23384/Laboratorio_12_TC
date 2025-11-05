const removeItems = toRemove => list =>
  list.filter(x => !toRemove.includes(x));

const original = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const borrar   = ['amarillo', 'cafe', 'blanco'];

console.log(removeItems(borrar)(original));