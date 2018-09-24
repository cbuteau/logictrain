
// sample from ES6 page

// Promise.all(
//     ['module1', 'module2', 'module3']
//     .map(x => System.import(x)))
// .then(([module1, module2, module3]) => {
//     // Use module1, module2, module3
// });

Promise.all(['app/logic', 'app/render'].map(module => System.import(module)))
  .then(([LogicEngine, Renderer])) => {
      
  });
