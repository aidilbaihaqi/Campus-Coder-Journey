// NaN (Not a Number)
console.log(typeof(NaN))

// String
let name = "Aidil Baihaqi"
console.log(typeof(name))

// String Index and Length
console.log(name[1])
console.log(name.length) 

// String Methods 
console.log(name.toUpperCase())
console.log(' hello world'.trim().toUpperCase())

// String Method with Arguments
let greeting = "Aidil Baihaqi";
console.log(greeting.indexOf('Baihaqi')); // bakal ngeluarin output address indexnya`

// Slice Method
let str = "superduperpower";
console.log(str.slice(0,5));

// Replace Method
let weirdLaugh = "hohoho you funny!";
console.log(weirdLaugh.replace('hohoho', 'haihaihai'));

// Template Literals
let univ = 'UMRAH';
console.log(`Saya berkuliah di ${univ}`);

// Tipe data null
let yudha = null;
console.log(typeof(yudha));

// Tipe data undefined
let pras;
console.log(typeof(pras));

// Math Object
console.log(Math.PI); // nilai pi
console.log(Math.E); // nilai e
console.log(Math.abs(-123)); // nilai mutlak
console.log(Math.floor(5.9)); // bulatin kebawah
console.log(Math.round(5.9)); // bulatin keatas
console.log(Math.random());