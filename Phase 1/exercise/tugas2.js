let array1 = [[1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10],
              [11, 12, 13, 14, 15],
              [16, 17, 18, 19, 20]]
              
let array2 = [[1,2,3,4],
              [5,6,7,8],
              [9, 10, 11, 12],
              [13, 14, 15,16]]              
              
let spiral = (result,array) => {
  if(array.length === 0){
    return result 
  }
  // baris pertama ke kanan, susunan array berubah
  result = result.concat(array.shift());

  // kebawah, diambil paling belakang
  for (let i = 0 ; i < array.length ; i++){
    let belakang = array[i].pop()
      result.push(belakang)
    }
  // kekiri, ambil array paling belakang, terus di balik
  result = result.concat(array.pop().reverse());
    
  // keatas
  let up = [];
    for (let j = 0 ; j < array.length ; j++){
      var depan = array[j].shift()
      up.push(depan)
    }
    
    result = result.concat(up.reverse());
    return spiral(result,array)
}


console.log (spiral([],array1))
console.log (spiral([],array2))                


              


































