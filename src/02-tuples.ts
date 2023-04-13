// esta es la manera normal de definir un array tipando que se pueda usar number y string.
const price: (number | string) [] = [1,3,5,6,"sdaf"];
price.push(1);
price.push("5");


// aca creamos una tuple

let user: [string, number,boolean];
//user = ['diego',12];  esto no me lo perime hacer porque le dije que va a contener tres elementos y solo le puse 2.
// user = ['12',15]; esto tampoco me lo deja hacer.
// user  = ['diego',15,true]; esto si me lo permite hacer ya que le estoy pasando los 3 valores correctos.


// Ahora hacemos destructuracion de una tuple
user  = ['diego',15,true];
const [username,age] = user;  //en la primer posicion le ponemos username y se le va a guardar el valor diego y en la segunda posicion le ponemos age y se le va a guardar el valor 15.
console.log(username);
console.log(age);