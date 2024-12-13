// reduce
// reduces the iterable to a accumulated value

const num = [1,2,3,4,5,6]

const i=0
const sum = num.reduce((accumulator , curr)=> {
    console.log(`${accumulator} , ${curr}`)
    return accumulator+curr }
    , i )

console.log(sum)
// initial value is passed to accumulator which afterwards takes the value it had in prev iteration , in this case sum of n-1th term

