function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); // cancel the last call
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log(`Searching for`, query);
};

const searchWithDebouce = debounce(search, 1000);

// Without debounce.
// search("Ha");
// search("Har");
// search("Hard");
// search("Hard J");
// search("Hard JS");
// search("Hard JS");

searchWithDebouce("Ha");
searchWithDebouce("Har");
searchWithDebouce("Hard");
searchWithDebouce("Hard J");
searchWithDebouce("Hard JS");
searchWithDebouce("Hard JS");
