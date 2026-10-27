// const user = {
//   name: "Naman",
//   age: 23,
//   isAdmin: true,
//   "current city": "Paris",
// }

// user.age = 31;
// user.hobby = "Coding";

// console.log(user)
// delete user.isAdmin
// console.log(user)

// console.log("age" in user)
// console.log(user.hasOwnProperty("age"))


// const product = {};

// Object.defineProperty(product, 'id', {
//   value: 101,
//   writable: false,      // Read-only
//   enumerable: true,     // Shows up in loops
//   configurable: false   // Cannot be deleted
// });

// console.log(product)

let obj = {
    name: 'Naman',
    age: 23,
    gender: 'male'
};

Object.defineProperty(obj, 'country', {
  value: "India",
  enumerable: false
})

// Only get county by obj.country because of enumerable: false
// console.log(obj)
// console.log(Object.keys(obj))
// console.log(obj.country); 

Object.defineProperty(obj, 'status', {
    value: 'active',
    // writable: false,
    configurable: false,
    enumerable: true
});

obj.status = 'inactive'; // Does not change due to `writable: false`
console.log(obj.status);
console.log(obj)