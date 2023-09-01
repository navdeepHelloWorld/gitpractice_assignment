let str="eye";
let pal="";
for(let i=str.length;i>=0;i--){
    pal+=str[i]
}
if(str==pal){
    console.log("This is palindrome")
}
else{
    console.log("This is not palindrome")
}
