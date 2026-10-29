let arr = [10, 20, 30, 40, 50];

// Get indexes using for of and forEach
for (const [index, values] of arr.entries()) {
  console.log(index, values);
}

arr.forEach((value, index) => {
  console.log(index, value);
});
