// if-else
/*
if(condition == true){}
else{}
*/
// uses relation operators --> ( > < >= <= == != === !==)
// in above case == is not type sensitive 2=="2" is true , to avoid this use === and !==

const score = 200
if(score>100){
    const power = "Fly"
    console.log(`${power}`)
}
// console.log(`${power}`) power not defined outside if scope


const balance = 1000
if(balance>100) console.log("test");  // for single liners


// if-elseif-else
if(balance<500)
{
    console.log("low balance")
}
else if (balance<750 && balance>=500)
{
    console.log("hmmm")
}
else{
    console.log("Nice")
}

