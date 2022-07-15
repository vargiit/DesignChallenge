const memoize = (cb) => {
  let cache = [];
  return (...args) => {
    if (cache[JSON.stringify(args)]) {
      console.log(cache);
      console.log("Returning from the cache");
      return cache[JSON.stringify(args)];
    } else {
      cache[JSON.stringify(args)] = cb(...args);
      console.log("Result being calculated");
      return cache[JSON.stringify(args)];
    }
  };
};

const add = (num1, num2) => {
  return num1 + num2;
};

const memoizeAdd = memoize(add);
// add(1, 2);
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(6, 2));

const a = [1, 3, 4];
