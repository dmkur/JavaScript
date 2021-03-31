// - створити функцію яка виводить масив
let arr = [1,2,3,4,23,4,3]
function printArr(arr){
	console.log(arr);
	// for (const i of arr) {
	// 	console.log(i);
	// }
}
// printArr(arr)


// - створити функцію яка заповнює масив рандомними числами та виводить його. 
//Для виведення використати попвередню функцію.
function randomArr(length,max,min){
	let array = []
	for (let i = 0; i < length; i++) {
		array.push(Math.floor(Math.random()*(max-min)+min))		
	}
	return array
}
let newArr = randomArr(10,20,5)
// printArr(newArr)


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
function returnMin(a,b,c){
	let min;	

	if(a<=b && a<=c) min = a
	if(b<=a && b<=c) min = b
	if(c<=b && c<=a) min = c

	console.log(min);
	return min
}

//returnMin(33,33,35)


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
function returnMax(a,b,c){
	let max;
	if(a>=b && a>=c) max = a
	if(b>=a && b>=c) max = b
	if(c>=b && c>=a) max = c

	console.log(max);
	return max
}

// returnMax(244,44,44)



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, 
//а виводить найбільше
function returnMinPrintMax(){
	let min = arguments[0]
	let max = arguments[0]

	for (const i of arguments) {
		if(i > max) max = i
		if(i < min) min = i
	}
	console.log(max);
	return min
}

// let min = returnMinPrintMax(1,2,55,88,44,1,2,55)
// console.log(min);


// - створити функцію яка виводить масив
let emptyArr = []

function fillArr(length,min,max){
	for (let i = 0; i < length; i++) {		
		emptyArr.push(Math.floor(Math.random()*(max+min)-min))		
	}
	return emptyArr
}

// let a = fillArr(7,5,20)
// console.log(a);


// - створити функцію яка повертає найбільше число з масиву
let returnMaxFArr = (array) => {
	let max = array[0]
	for (let i of array) {
		if(i > max) max = i
	}
	return max
}
// let a = returnMaxFArr([2,55,88,4,5,5,44,0])
// console.log(a);

// - створити функцію яка повертає найменьше число з масиву

let returnMinFArr = (array) => {
	let min = array[0]
	for (const i of array) {
		if(i<min) min = i
	}
	return min
}
// let b = returnMinFArr([2,55,88,4,5,44,0])
// console.log(b);


// - створити функцію яка приймає масив чисел та складає значення елементів 
//масиву та повертає його.
// - створити функцію яка приймає масив чисел та повертає середнє 
//арифметичне його значень.
let sumArray = (array) => {
	let sum = 0
	for (const i of array) {
		sum += i
	}
	return sum
}
// let a = sumArray([1,2,3,1,3,4,5,2,32,3]);
// console.log(a)


let averageArr = (array) => {
	let avg = 0
	for (const i of array) {
		avg += i/array.length
	}
	return avg
}
// let a = averageArr([23,2,2,23])
// console.log(a);


// - Створити функцію яка приймає масив будь яких объектів, 
//та повертає значення кількості об'єктів в масиві

// let users=[
// 	{
// 	  "id": 1,
// 	  "name": "Leanne Graham",
// 	  "username": "Bret",
// 	  "email": "Sincere@april.biz",
// 	  "address": {
// 		"street": "Kulas Light",
// 		"suite": "Apt. 556",
// 		"city": "Gwenborough",
// 		"zipcode": "92998-3874",
// 		"geo": {
// 		  "lat": "-37.3159",
// 		  "lng": "81.1496"
// 		}
// 	  },
// 	  "phone": "1-770-736-8031 x56442",
// 	  "website": "hildegard.org",
// 	  "company": {
// 		"name": "Romaguera-Crona",
// 		"catchPhrase": "Multi-layered client-server neural-net",
// 		"bs": "harness real-time e-markets"
// 	  }
// 	},
// 	12333,
// 	()=>{},

// ]


let countObjArr = (array) => {
	let count = 0;
	for (const i of array) {
		if(typeof i === `object`){
			count++
		}
	}
return count
}

// let b = countObjArr(users)
// console.log(b);

// - Створити функцію яка приймає масив будь яких объектів, 
// та повертає загальн кількість полів в них
let countObjArr2 = (array) => {
	let count = 0
	for (const i of array) {		
		//console.log(i);		
		if(typeof i === `object`){
			for (let a in i) {
				console.log(i[a]);			
							
			}
		}
	}
	return count
}
// let a = countObjArr2(users)
// console.log(a);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
let splitTogether = (array1,array2) => {
	let split = []
	for(let i in array1){
		split.push(array1[i]+array2[i])
	}
	return split 	
}
// let a = splitTogether([1,2,3,4],[2,3,4,5])
// console.log(a);



