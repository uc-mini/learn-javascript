//Q1
let arr=[87,93,64,99,86];
let op1=arr.reduce((res,curr)=>{
return res>curr?res:curr;
});
console.log(op1);
//Q2
let userno=prompt("enter a number");
let arr1=[];
for(let i=1;i<=userno;i++){
  arr1[i-1]=i;
}
let op2=arr1.reduce((res,curr)=>{
return res+curr;
});
console.log(op2);