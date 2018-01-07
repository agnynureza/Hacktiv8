let getCombinations = (result,huruf) => {
  let kata = ''
  if (huruf.length === 0){
    return result
  }else {
    for (let i = 0; i < huruf.length ; i++){
        kata += huruf[i]
        result.push(kata)
    }
  }
  return getCombinations(result,huruf.slice(1))
}

console.log (getCombinations([],'cros'))
console.log (getCombinations([],'artic'))
console.log (getCombinations([],'darwin'))