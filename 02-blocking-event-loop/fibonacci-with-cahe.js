setTimeout(() => {
  console.log("Timeout");
}, 0);

const cashe = new Map();

// function fib(n) {
//   return new Promise((res, rej) => {
//     if (n === 0 || n === 1) {
//       return res(n);
//     }
//     if (cashe.has(n)) {
//       return res(cashe.get(n));
//     }
//     setImmediate(() => {
//       Promise.all([fib(n - 1), fib(n - 2)])
//       .then(([fib1, fib2]) => {
//         cashe.set(n, fib1 + fib2)
//         res(fib1 + fib2)

//       });
//     });
//   });
// }
function fib(n) {
  return new Promise((res, rej) => {
    if (n === 0 || n === 1) {
      return res(n);
    }
    if (cashe.has(n)) {
      return res(cashe.get(n));
    }
    setImmediate(() =>
      fib(n - 1).then((fib1) =>
        fib(n - 2).then((fib2) => {
          cashe.set(n, fib1 + fib2);
          res(fib1 + fib2);
        })
      )
    );
  });
}

fib(400).then((res) => console.log(res));
