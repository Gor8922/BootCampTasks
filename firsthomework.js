// //FIRSt DAY TASK
// //Task 1

// function makeQuestion(firstOprand, operator, secondOperand) {
//   return `What is ${firstOprand} ${operator} ${secondOperand} ?`;
// }

// console.log(makeQuestion("Aca", "+", "Aca"));

// //Task 2

// let obj = {};
// obj.name = "Gor";
// obj["age"] = 25;
// Object.defineProperty(obj, "hobby", {
//   value: "chess",
//   configurable: true,
//   writable: true,
//   enumerable: true,
// });
// console.log(obj);

// //3

// function oddElem(arr) {
//   let result = {};
//   arr.forEach((element) => {
//     result[element] = result[element] + 1 || 1;
//   });
//   for (let key in result) {
//     if (result[key] === 1) {
//       console.log(key);
//     }
//   }
// }

// oddElem(["a", "a", "b", "a"]);

// //Task 4

// function minMax(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   console.log([min, max]);
// }
// minMax([14, 28, 3, 8, 2]);

// //Task 5

// function oddAndEvenNumbers(arr) {
//   let odd = [];
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     } else odd.push(arr[i]);
//   }
//   console.log(odd);
//   console.log(even);
// }

// //oddAndEvenNumbers([1, 2, 3, 4, 5, 6, 8, 52, 14, 36, 25, 78, 82, 99, 96, 44]);

// //Task 6
// function oddElem(arr) {
//   let result = {};
//   let final = [];
//   arr.forEach((element) => {
//     result[element] = result[element] + 1 || 1;
//   });
//   for (let key in result) {
//     if (result[key] === 1) {
//       final.push(key);
//     }
//   }
//   return final;
// }
// console.log(oddElem([1, 1, 2, 3, 3, 4, 4, 5]));

// //Task 7

// function commonWords(arg1, arg2) {
//   for (let el of arg1) {
//     if (arg2.includes(el)) {
//       console.log([el]);
//     }
//   }
// }
// commonWords(["dog", "cat", "parrot"], ["lizard", "rat", "cat"]);

// //Task 8

// function containArr(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let has = true;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) === -1) {
//       has = false;
//       break;
//     }
//   }
//   return has;
// }

// console.log(containArr(["monday", "tuesday"], ["tuesday"]));

// //Task 9

// function sortArr(arr) {
//   let numbers = [];
//   let letters = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       numbers.push(arr[i]);
//     } else {
//       letters.push(arr[i]);
//     }
//   }
//   let result = numbers.concat(letters);
//   for (let n = 0; n < result.length; n++) {
//     for (let i = 0; i < result.length - 1; i++) {
//       if (result[i] > result[i + 1]) {
//         let temp = result[i];
//         result[i] = result[i + 1];
//         result[i + 1] = temp;
//       }
//     }
//   }
//   return result;
// }
// console.log(sortArr(["b", 6, "a", "q", 7, 2]));

// //Task 10

// function basedOnIndex(arr1, arr2) {
//   let result = [];
//   for (let el of arr2) {
//     result.push(arr1[el]);
//   }
//   console.log(result);
// }

// basedOnIndex(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4]);

// //Task 11

// function reverse(array) {
//   let createdArr = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     createdArr.push(array[i]);
//   }
//   console.log(createdArr);
// }

// reverse([4, 5, 6]);

// //ADVANCED

// //Task 1

// function lookUp(string, lookup) {
//   let result = [];
//   for (let el of lookup) {
//     let count = 0;
//     for (let key of string) {
//       if (key === el) {
//         count++;
//       }
//     }
//     result[el] = count;
//   }
//   return result;
// }
// console.log(
//   lookUp(["i", "i", "sadakhlo", "i"], ["i", "love", "sadakhlo", "esminich"])
// );

// //Task 2

