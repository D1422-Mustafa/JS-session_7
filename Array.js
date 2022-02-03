// var cars = ["Opel", "Audi", "BMW"];

// // console.log(cars);

// var cars2 = Array.of("Opel", "Audi", "BMW")

// // console.log(cars2);

// var cars3 = new Array("Opel", "Audi", "BMW")

// console.log(cars3);

// var num1 = new Array(2,10)
// // console.log(num1);
// var num2 = new Array(10)
// console.log(num2);


// var cars = ["Opel", "Audi", [1, 2,true], "BMW"];
// console.log(cars[0]);
// console.log(cars[2][2]);


// var cars = ["Opel", "Audi", [1, 2,true], "BMW"];

// cars[2] = "Mercedes"
// console.log(cars);


// const cars = ["Opel", "Audi", [1, 2,true], "BMW"];

// cars[2] = "Porsche"
// console.log(cars);


// cars[4] = "Toyota"
// console.log(cars);

// cars[10] = "Ferrari"
// console.log(cars);

// console.log(cars[8]); //undefined
// console.log(typeof cars[4]); //string


// const cars = ["Opel", ,"Audi",,,,"BMW"];
// console.log(cars);
// console.log(typeof cars);
// console.log(cars instanceof Array);


//length

// const fruits = ["banana", "orange", "apple"];
// console.log(fruits);
// console.log(fruits.length);

// fruits[6] = "Lemon"

// console.log(fruits);
// console.log(fruits.length);


//concat( methodu)

// const fruits = ["banana", "orange", "apple"];
// const vegetables = ["broccoli", "celery", "parsley", "artichoke"];

// console.log(fruits.concat(vegetables));
// console.log(fruits.concat("Fig",3,"Pear"));

// console.log(''+fruits);
// console.log(fruits.toString());


//sort methodu

// const daltones = ['Joe','Jack','William','Avarel'];
// console.log(daltones.sort());

// const num = [40, 100, 1, 5, 25, 10];
// // console.log(num.sort()); //string olarak sıralar.

// // console.log(num.sort((a,b)=> a - b)); //küçükten büyüğe sıralar.

// // console.log(num.sort((a,b)=> b - a)); //büyükten küçüğe sıralar.

// console.log(num.sort((a,b)=> a - b) [0])


//push pop

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Pears");
// console.log((fruits));
// fruits.push("Pears, pineapple", 2);
// console.log(fruits);

// console.log(fruits.pop());
// console.log(fruits.pop());
// console.log(fruits.pop());

// console.log(fruits);


//shift and unshift methodu

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // const deleted = fruits.shift();
// // console.log(deleted);
// // console.log(fruits);

// const uns = fruits.unshift("Pears", "Fig");
// console.log(uns);
// console.log(fruits);

// splice() methodu

// var names = ["John", "Mark", "Victor"]
// var deleted = names.splice(2, 0, "Edward", "James")
// console.log({deleted});
// console.log(names);


// var names = ["John", "Mark", "Victor"]
// var deleted = names.splice(1, 1, "Edward", "James")
// console.log({deleted});
// console.log(names);

//slice methodu

// const months = ['Jan', 'March', 'April', 'June',"july"];

// const spring = months.slice(1, 3);
// const spring1 = months.slice(-4, -2);
// const spring2 = months.slice(1, -2)
// const spring3 = months.slice(2, -7)

// console.log(spring);
// console.log(spring1);
// console.log(spring2);
// console.log(months);
// console.log(spring3);


// indexOf ve lastIndexOf methodu

// const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
// const x = colors.indexOf("Green", 3)
// console.log(x)


// const colors = ["Red", "Yellow", "Green", "Blue", "Green","Red","Yellow","Blue"];
// const last = colors.lastIndexOf("Blue")
// console.log(last)

// const colors = ["Red", "Yellow", "Green", "Blue", "Green","Red","Yellow","Blue"];
// const last = colors.lastIndexOf("Blue", 6)
// console.log(last)


