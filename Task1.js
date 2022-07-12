[18:56] Ankit Kumar
let value="Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
const vowelCount = str => {
  let vowels = /[aeiou]/gi;
  let result = str.match(vowels);
  let count = result.length;
  return count;
};
const splitValue=value.replace(/,/g, '').split(" ");
let lengthValue= 0;
let splitWord=[]
splitValue.sort(function(a, b){
  return b.length - a.length;
});

 for(let i=0;i<splitValue.length;i++){
  if(lengthValue <=splitValue[i].length){
      lengthValue=splitValue[i].length
        let hey=vowelCount(splitValue[i])
    const obj = {name: splitValue[i],vowel:hey}
      splitWord.push(obj)
  }
 }
let new1=splitWord.reduce((acc, shot) => acc = acc > shot.vowel ? acc : shot, 0);
console.log(new1,"new1")
//  console.log(splitWord,"splitWord")

