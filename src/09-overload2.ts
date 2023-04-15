// Diego => [D,i,e,g,o] => string => string[]
// [D,i,e,g,o] => Diego => string[] => string

export function parseInt(input: string[]): string;
export function parseInt(input: string): string[];
export function parseInt(input: number): boolean;

// export function parseInt(input: string | string[]):string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); //string
//   } else{
//     return input.split(''); //string[]
//   }
// }
export function parseInt(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else if (typeof input === 'string') {
    return input.split(''); //string[]
  } else if (typeof input === 'number') {
    return true; //boolean
  }
}



const rtaArray = parseInt('Diego');
rtaArray.reverse();
// if(Array.isArray(rtaArray)){
//   rtaArray.reverse();
// }
console.log("rtaArray", rtaArray);

const rtaString = parseInt(['D', 'i', 'e', 'g', 'o']);
rtaString.toLowerCase();
// if(typeof rtaString === 'string'){
//   rtaString.toLowerCase();
// }
console.log("rtaSring", rtaString);

const rtaBoolean = parseInt(12);
console.log("rtaBoolean",rtaBoolean);