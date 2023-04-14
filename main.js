let x = false

const addtoZero = (array) => {

for(i = 0; i < array.length; i++) {
  for(j = i + 1; j < array.length; j++) {
    if(array[i] + array[j] === 0){
      x = true
    }
  }
} console.log(x)
}

addtoZero([1, 4, 11, 2, 37, -4])

let addtoZeroRuntime = 'O(n^2)'


function hasUniqueCharacters(str){
    let arr = str.split("")
    let usedLet = []
    for (let i = 0;i<arr.length;i++){
      if (usedLet.includes(arr[i])){
        return false
      } else {
        usedLet.push(arr[i])
        console.log(usedLet)
      }
    }return true
      }

  console.log(hasUniqueCharacters('Hello'))

  let hasUniqueCharactersRuntime = 'O(n)'



  const isaPangram = (string) => {
    if (typeof string !== 'string') {
      return 'It must be a string.'
    }
    const result = new Set()
    for (const ch of string.toUpperCase()) 
    {
      if (/[A-Z]/.test(ch)) 
      {
          result.add(ch)
      }
    }
    return result.size === 26
  }
  
  console.log(isaPangram('The quick brown fox jumps over the lazy dog'))

  let isaPangramRuntime = 'O(1)'




  function longestWord(array)
  {
    let max_str = array[0].length;
    let ans = array[0];
    for (let i = 1; i < array.length; i++) {
        let maxi = array[i].length;
        if (maxi > max_str) {
            ans = array[i];
            max_str = maxi;
        }
    }
    return ans.length;
}

console.log(longestWord(['hi', 'hello']))

let longestWordRuntime = 'O(n)'
  