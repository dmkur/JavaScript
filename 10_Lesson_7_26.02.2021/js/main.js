// - Создать произвольный елемент с id = text.  
//Используя JavaScript, сделайте так, чтобы при клике на 
//кнопку исчезал элемент с id="text".

// let btnElement = document.getElementById(`btn`)
// let txtElement = document.getElementById(`text`)
//txtElement.style.display = `block`

// btnElement.onclick = item => {   
    
//     // txtElement.style.display === `block`
//     // ? txtElement.style.display = `none`
//     // : txtElement.style.display = `block`
//     txtElement.hidden
//     ?txtElement.hidden = false
//     :txtElement.hidden = true
// }

//ще раз

// let div = document.createElement(`div`)
// let btn = document.createElement(`button`)

// div.innerText = `lorem Lorem lorem Lorem lorem Lorem `
// div.style.border = `1px solid blue`

// btn.innerText = `Hide Me`
// btn.style.background = `blue`
// btn.style.color = `white`

// document.body.appendChild(div) 
// document.body.appendChild(btn) 


// btn.onclick = event => {
//     div.hidden
//     ? div.hidden = false
//     : div.hidden = true
//}



// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//let btnElement = document.getElementById(`btn`)
// btnElement.onclick = item => {
//     btnElement.style.display = `none`    
// }

// let btnElement = document.getElementById(`btn`)
// btnElement.onclick = event => {
//     event.target.style.display = `none`
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік 
//чи меньше він ніж 18, та повідомити про це користувача

// let inputEl = document.createElement(`input`)
// let btntEl = document.createElement(`button`)

// inputEl.type = `number`

// btntEl.innerText = `Confirm`

// document.body.appendChild(inputEl)
// document.body.appendChild(btntEl)


// btntEl.onclick = ev => {
//     let value = inputEl.value

//     if(value < 18) {
//         alert(`Only 18+ content`)
//     }else{
//         alert(`Welcome!`)
//     }
// }     



// - Создайте меню, которое раскрывается/сворачивается при клике
// let a = document.getElementById(`menu`)
// let b = document.getElementById(`subMenu`)

// let lol = true

// a.onclick = ev => {
//     if(lol){
//         b.style.display = `none`
//         lol = false
//     }else{
//         b.style.display = `block`
//         lol = true
//     }
// }


// - Создать список комментариев , пример объекта коментария - 
//{title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let div = document.createElement(`div`)

// document.body.appendChild(div)

// let comentars = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ]

// comentars.forEach(item => {
//     let divOne = document.createElement(`div`)
//     let h3 = document.createElement(`h3`)
//     let p = document.createElement(`p`)
//     let btn = document.createElement(`button`)

//     h3.innerText = item.title
//     p.innerText = item.body
//     btn.innerText = `Hide`;

//     btn.onclick= ()=>{
//         p.hidden
//         ? p.hidden = false
//         : p.hidden = true
//     }

//     divOne.appendChild(h3)
//     divOne.appendChild(p)
//     divOne.appendChild(btn)

//    div.appendChild(divOne)
    
// })


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на 
//яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження 
//сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі 
///необхідні атрибути.
// let btn = document.getElementById(`btn`)
// let input1 = document.getElementById(`input1`)
// let input2 = document.getElementById(`input2`)
// let input11 = document.getElementById(`input11`)

// btn.onclick = ev => {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input11.value);
//     console.log(input22.value);


// }


// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// let content = document.getElementById(`content`)

// function createTable(rows,cels,tag){
//     let table = document.createElement(`table`)
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement(`tr`)

//         for (let a = 0; a < cels; a++) {
//             let td = document.createElement(`td`)
//             td.innerText = i.toString() + a.toString()

//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     tag.appendChild(table)
// }

// createTable(4,5,content)


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - 
//кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, 
//з відповідним вмістом.
// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, 
//которую можно листать влево-вправо нажатием на стрелочки.
// let imgArray = [
//     {
//         id:1,
//         imgUrl: '/10_Lesson_7_26.02.2021/img/1.jpg'
//     },
//     {
//         id:2,
//         imgUrl: '/10_Lesson_7_26.02.2021/img/2.jpg'
//     },
//     {
//         id:3,
//         imgUrl: '/10_Lesson_7_26.02.2021/img/3.jpg'
//     },
//     {
//         id:4,
//         imgUrl: '/10_Lesson_7_26.02.2021/img/4.jpg'
//     },

// ]

// let content = document.getElementById(`content`)

// let img = document.createElement(`img`)
// let buttonNext = document.createElement(`button`)
// let buttonPrev = document.createElement(`button`)

// buttonPrev.innerText = `Prev`
// buttonNext.innerText = `Next`

// let index = 0

// img.style.width = `300px`
// img.style.backgroundSize = `cover`
// img.src = imgArray[index].imgUrl

// content.appendChild(img)
// content.appendChild(buttonPrev)
// content.appendChild(buttonNext)

// buttonPrev.onclick = ev => {
//     index - 1 < 0
//     ? index = imgArray.length -1
//     : index = index-1

//     img.src = imgArray[index].imgUrl
// }


// buttonNext.onclick = ()=>{
//     index +1 > imgArray.length -1
//     ? index = 0
//     :index = index+1

//     img.src = imgArray[index].imgUrl
// }



// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку




// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) 
//текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let h2 = document.getElementsByTagName(`h2`)
// let content = document.getElementById(`content`)
// let wrap = document.getElementById(`wrap`)
// let ul = document.createElement(`ul`)

// for (let i = 0; i < h2.length; i++) {
//     let li = document.createElement(`li`)   
//     let a = document.createElement(`a`)  
//     let yakor = `yakor` + i;

//     a.href = `#`+yakor;
//     h2[i].setAttribute(`id`,yakor);
//     a.innerHTML = h2[i].innerText

//     li.appendChild(a)
//     ul.appendChild(li)    
// }

// content.appendChild(ul)





// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
 


let content = document.getElementById(`content`)
let userDiv = document.createElement(`div`) 

userDiv.appendChild(renderContent(usersWithAddress))

let input1 = document.createElement(`input`)
let input2 = document.createElement(`input`)
let input3 = document.createElement(`input`)

let label1 = document.createElement(`label`)
let label2 = document.createElement(`label`)
let label3 = document.createElement(`label`)


let button = document.createElement(`button`)

label1.innerText = `со статусом false`
label2.innerText = `старше 29 лет включительно`
label3.innerText = `город киев`

button.innerText = `Filter ON`

input1.type = `checkbox`
input2.type = `checkbox`
input3.type = `checkbox`

content.appendChild(userDiv)

content.appendChild(input1)
content.appendChild(label1)
content.appendChild(input2)
content.appendChild(label2)
content.appendChild(input3)
content.appendChild(label3)
content.appendChild(button)

button.onclick = ev=>{
    
}

function renderContent(array){
    let main = document.createElement(`div`)
    array.forEach(item => {
        let div = document.createElement(`div`)
        let h3 = document.createElement(`h3`)
        
        
        div.innerHTML = JSON.stringify(item)
        
        main.appendChild(div)
    });
    return main
}











