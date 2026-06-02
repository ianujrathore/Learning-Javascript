let str = "racecar"

const reversed = str.split("").reverse().join("");

console.log(str)

if(reversed == str){
    console.log("Yes palindrome")
} else {
    console.log("Not Plaindrome")
}