// //HOMEWORK SECOND DAY

// //Task 1

// function doubleNumbers(arr) {
//   return arr.map((el) => el * 2);
// }
// console.log(doubleNumbers([2, 5, 100]));

// // Task 2

// function stringItUp(arr) {
//   return arr.map((el) => el.toString());
// }

// console.log(stringItUp([2, 5, 100]));

// // Task 3

// function capitalizeNames(arr) {
//   let res = arr.map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase());
//   return res;
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// //Task 4
// function namesOnly(arr) {
//   return arr.reduce((acc, curr) => {
//     acc.push(curr.name);
//     return acc;
//   }, []);
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// //Task 5
// function makeStrings(arr) {
//   return arr.reduce((acc, curr) => {
//     if (curr.age > 18) {
//       acc.push(`${curr.name} can go to The Matrix`);
//     } else {
//       acc.push(`${curr.name} is under age!!`);
//     }
//     return acc;
//   }, []);
// }

// console.log(
//   makeStrings([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// //Task 6

// const input = [1, -4, 12, 0, -3, 29, -150];
// function even(arr) {
//   return arr.reduce((acc, curr) => {
//     if (curr >= 0) {
//       acc += curr;
//     }
//     return acc;
//   }, 0);
// }

// console.log(even(input));

// // Task 7

// const input7 = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jeniffer",
//     age: 65,
//   },
// ];

// function minMax(arr) {
//   let min, max;
//   let result = arr.reduce((acc, curr) => {
//     acc.push(curr.age);
//     return acc;
//   }, []);
//   min = Math.min(...result);
//   max = Math.max(...result);
//   return [min, max, max - min];
// }

// console.log(minMax(input7));

// // Task 8

// const input8 = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// function flatt(arr) {
//   let res = arr.flat();

//   let final = res.reduce((acc, curr) => {
//     acc[curr] = acc[curr] + 1 || 1;
//     return acc;
//   }, {});
//   console.log(final);
// }

// console.log(flatt(input8));

// //Task9

// function task9(arr) {
//   let final = arr.reduce((acc, curr) => {
//     acc[curr] = acc[curr] + 1 || 1;
//     return acc;
//   }, {});
//   for (let key in final) {
//     if (final[key] > arr.length / 2) {
//       return key;
//     }
//   }
// }

// console.log(task9([3, 2, 3]));

// //Task 10

// function task10(arr) {
//   let final = arr.reduce((acc, curr) => {
//     acc[curr] = acc[curr] + 1 || 1;
//     return acc;
//   }, {});
//   let c = Object.entries(final);

//   let sorted = c.sort((a, b) => b[1] - a[1]);
//   console.log(sorted[2][0]);
// }

// console.log(task10([2, 2, 2, 1, 1, 4, 4, 4, 4]));

// //Task 11

// function task11(str, arr) {
//   let joined = arr.join("");
//   return joined.includes(str);
// }

// console.log(task11("iloveleetcode", ["i", "love", "leetcode", "apples"]));

// //Task 12

// const phoneCountryCodes = {
//   "+374": "Armenia",
//   "+375": "Somali",
//   "+376": "Russia",
//   "+377": "Hoktemberyan",
// };

// const arrOfObjects = [
//   {
//     name: "sarah",
//     age: 32,
//     phoneNumber: "+374000000",
//     relation: "nelly",
//   },
//   {
//     name: "nelly",
//     age: 11,
//     phoneNumber: "+3750020000",
//     relation: "sarah",
//   },
// ];

// function task12(phoneCountryCodes, arr) {
//   arr.map((el, i) => {
//     el.name = el.name.toUpperCase();
//     el.country = phoneCountryCodes[el.phoneNumber.slice(0, 4)];
//     el.relation = arr[i];
//   });
//   return arr;
// }
// console.log(task12(phoneCountryCodes, arrOfObjects));
