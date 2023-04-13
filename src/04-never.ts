const withoutEnd = ()=>{
  while(true){
    console.log("Nunca parar de aprender");
  }
};

const fail = (message:string)=>{
  throw new Error(message);
};

const example = (input:unknown)=>{
  if(typeof input === "string"){
    return 'es un string';
  }else if(Array.isArray(input)){
    return 'es un array';
  }
  return fail("not match");
};

console.log(example('hola'));
console.log(example([1,2,5,4]));
console.log(example(1225));// aca se detiene
console.log(example('hola despues del fail')); // aca no llegaria nunca