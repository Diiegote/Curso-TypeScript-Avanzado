
// es similar al any pero tiene algunas caracteristicas diferentes y por eso recomiendan usar unknow antes que el any


// aca como podemos ver le podemos asignar cualquier tipo y no nos da error.
let unknowVar: unknown;
unknowVar = true;
unknowVar = false;
unknowVar = [];
unknowVar = {};
unknowVar = "";
unknowVar = 12;

// pero si queremos ejecutar un metodo que no existe si nos da error, no como el any que te deja ejecutar cualquier cosa. Ejemplo:
let anyVar: any;
let isNew:boolean = anyVar;
anyVar = "diego";
anyVar.cualquierCosa(); // como podemos ver con any podemos ejecutar una funcion que no existe y no nos arroja ningun error.

//unknowVar.cualquierCosa(); // como podemos ver con la variable unknowVar si nos arroja error porque nos indica que esa funcion no existe.

// Para verificar primero si la variable contiene el tipo de dato que queremos ejecutar hay que hacer un if.

if (typeof unknowVar === 'string') {
  unknowVar.toLowerCase(); // de esta manera prevenimos posibles errores
}

if (typeof unknowVar === 'boolean') {
  let isNewV2:boolean = unknowVar;
}

const parse = (str:string):unknown=>{
  return JSON.parse(str);
}