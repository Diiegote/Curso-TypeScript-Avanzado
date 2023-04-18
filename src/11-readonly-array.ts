const numbers : ReadonlyArray<number> = [1,2,3,5,4,6,87];
// tipando el array de numeros con ReadonlyArray lo que logramos es que no se pueda modificar el array original.
// numbers.push(12)
// numbers.pop(12)
// numbers.unshift(12)

// Con los metodos filter, reduce y map si nos deja porque estos metodos crean un nuevo array y no mutan el origianl.
numbers.filter(()=>{})
numbers.reduce(()=>0)
numbers.map(()=>{})