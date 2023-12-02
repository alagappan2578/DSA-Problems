let boolean = "rank";

if(boolean == "ankr"){
    console.log("true")
}else{
    console.log("false")
}
console.log(boolean.length)

let word1 = "aaa"

let word2 = "abxd"
console.log(word2.includes(word1.charAt(0)))

function sortArray(array) {
    return array.map(word => word.split('').sort().join(''));
  }
  
  function stringAnagram(dictionary, query) {
    const sortedDictionary = sortArray(dictionary);
  
    const anagramCounts = [];
    const dictionaryMap = {};
  
    for (let i = 0; i < sortedDictionary.length; i++) {
      const word = sortedDictionary[i];
      if (dictionaryMap[word]) {
        dictionaryMap[word]++;
      } else {
        dictionaryMap[word] = 1;
      }
    }
  
    for (let i = 0; i < query.length; i++) {
      const queryWord = query[i];
      const sortedQuery = queryWord.split('').sort().join('');
  
      if (dictionaryMap[sortedQuery]) {
        anagramCounts.push(dictionaryMap[sortedQuery]);
      } else {
        anagramCounts.push(0);
      }
    }
  
    return anagramCounts;
  }


  function nearlySimilarRectangles(sides) {
    const N = sides.length;
    let count = 0;
    const ratioFreq = {};
  
    for (let i = 0; i < N; i++) {
      const ratio = sides[i][0] / sides[i][1];
      if (ratioFreq[ratio]) {
        count += ratioFreq[ratio];
        ratioFreq[ratio]++;
      } else {
        ratioFreq[ratio] = 1;
      }
    }
  
    return count;
  }
  
  