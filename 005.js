/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat ganjil
*/


function ganjilGenapAsianGames ( date, data ) {
  //handle date kosong
  if(date > 31 || date < 1){
    return 'invalid dates'
  }
  var count = 0
  for (var i = 0 ; i < data.length ; i++){
    // console.log(data.length)
    var obj = {
      // data: data[i],
      plat: data[i].plat,
      type: data[i].type
    }
    // console.log(data[i].type)
    var arr = ''
    for (var j = 0 ; j < data[i].plat.length ; j++){
      if(data[i].plat[j] == 1 || data[i].plat[j] == 2 || data[i].plat[j] == 3 ||data[i].plat[j] == 4 || data[i].plat[j] == 5 || data[i].plat[j] == 6 || data[i].plat[j] == 7 || data[i].plat[j] == 8 || data[i].plat[j] == 9 ){
        arr += data[i].plat[j]
      }
    }
      
    var akhir = arr.slice(-1)
 
    if(akhir%2===0){
      var bilanganAkhir = 'genap'
    } else {
      var bilanganAkhir = 'ganjil'
    }

    if(date%2 === 0){
      var bilanganDate = 'genap'
    } else if (date%2 === 1){
      var bilanganDate = 'ganjil'
    }
    
    // console.log(akhir + ' nilai: ' + bilanganAkhir + ', ' + date + ' nilai: ' + bilanganDate)
    
    if (obj.type === 'Mobil' && bilanganDate === 'genap' && bilanganAkhir === 'ganjil'){
      count += 1
    } else if (obj.type === 'Mobil' && bilanganDate === 'ganjil' && bilanganAkhir === 'genap'){
      count += 1
    }
  }
  return count
}


console.log(ganjilGenapAsianGames(30, [{
  plat: 'B 1234 ABC',
  type: 'Mobil'
}, {
  plat: 'A 2457 HE',
  type: 'Motor'
}, {
  plat: 'AB 87 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(26, [{
  plat: 'A 24 HE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 24 WE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 XOXO',
  type: 'Mobil'
}])) // 2

console.log(ganjilGenapAsianGames(1, [
  {
    plat: 'A 2431 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87112 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Motor'
  }
])) // 0

console.log(ganjilGenapAsianGames(32, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates

console.log(ganjilGenapAsianGames(0, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates