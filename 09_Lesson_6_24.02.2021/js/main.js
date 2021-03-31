// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// let numArr = [15,22,2,3,0,-2,18,55,5,1]
// numArr.sort()
// console.log(`початковий ${numArr}`);

// numArr.sort((a,b) => a-b)
// console.log(numArr);


// -- при помощи метода sort и колбека отсортировать массив в 
//ниспадающем напралении.
//let numArr = [15,22,2,3,0,-2,18,55,5,1,20]
//numArr.sort((a,b) => b-a)
///console.log(numArr);

// -- при помощи filter получить числа кратные 3
//let a = numArr.filter(value => value % 3 === 0 && value !== 0)
//console.log(a);


// -- при помощи filter получить числа кратные 10
//let b = numArr.filter(value => value%10===0)
//console.log(b);

// -- перебрать (проитерировать) массив при помощи foreach()
//let c = numArr.forEach(value => console.log(value))



// -- перебрать массив при помощи map() и получить новый массив в котором все 
//значения будут в 3 раза больше
//let v = numArr.map(value => value*3)
//console.log(v);



// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// let strArr = [`15`,`Wow`,`0`,`Lol`,`1`,`AAA`,`aaaa`,`this`]
// let a = strArr.sort((a,b) => {
//     if(a.toLowerCase() > b.toLowerCase()) return 1
//     if(a.toLowerCase() < b.toLowerCase()) return -1
//     return 0
// })
// console.log(a);


// -- отсортировать его по алфавиту в нисходящем порядке.
// let b = strArr.sort((a,b) => {
//     if(a.toLowerCase() > b.toLowerCase()) return -1
//     if(a.toLowerCase() < b.toLowerCase()) return 1
//     return 0
// })
// console.log(b);


// -- отфильтровать слова длиной менее 4х символов
// let c = strArr.filter(value => value.length < 4)
// console.log(c);



// -- перебрать массив при помощи map() и получить новый массив в 
//котором все значения будут со знаком "!" в конце
// let g = strArr.map(value => value + `!`)

// console.log(g);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ 
//     {name: 'vasya', age: 31, status: false}, 
//     {name: 'petya', age: 30, status: true}, 
//     {name: 'kolya', age: 29, status: true}, 
//     {name: 'olya', age: 28, status: false}, 
//     {name: 'max', age: 30, status: true}, 
//     {name: 'anya', age: 31, status: false}, 
//     {name: 'oleg', age: 28, status: false}, 
//     {name: 'andrey', age: 29, status: true}, 
//     {name: 'masha', age: 30, status: true}, 
//     {name: 'olya', age: 31, status: false}, 
//     {name: 'max', age: 31, status: true} 
// ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a,b) => a.age - b.age)
// console.log(users);

// - відсортувати його за кількістю знаків в імені  
//(зростання , а потім окремо спадання)

// users.sort((a,b) => a.name.length - b.name.length)
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує 
//унікальний індентифікатор (По якому принципу його створювати - ваше рішення), 
//та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// console.log(users);
// let b = JSON.parse(JSON.stringify(users))

// let a = b.map((value,index) => {
//    value.id = index * Math.random()
//    return value
// })

// console.log(a);
// a.sort((a,b => a.id - b.id))
// console.log(a);





// -- наисать функцию калькулятора с 2мя числами и колбеком
// let calc = (a,b, callback) => callback(a,b)


// let b = calc(3,3,((a,b) => a+b+a))
// console.log(b);


// -- наисать функцию калькулятора с 3мя числами и колбеком
// let calc2 = (a,b,c, callback) => callback(a,b,c)

// let c = calc2(20,50,20,(f,g,h) => f+g-h)
// console.log(c);

// function calc3(a,b,c,lol) {
//     return lol(a,b,c,)
// }


// console.log(calc3(1,2,3,((a,b,c) => a+b+c-a)));


// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




let cars = [ 
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let a = cars.filter(value => value.volume > 2)
// console.log(a);

// - двигун = 2л
// let a = cars.filter(value => value.volume = 2)
// console.log(a);


// - виробник мерс
// let a = cars.filter(value => value.producer === `mercedes`)
// console.log(a);


// - двигун більше 3х літрів + виробник мерседес
// let a = cars.filter(value => value.producer === `mercedes` && value.volume >= 3)
// console.log(a);

// - двигун більше 3х літрів + виробник субару
// let a = cars.filter(value => value.producer === `subaru` && value.volume >= 3)
// console.log(a);

// - сили більше ніж 300
// let a = cars.filter(value => value.power > 300)
// console.log(a);

// - сили більше ніж 300 + виробник субару
// let a = cars.filter(value => value.power > 300 && value.producer === `subaru`)
// console.log(a);

// - мотор серіі ej
// let a = cars.filter(value => value.engine.startsWith(`ej`))
// console.log(a);


// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let a = cars.filter(
//     value => value.power > 300 && 
//     value.producer === `subaru` && 
//     value.engine.startsWith(`ej`)
//     )
//     console.log(a);

// - двигун меньше 3х літрів + виробник мерседес
// let b = cars.filter(valie => valie.volume < 3 && valie.producer === `mercedes`)
// console.log(b);

// - двигун більше 2л + сили більше 250
// let a = cars.filter(a => a.volume > 2 && a.power >300)
// console.log(a);

// - сили більше 250  + виробник бмв
// let b = cars.filter(a => a.power > 250 && a.producer === `bmw`)
// console.log(b);

// - взять слдующий массив
let users = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// let a = users.sort((a,b) => a.id - b.id)
// console.log(a);

// -- отсортировать его по id пользователей в обратном опрядке
// users.sort((a,b) => b.id - a.id)
// console.log(users);

// -- отсортировать его по возрасту пользователей
// users.sort((a,b)=>a.age - b.age)
// console.log(users);

// -- отсортировать его по возрасту пользователей в обратном порядке
// users.sort((a,b) => b.age - a.age)
// console.log(users);

// -- отсортировать его по имени пользователей
// users.sort((a,b) => {
//     if(a.name>b.name) return 1
//     if(a.name<b.name) return -1
//     return 0
// })

// -- отсортировать его по имени пользователей в обратном порядке

// users.sort((a,b)=>{
//     if(a.name > b.name) return -1
//     if(a.name < b.name) return 1
//     return 0
// })
// console.log(users);

// -- отсортировать его по названию улицы  в алфавитном порядке


// -- отсортировать его по номеру дома по возрастанию
// users.sort((a,b) => a.address.number - b.address.number)
// console.log(users);

// -- отфильтровать (оставить) тех кто младше 30
// let a = users.filter(a => a.age < 30 )
// console.log(a);
// -- отфильтровать (оставить) тех у кого отрицательный статус

// let b = users.filter(a => !a.status)
// console.log(b);

// -- отфильтровать (оставить) тех у кого отрицательный статус 
//и младше 30 лет
// let b = users.filter(a => !a.status && a.age < 30)
// console.log(b);

// -- отфильтровать (оставить) тех у кого номер дома четный
let b = users.filter(a => a.address.number%2 === 0)
console.log(b);





