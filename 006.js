/*

------------------------
Count Letter Recursively
------------------------

PROBLEM
========
Tersedia 2 input: suatu kata dan suatu huruf
Carilah berapa kali huruf muncul di dalam kata.
Gunakan rekursif untuk menyelesaikan soal ini.

Contoh
1) sentence = 'the quick brown fox', letter = 'o'    -->     2

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function countLetterRecursive
- Dilarang mengubah tipe data parameter
- Dilarang menggunakan looping (while, for, do-while, dan lain-lain)
*/

function countLetterRecursive(sentence, letter) {
  //basecase
  var depan = sentence[0]
  var sisa = sentence.slice(1)
  // console.log(sisa)

  // basecase
  if(sentence.length === 0){
    return 0
  } else if (depan !== letter){
    return countLetterRecursive(sisa,letter)
  } else if (depan === letter){
    return 1 + countLetterRecursive(sisa,letter)
  }
}

console.log(countLetterRecursive('12104123', '1')); // 3
console.log(countLetterRecursive('the quick brown fox', 'o')); // 2
console.log(countLetterRecursive('lorem ipsum', 'a')); // 0
console.log(countLetterRecursive('hahaha', 'h')); // 3
console.log(countLetterRecursive('', 'x')); // 0