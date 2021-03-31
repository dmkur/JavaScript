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
let users = [ 
    {name: 'vasya', age: 31, status: false}, 
    {name: 'petya', age: 30, status: true}, 
    {name: 'kolya', age: 29, status: true}, 
    {name: 'olya', age: 28, status: false}, 
    {name: 'max', age: 30, status: true}, 
    {name: 'anya', age: 31, status: false}, 
    {name: 'oleg', age: 28, status: false}, 
    {name: 'andrey', age: 29, status: true}, 
    {name: 'masha', age: 30, status: true}, 
    {name: 'olya', age: 31, status: false}, 
    {name: 'max', age: 31, status: true} 
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort((a,b) => a.age - b.age)
console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором






// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком