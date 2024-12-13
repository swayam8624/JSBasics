let mynums = [1,2,3,4,5,6,7,8,9,10]

mynums = mynums.map((num)=>num+10) 
console.log(mynums)

//chaining
mynums = mynums.map((num)=> num*10)
        .map((num)=>{
            if(num>150)
              return num+11
            })
            .filter((num)=> num<190) 

console.log(mynums)