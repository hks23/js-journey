console.log(null >   0)
console.log(null ==  0)
console.log(null >=  0)

/*The reason is that an equality check == amd comparison > < >= <= work differently
Comparison convert null to a number , treating it as 0 
that's why (3) null >= 0 is true and (1) null > 0 is false */

console.log(undefined >   0)
console.log(undefined ==  0)
console.log(undefined >=  0)

console.log(2 === "2")
