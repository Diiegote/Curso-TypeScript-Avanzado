export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number        // los parametros opcionales van a lo ultimo si no ts nos da error.
) => {
  return {
    id,
    stock: stock ?? 10,  // usamos el operador nullish-coalescing (??) que viene a remplazar el operador or (||)
    isNew: isNew ?? true // porque el operador or analiza que no haya ningun false y si le pasamos algun dato en vacio o le pasamos a isNew que es false automaticamente asigna el valor true por defecto y no queremos eso. Eso es un error muy comun del operador or que ahora fue reemplazado por el nullish-cialescing
  };
};

const p1 = createProduct("1",true,15);
console.log(p1);