//  - *** приймає масив та число "i", та міняє місцями об`єкт який 
//знаходиться в індексі "i" на "i+1"
let changeArr = (arr,ol)=>{
	let array = [...arr]
	let temp = array[ol]
	array[ol] = array[ol+1]
	array[ol+1] = temp;
	return array
}
// let a = changeArr([1,2,3,4,5],3)
// console.log(a);

//  - *** створити функцію яка буде переносити елементи з значенням 0 у 
//кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//  Двожина масиву від 2 до 100
//  Приклад
//  [1,0,6,0,3] => [1,6,3,0,0]
//  [0,1,2,3,4] => [1,2,3,4,0]
//  [0,0,1,0]   => [1,0,0,0]

// let changeZero = (array)=>{
// 	let zero = []
// 	let number = []

// 	for (const i of array) {
// 		if(i === 0){
// 			zero.push(0)			
// 		}else{
// 			number.push(i)
// 		}
// 	}
// 	return [...number,...zero]
// }

// let a = changeZero([0,0,1,0])
// console.log(a);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
let addSome = (msg)=>{
	let div = document.createElement(`div`)
	div.innerText = msg
	document.body.appendChild(div)
}

// let a = addSome(`Hello owu`)


// - Додає в боді елемент з текстом . 
//Тип елементу та текст отримати через аргументи
let addSome2 = (txt,type)=>{
	let a = document.createElement(type)
	a.innerText = txt
	document.body.appendChild(a)

}
// let a = addSome2(`Hello owu`,`h1`)

