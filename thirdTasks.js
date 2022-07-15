//Task 1

// const toyota1 = {
//   model: "Toyota",
//   type: "Camry",
//   logModel() {
//     console.log(this.model, this.type);
//   },
// };

// const toyota2 = {
//   model: "Toyota",
//   type: "Rav4",
// };

// toyota1.logModel.call(toyota2);

//Task 2

// const flights = {
//   flights: [],

//   priorityFlights: [],

//   scheduleFlight(flight) {
//     this.flights.push(flight);
//   },

//   removeFlight(flight) {
//     this.flights = this.flights.filter(flightFilter.bind(this));
//     function flightFilter(f) {
//       if (flight === f) {
//         return this.priorityFlights.includes(flight);
//       }
//       return true;
//     }
//   },

//   makePriorityFlight(flight) {
//     this.priorityFlights.push(flight);
//   },
// };

// flights.scheduleFlight("1");

// flights.makePriorityFlight("1");

// flights.removeFlight("1");

// console.log(flights.flights);

// Task 3

// function CarConstructor(model, year) {
//   if (new.target) {
//     this.mode = model;
//     this.year = year;
//   } else {
//     return new CarConstructor(model, year);
//   }
// }

// let mers = new CarConstructor("mers", "amg");
// console.log(mers);

//Task 4

// const objArr = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];

// function logName() {
//   console.log(this.name);
// }

// objArr.map((item) => {
//   item.foo = logName;
// });

// console.log(objArr);

//Task 5

// const arrayOfObjectNames = [{ name: "1" }, { name: "2" }, { name: "3" }];

// function logArrayObjectNames() {
//   console.log(this.name);
// }
// arrayOfObjectNames.forEach((element) => {
//   logArrayObjectNames.bind(element)();
// });

//Task 6
// const arrayOfObjectNames = [{ name: "1" }, { name: "2" }, { name: "3" }];
// function logArrayObjectNames() {
//   console.log(this.name);
// }

// const mappedFunc = arrayOfObjectNames.map((item) => {
//   return logArrayObjectNames.bind(item);
// });
// console.log(mappedFunc);

// mappedFunc.forEach((i) => i());

//Task 7

// const exampleOfAlreadyCreatedObject = {
//   id: 1,
//   model: "Toyota",
//   year: "1996",
//   color: "red",
//   driveTrain: "4x4",
// };

// function CreateCar(id, model, year, color, driveTrain) {
//   this.id = id;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.driveTrain = driveTrain;
// }

// const inventory = {
//   cars: [],

//   addCar(car) {
//     this.cars.push(car);
//   },

//   removeCar(id) {
//     this.cars = this.cars.filter((item) => {
//       return item.id !== id;
//     });
//   },

//   listCars() {
//     this.cars.forEach((item) => {
//       console.log(item);
//     });
//   },

//   listCarsByConditionCallback(conditionCallback) {
//     this.cars.map((item) => {
//       if (conditionCallback(item)) {
//         console.log(item);
//       }
//     });
//   },
// };

// inventory.addCar(new CreateCar(1, "Toyota", "1996", "red", "4x4"));
// inventory.addCar(
//   new CreateCar(2, "Mercedes", "2000", "white", "rear wheel drive")
// );
// inventory.addCar(new CreateCar(3, "BMW", "2020", "black", "rear wheel drive"));
// inventory.removeCar(2);
// inventory.listCars();
// inventory.listCarsByConditionCallback(
//   (car) => car.model === "BMW" && car.year === "2020"
// );

// Task 8
// function Song(artist, song) {
//   this.artist = artist;
//   this.song = song;
//   this.play = function () {
//     return `${this.artist} playing ${this.song}`;
//   };
// }

// let song1 = new Song("pinkfloyd", "dle yaman");
// song1.play();
// console.log(song1.play());

//Task 9

// mkdir foldername
// cd foldername
//git init
// git branch branchname

// Task 10

// mkdir workshop
// cd workshop
// git init
// touch extra.js
// gir add .
// git commit -m "add a file"
// git branch rename_me
// git branch delete_me
// git branc -m rename_me rename_branch
// git branch -d delete_me

//Task 11
// checkKnow.foo.logName(); - this-y foo e , bayc chka surname, unenq menak name dra hamar undefined
// checkKnow.boo(); - qani vor arrow function e ira thisy tvyal paragayum boo functionni thisn e, dra hamar checkKnow
