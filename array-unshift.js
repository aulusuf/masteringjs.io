/*
unshift the function to add
one or more element to the
beginning of the array
*/

const array = [3, 4, 5];
array.unshift(1, 2);
console.log(array);
//[1,2,3,4,5]

/*
if you want to unshift array
(literally array), use unshift([1,2])
instead. it will not flatten
the array like above
*/

const array1 = [3, 4, 5];
array1.unshift([1, 2]);
console.log(array1);
//[1,2,3,4,5]

/*
if u want to unshift the element
of an array to the array, you
should use spread operator
*/

const array3 = [3, 4, 5];
const array4 = [1, 2];
array3.unshift(...array4);
console.log(array3);
//[1,2,3,4,5]
