/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
/*


*/
function detective (array) {
  var tampungAt = []
  var villain = []
  for(var i = 0 ; i<array.length ; i++){
    if(array[i]==='@'){
      tampungAt.push(array[i])
    }
    if(array[i]==='Villain'){
      villain.push(array[i])
    }
    
    if(tampungAt.length >= 3  ){
      return 'Ooops, you die. You got ' + villain.length + ' villains'
    } 
  } 
  return 'Nice work, detective! You got all villains: ' + villain.length

}

console.log(detective(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain'])) // Nice work, detective! You got all villains: 2
console.log(detective(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@'])) // Ooops, you die. You got 3 villains
console.log(detective(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain'])) // Ooops, you die. You got 2 villains