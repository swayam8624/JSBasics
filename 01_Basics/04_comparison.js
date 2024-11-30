console.log(2>1 , 2>=1 , 2<=1 , 2==1 , 2!=1 , "2">"1" , "2">1 , "02">1 , "0">1 , Number("2") , Number("02"));
// can be done for different data types but not encouraged , always compare same datatypes

console.log(null>0 , null==0 , null>=0 , Number(null));
// == and other comparators works differently  , the comparators convert the null to 0 hence the result , which is not the case for ==
console.log(undefined==0 , undefined<0 , undefined>0 , undefined>=0 , Number(undefined));
// avoid these kinds of conversions
// ===
console.log("2" === 2);