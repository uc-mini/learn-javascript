const VowelInString=(str)=>{
     let vowel=0;
    for(let i=0;i<=str.length;i++){
    if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u' || str.charAt(i)=='A' || str.charAt(i)=='E' || str.charAt(i)=='I' || str.charAt(i)=='O' || str.charAt(i)=='U'){
        vowel++;
    }
}
return vowel;
}
let count=VowelInString(prompt("Enter A String"));
console.log("Number Of Vowel : ",count);