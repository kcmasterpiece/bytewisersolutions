var arrayUint32 = new Uint32Array([process.argv[2]]);
var arrayUint16 = new Uint16Array(arrayUint32.buffer);
console.log(JSON.stringify(arrayUint16));

