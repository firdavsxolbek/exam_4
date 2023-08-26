// 2-masala

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString("salom dunyo")); 

// 3-masala

// function extractNumbersAndMerge(string) {
//     let numbers = string.match(/\d+/g);
//     let mergedString = string.replace(/\d+/g, "");
//     return [numbers, mergedString];
//   }

//   let str_1 = "1java2script3 5deve6lo4per";
//   let result = extractNumbersAndMerge(str_1);
//   console.log(result[0]);
//   console.log(result[1]);


// 1 - masala

function removeWordByIndex(arr, index) {
    arr.splice(index, 1);
    return arr;
}

var words = ["I", "study", "JavaScript", "right", "now"];
console.log(removeWordByIndex(words, 3));
