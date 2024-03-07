// Extract the last four characters from the string below 'extravaganza'
let a = "extravaganza"
console.log({character:a[8]});
console.log({character:a[9]});
console.log({character:a[10]});
console.log({character:a[11]});

//Insert the following string at the fourth index of the below variable:"eat"const food="The quick fox jumped over the lazy dog"
const food = "The quick fox jumped over the lazy dog"
const insertstring = "eat"
const secondfood = food.substring(0,4) + insertstring + food.substring
console.log(secondfood)

//Count how many times the following string appers in the string variable:1."the"2."brown"const story="The quick brown for jumps over the lazy dog"
const story = "The quick brown fox jumps over the lazy dog";
function countWord(story){
    const result ={};
    const arr = story.split('');
    for(let Word of arr){
        if(result[Word]){
            result[Word]++;
        }else{
            result[Word] = 1;
        }
    }
    return result;
}
console.log(countWord('The brown the'));

//Using JavaScript,find the following words from the following strings:1."are"const string1 = "The pupils are reading in the library";2."sitting"const string2 ="The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const string = "The child was sitting on the table before it fell";
console.log({index:string1.indexOf(`are`)});
console.log({index:string.indexOf(`sitting`)});

//convert the string into the specified format:1.Uppercase: "Wonderful"2.LowerCase:"amazing","UndERneath"3.Title case "A wonderful world"

let name1 = "Wonderful" ;
let name2 = "amazing" ;
let name3 = "UndERneath";
let name4 = "A wonderful world";
console.log(name1.toUpperCase());
console.log(name2.toLowerCase());
console.log(name3.toLowerCase());
console.log(name4.toUpperCase());

// function toTitleCase(str) {
//     if(!str) {
//         return""
//     }
//     return str.toLowerCase().split(``).map(function(word) { 
//         return word.charAt(0).toUpperCase().concat(word.substr(1));
//     }).join('');
// }
// console.log(toTitleCase('A wonderful world'));