// function sumMinMax(arr) {
//   let result;
//   let finalObj = {};
//   let min = 0;
//   let max = 0;
//   for (let n = 0; n < arr.length; n++) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   result = arr;
//   for (let i = 0; i < result.length; i++) {
//     max += result[i];
//     min += result[i];
//   }
//   max = max - result[0];
//   min = min - result[result.length - 1];

//   finalObj.min = min;
//   finalObj.max = max;
//   return finalObj;
// }

// console.log(sumMinMax([3, 2, 1, 4]));

// //Task 3

// function matrix(arr) {
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//     i = i + 3;
//   }
//   return result;
// }

// console.log(matrix([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// //Task Davit

// const payments = [
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe", // Name of the student
//     payedAmount: 1600, // Amount payed with this transaction
//     year: 2020, // The payment year
//   },
//   {
//     studentId: 1, // Unique for each student
//     studentName: "John Doe",
//     payedAmount: 1500,
//     year: 2021,
//   },
//   {
//     studentId: 1, // Unique for each student
//     studentName: "John Doe",
//     payedAmount: 1400,
//     year: 2022,
//   },
//   {
//     studentId: 1, // Unique for each student
//     studentName: "John Doe",
//     payedAmount: 1300,
//     year: 2023,
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1500,
//     year: 2020,
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1400,
//     year: 2021,
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1300,
//     year: 2023,
//   },
//   {
//     studentId: 2, // Unique for each student
//     studentName: "Lu Kang",
//     payedAmount: 1200,
//     year: 2023,
//   },
// ];

// function maxPayment(obj) {
//   let pay = [];
//   for (let el of obj) {
//     pay.push(el.payedAmount);
//   }

//   let maxPay = Math.max(...pay);
//   console.log(maxPay);
// }

// maxPayment(payments);

// function sumOfPayment(obj) {
//   let sum = 0;
//   for (let el of obj) {
//     sum += el.payedAmount;
//   }
//   console.log(sum);
// }
// sumOfPayment(payments);

// function getPaymentCount(obj) {
//   let res = obj.filter((item) => {
//     if (item.payedAmount >= 1500) {
//       return item;
//     }
//   });
//   return res.length;
// }
// console.log(getPaymentCount(payments));

// function average(obj) {
//   let sum = 0;
//   obj.forEach((element) => {
//     sum += element.payedAmount;
//   });
//   console.log(sum / obj.length);
// }
// console.log(average(payments));

// function sumOfAllStudentsPayment(obj) {}
// sumOfAllStudentsPayment(payments);

// function studentsPaymentTotal(obj) {
//   return obj.reduce((prev, curr) => {
//     if (prev[curr.studentName]) {
//       prev[curr.studentName] += curr.payedAmount;
//     } else {
//       prev[curr.studentName] = curr.payedAmount;
//     }
//     return prev;
//   }, []);
// }

// console.log(studentsPaymentTotal(payments));

// const evaluations = [
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 70,
//   },
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 60,
//   },
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 50,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 60,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 50,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 40,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 45,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 35,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 25,
//   },
// ];

// function average(arr) {
//   let newObj = {};
//   let resArr = [];
//   for (let el of arr) {
//     if (newObj[el.studentName]?.length) {
//       newObj[el.studentName].push(el.score);
//     } else {
//       newObj[el.studentName] = [el.score];
//     }
//   }

//   for (let elem of Object.values(newObj)) {
//     let result = 0;
//     elem.forEach((element) => {
//       result += element;
//     });
//     resArr.push(result / elem.length);
//   }
//   let finishRes = Math.min(...resArr);
//   return finishRes;
// }

// console.log(average(evaluations));

// function minScore(arr) {
//   let minArr = [];
//   arr.forEach((element) => {
//     minArr.push(element.score);
//   });
//   return Math.min(...minArr);
// }

// console.log(minScore(evaluations));

// function listOfStud(arr) {
//   let maxSixty = arr.filter((item) => {
//     if (item.score > 60) {
//       return item;
//     }
//   });
//   return maxSixty;
// }
// console.log(listOfStud(evaluations));
