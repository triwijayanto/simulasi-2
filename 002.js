/*
------------
LOST NUMBERS
------------

PROBLEM
=======
lostNumbers adalah sebuah function yang akan menerima tiga parameter.
Tiga parameter tersebut adalah tiga angka yang berbeda.
Function akan menampilkan di log setiap angka diantara angka terkecil dan angka terbesar dari antara ketiga angka tersebut.
Hindari menampilkan angka yang merupakan salah satu dari tiga angka parameter tersebut.

Contoh:

first = 6, second = 1, third = 3
berarti, function akan menampilkan di console 1 per 1 angka:
2
4
5

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan Math.max, Math.min, .apply, .bind, .call
- Dilarang menggunakan spread operator (abaikan jika tidak tahu ini apa, belum penting untuk sekarang :))
- Dilarang menggunakan regex metode apapun
*/

function lostNumbers(first, second, third) {
  //deklarasi array
  var tampung = []
  var first = first
  var second = second
  var third = third
  tampung.push(first,second,third)
  
  // console.log(tampung)

  //sortir array
  for(var i = 0 ; i < tampung.length ; i++){
    //console.log(i)
    for(var j = i+1 ; j < tampung.length ; j++){
      var urut = tampung[i]
      if(tampung[j] < tampung[i]){
        tampung[i]=tampung[j]
        tampung[j]=urut
      }
    }
  }
  // console.log(tampung)                     //array
  // console.log(tampung[0])                  //first array
  // console.log(tampung[tampung.length-1])   //last array
  
  //membuat array baru yg belum ada
  var arrayBaru = []
  for(var k = tampung[0] ; k <= tampung[tampung.length-1] ; k++ ){
    arrayBaru.push(k)
  }

  //filter nilai
  for (var l = 0 ; l < arrayBaru.length ; l++){
    if(arrayBaru[l]!==first && arrayBaru[l]!==second && arrayBaru[l]!==third ){
      console.log(arrayBaru[l])
    }     
  }
  console.log()//spasi

}

lostNumbers(1, 3, 5);
// 2
// 4

lostNumbers(4, 6, 2);
// 3
// 5

lostNumbers(100, 108, 105);
// 101
// 102
// 103
// 104
// 106
// 107

lostNumbers(6, 5, 3);
// 4

lostNumbers(3, 1, 2);
// (TIDAK ADA YANG DITAMPILKAN CONSOLE)
