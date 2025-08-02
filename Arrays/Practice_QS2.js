let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Removed : ",companies.shift());
companies.splice(1,1,"OLA");
companies.push("AMAZON");
console.log(companies);