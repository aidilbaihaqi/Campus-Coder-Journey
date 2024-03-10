// Call Stack Function -> mekanisme untuk melacak lokasi script yang memanggil banyak fungsi-fungsi. ini diperlukan untuk memantau kecepatan websitemu
const perkalian = (x,y) => x*y
const akar = (x) => perkalian(x, x)
const pythagoras = (a, b, c) => {
  return akar(a) + akar(b) === akar(c)
}

pythagoras(3,4,5)

// Javascript is a single thread / Asynchronous.
// Single Thread -> sebuah program yang hanya dapat menjalankan satu proses dalam satu waktu.
console.log('Bakal muncul pertama')
setTimeout(() => {
  console.log('Ini udah masuk memory proses tapi dijalankan setelah 3 detik jeda')
}, 5000);
console.log('Bakal muncul kedua')