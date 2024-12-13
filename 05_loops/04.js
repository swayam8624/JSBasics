const coding = ["js" , "ruby" , "java", "python" , "cpp" ]

const values = coding.forEach((item)=>{
    console.log(item)
    // return item it wont return the values 
})

console.log(values)

// if you want to return  , use filter:

const mynums = [1,2,3,4,5,6,7,8,9]

const value = mynums.filter((num)=> num > 4)
console.log(value)
//or
const nweNums = []
mynums.forEach((num)=>{
    if(num>4)
        nweNums.push(num)
})
console.log(nweNums)

