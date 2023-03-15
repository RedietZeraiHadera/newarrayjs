//find the last element of the following arays

const arr1 = [3,7,34,90,12];
let arrnew1 = arr1.pop();
const arr2 = [true,"green","where",12,56];
let arrnew2 = arr2.pop();
console.log(arrnew1);
console.log(arrnew2);


//Write a JS program that will join the following array elements into a string
const myPets = ["Cow","Bird","snake","Dog"];
let text = myPets.toString();
console.log(text);

//Write a JS script to sort the following array items
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let newnums = arr3.sort(function(a, b){return a-b});
console.log(newnums);

//Write a program to remove duplicates from the following array.
var arr = ["apple", "mango", 
"apple", "orange", "mango", "mango"];


function removeDuplicates(arr) {
return arr.filter((item,
index) => arr.indexOf(item) === index);
}
function Duplicatesonly(arr) {
    return arr.filter((item,
    index) => arr.indexOf(item) !== index);
    }
    
console.log(removeDuplicates(arr));
console.log(Duplicatesonly(arr));
//Write a JS script to search for the following word in the array.
let arr5 = ["the","way","x",4];
if (arr5[1] ==["way"]){
    console.log("way")

}
else{
    (arr5[1]!=["way"])
    console.log("the search word was not found")
}


// Write a JS script to sort the following string
 let a = (string) =>{
    return string.split("").sort().join("");
 };
 console.log(a("sevink"))
