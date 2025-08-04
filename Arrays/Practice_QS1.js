let marks=[12,56,98,89,78];
let sum=0;
for(let val in marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(avg);