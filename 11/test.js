const myarray = []
// %DebugPrint(myArr) available in v8-debug engine



// Output ==> Continuous/packed , Holey
// SMI (small integer)
// Packed element
// Double (float , string , function)

const arrtwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS --> best kind , only integers

arrtwo.push(6.9)
// PACKED_DOUBLE_ELEMENTS
// once downgraded to double , cannot be upgraded to smi even if we delete 6.9

arrtwo[10] = 11
// HOLEY_ELEMENTS -> have gaps

console.log(arrtwo, arrtwo.length, arrtwo[0])

// bound check , returns undefined on index>length
// if inside bound and not defined -> hasOwnProperty(arrtwo , 9)
// hasOwnProperty(arrtwo.prototype, 10)
// hasOwnProperty(Object.prototype , 10)

// holes are very expensive as the hasOwnProperty are one of the mostexpensive operations

// SMI > Double > Packed
// H_smi > s_double > h_packed

const arrthree = new Array(3)
// just 3 holes , holey_smi elements
arrthree[0] = '1' // h_packed --->most downgraded , once holey , cannot be recovered

// better approach should be 
const arrfour = []
arrfour.push('1') // now it is still bad , but packed continuous , not as bad as holey , if u push Nan , infinity etc , it becomes double , holey

// for , for-of , forEach --> use these instead of ur own methods .