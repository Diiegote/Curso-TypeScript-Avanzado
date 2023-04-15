// Diego => [D,i,e,g,o] => string => string[]
// [D,i,e,g,o] => Diego => string[] => string


function parseInt(input: string | string[]):string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //string
  } else{
    return input.split(''); //string[]
  }
}

const rtaArray = parseInt('Diego');
// rtaArray.reverse();
if(Array.isArray(rtaArray)){
  rtaArray.reverse();
}
console.log("rtaArray",rtaArray);

const rtaString = parseInt(['D','i','e','g','o']);
//rtaString.toLowerCase();
if(typeof rtaString === 'string'){
  rtaString.toLowerCase();
}
console.log("rtaSring",rtaString);