// - приймає масив автомобілів (можна взяти з попередніх дз ),
//та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let users=[
	{
	  "id": 1,
	  "name": "Leanne Graham",
	  "username": "Bret",
	  "email": "Sincere@april.biz",
	  "address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
		  "lat": "-37.3159",
		  "lng": "81.1496"
		}
	  },
	  "phone": "1-770-736-8031 x56442",
	  "website": "hildegard.org",
	  "company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	  }
	},
	{
	  "id": 2,
	  "name": "Ervin Howell",
	  "username": "Antonette",
	  "email": "Shanna@melissa.tv",
	  "address": {
		"street": "Victor Plains",
		"suite": "Suite 879",
		"city": "Wisokyburgh",
		"zipcode": "90566-7771",
		"geo": {
		  "lat": "-43.9509",
		  "lng": "-34.4618"
		}
	  },
	  "phone": "010-692-6593 x09125",
	  "website": "anastasia.net",
	  "company": {
		"name": "Deckow-Crist",
		"catchPhrase": "Proactive didactic contingency",
		"bs": "synergize scalable supply-chains"
	  }
	},
	{
	  "id": 3,
	  "name": "Clementine Bauch",
	  "username": "Samantha",
	  "email": "Nathan@yesenia.net",
	  "address": {
		"street": "Douglas Extension",
		"suite": "Suite 847",
		"city": "McKenziehaven",
		"zipcode": "59590-4157",
		"geo": {
		  "lat": "-68.6102",
		  "lng": "-47.0653"
		}
	  },
	  "phone": "1-463-123-4447",
	  "website": "ramiro.info",
	  "company": {
		"name": "Romaguera-Jacobson",
		"catchPhrase": "Face to face bifurcated interface",
		"bs": "e-enable strategic applications"
	  }
	},
	{
	  "id": 4,
	  "name": "Patricia Lebsack",
	  "username": "Karianne",
	  "email": "Julianne.OConner@kory.org",
	  "address": {
		"street": "Hoeger Mall",
		"suite": "Apt. 692",
		"city": "South Elvis",
		"zipcode": "53919-4257",
		"geo": {
		  "lat": "29.4572",
		  "lng": "-164.2990"
		}
	  },
	  "phone": "493-170-9623 x156",
	  "website": "kale.biz",
	  "company": {
		"name": "Robel-Corkery",
		"catchPhrase": "Multi-tiered zero tolerance productivity",
		"bs": "transition cutting-edge web services"
	  }
	},
	{
	  "id": 5,
	  "name": "Chelsey Dietrich",
	  "username": "Kamren",
	  "email": "Lucio_Hettinger@annie.ca",
	  "address": {
		"street": "Skiles Walks",
		"suite": "Suite 351",
		"city": "Roscoeview",
		"zipcode": "33263",
		"geo": {
		  "lat": "-31.8129",
		  "lng": "62.5342"
		}
	  },
	  "phone": "(254)954-1289",
	  "website": "demarco.info",
	  "company": {
		"name": "Keebler LLC",
		"catchPhrase": "User-centric fault-tolerant solution",
		"bs": "revolutionize end-to-end systems"
	  }
	},
	{
	  "id": 6,
	  "name": "Mrs. Dennis Schulist",
	  "username": "Leopoldo_Corkery",
	  "email": "Karley_Dach@jasper.info",
	  "address": {
		"street": "Norberto Crossing",
		"suite": "Apt. 950",
		"city": "South Christy",
		"zipcode": "23505-1337",
		"geo": {
		  "lat": "-71.4197",
		  "lng": "71.7478"
		}
	  },
	  "phone": "1-477-935-8478 x6430",
	  "website": "ola.org",
	  "company": {
		"name": "Considine-Lockman",
		"catchPhrase": "Synchronised bottom-line interface",
		"bs": "e-enable innovative applications"
	  }
	},
	{
	  "id": 7,
	  "name": "Kurtis Weissnat",
	  "username": "Elwyn.Skiles",
	  "email": "Telly.Hoeger@billy.biz",
	  "address": {
		"street": "Rex Trail",
		"suite": "Suite 280",
		"city": "Howemouth",
		"zipcode": "58804-1099",
		"geo": {
		  "lat": "24.8918",
		  "lng": "21.8984"
		}
	  },
	  "phone": "210.067.6132",
	  "website": "elvis.io",
	  "company": {
		"name": "Johns Group",
		"catchPhrase": "Configurable multimedia task-force",
		"bs": "generate enterprise e-tailers"
	  }
	},
	{
	  "id": 8,
	  "name": "Nicholas Runolfsdottir V",
	  "username": "Maxime_Nienow",
	  "email": "Sherwood@rosamond.me",
	  "address": {
		"street": "Ellsworth Summit",
		"suite": "Suite 729",
		"city": "Aliyaview",
		"zipcode": "45169",
		"geo": {
		  "lat": "-14.3990",
		  "lng": "-120.7677"
		}
	  },
	  "phone": "586.493.6943 x140",
	  "website": "jacynthe.com",
	  "company": {
		"name": "Abernathy Group",
		"catchPhrase": "Implemented secondary concept",
		"bs": "e-enable extensible e-tailers"
	  }
	},
	{
	  "id": 9,
	  "name": "Glenna Reichert",
	  "username": "Delphine",
	  "email": "Chaim_McDermott@dana.io",
	  "address": {
		"street": "Dayna Park",
		"suite": "Suite 449",
		"city": "Bartholomebury",
		"zipcode": "76495-3109",
		"geo": {
		  "lat": "24.6463",
		  "lng": "-168.8889"
		}
	  },
	  "phone": "(775)976-6794 x41206",
	  "website": "conrad.com",
	  "company": {
		"name": "Yost and Sons",
		"catchPhrase": "Switchable contextually-based project",
		"bs": "aggregate real-time technologies"
	  }
	},
	{
	  "id": 10,
	  "name": "Clementina DuBuque",
	  "username": "Moriah.Stanton",
	  "email": "Rey.Padberg@karina.biz",
	  "address": {
		"street": "Kattie Turnpike",
		"suite": "Suite 198",
		"city": "Lebsackbury",
		"zipcode": "31428-2261",
		"geo": {
		  "lat": "-38.2386",
		  "lng": "57.2232"
		}
	  },
	  "phone": "024-648-3804",
	  "website": "ambrose.net",
	  "company": {
		"name": "Hoeger LLC",
		"catchPhrase": "Centralized empowering task-force",
		"bs": "target end-to-end models"
	  }
	}
  ]
	

let addUsers = (array,id)=>{
	let element =  document.getElementById(id)
	let ul = document.createElement(`ul`)
	for (let i = 0; i < array.length; i++) {		
		let li = document.createElement(`li`)
		li.innerText = `${i+1} - ${array[i].name} - ${array[i].username}`
		ul.appendChild(li)
	}
	element.appendChild(ul)
}

//let a = addUsers(users,`lol`)

// Для кожного автомобіля створити свій блок, та додати його в елемент, 
//індентифікатор якого ви отримали. Всі властивості авто в обному блоці




// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один 
//об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:

let usersWithId = [
	{id: 1, name: 'vasya', age: 31, status: false}, 
	{id: 2, name: 'petya', age: 30, status: true}, 
	{id: 3, name: 'kolya', age: 29, status: true}, 
	{id: 4, name: 'olya', age: 28, status: false},
];

let citiesWithId = [
	{user_id: 3, country: 'USA', city: 'Portland'}, 
	{user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
	{user_id: 2, country: 'Poland', city: 'Krakow'}, 
	{user_id: 4, country: 'USA', city: 'Miami'},
];

let someOff = (userArray,citiesArray)=>{
	for (const user of userArray) {
		for (const city of citiesArray) {
			if(user.id === city.user_id){
				user.adress = city
			}
		}
	}
	return userArray
}

let a = someOff(usersWithId,citiesWithId)
console.log(a);





















