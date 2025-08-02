let GameNumber=25;
let UserNo=prompt("Guess any number!!!");
let exit=0;
while(UserNo != GameNumber){
    exit=prompt("If you wanna exit game press 1 else continue with 0");
    if(exit==1) break;
    else UserNo=prompt("Opps!!! wrong number try again!!");
}
console.log("Congratulation!!! You Won!!")