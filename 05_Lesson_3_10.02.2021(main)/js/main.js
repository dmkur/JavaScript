// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
//(Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user1 = {
//     name:`Vasia`,
//     age:23, 
//     status: true
// }

// let programer = {
//     name:`Olga`,
//     lucky: true, 
//     hobby:[`css`,`html`,`polo`],
    
// }

// let user2 = {
//     name:`Den`,
//     game:[`cs`,`dota2`],
//     job:`player`
// }

// let car = {
//     model:911,
//     status:`Porshe`, 
//     maxSped: 230
// }

// let actor = {
//     name:`Olsen`,
//     film:`best day`,
//     status: true
// }





// // - создать 5 объектов с полностью разным набором полей. 
// //В каждом объекте должен присутсвовать массив и внутренний объект. 
// //Опишите что угодно, машину, картину, болт... 
// //Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let wife = {
//     jobs:[`housekeeper`,`driver`],
//     kidOne:{
//         name:`Olga`,
//         age:18,
//         hair:`black`
//     },
//     kidTwo:{
//         name:`Sam`,
//         age:15,
//         hobby:`karate`
//     },
//     status:true
// };

// let father = {
//     skills:[`money`,`straight`,`timesaver`],
//     job:2,
//     addres:{
//         lviv:{
//             street:`peremogy`,
//             house:23,
//             door:2
//         },
//         lutsk:{
//             street:`Lipinksy`,
//             house:2,
//             door:14
//         }
//     },
//     status:false
// };

// let man = { 
//     name: 'kokos', 
//     skills : ['java','js'] , 
//     wife: { name: 'cherry' } 
// };


 
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for(let a in wife){
//     console.log(a);
// }

// for(let a in father){
//     console.log(a);
// }

// for(let a in man){
//     console.log(a);
// }



// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(`object keys__________`);

// let keyObj = Object.keys(wife);
// console.log(keyObj);

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. 
//(Значаения полей могу быть выдуманными)
// let cars = [
//     {model:`asl2`,year:1993,power:230,color:`pink`},
//     {model:`911`,year:2012,power:180,color:`grey`},
//     {model:`s8`,year:2020,power:220,color:`black`},
//     {model:`arc18`,year:2019,power:250,color:`white`},
//     {model:`loon`,year:2018,power:185,color:`blue`}
// ]


// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
//(Значаения полей могу быть выдуманными)
// let cities = [
//     {name:`Lviv`,population:450000,country:`Ukraine`,region:`Europe`},
//     {name:`Lutsk`,population:250000,country:`Ukraine`,region:`Europe`},
//     {name:`Abydaby`,population:1000000,country:`OAE`,region:`Europe`},
//     {name:`Tokyo`,population:35000000,country:`Japan`,region:`Aizia`},
//     {name:`Loste`,population:2000,country:`Kanada`,region:`USA`}
// ]


// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
//Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let drivers = [
//     {model:`asl2`,year:1993,power:230,color:`pink`,driver:{name:`Dae`,age:39,male:`male`,exp:13}},
//     {model:`911`,year:2012,power:180,color:`grey`,driver:{name:`olga`,age:19,male:`female`,exp:3}},
//     {model:`s8`,year:2020,power:220,color:`black`,driver:{name:`Dilan`,age:23,male:`male`,exp:5}},
//     {model:`arc18`,year:2019,power:250,color:`white`,driver:{name:`LEo`,age:33,male:`male`,exp:8}},
//     {model:`loon`,year:2018,power:185,color:`blue`,driver:{name:`Kitty`,age:25,male:`female`,exp:4}}
// ]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// i=0;
// while(i<cars.length){
//     console.log(cars[i]);
//     i++
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(let i=0;i<cities.length;i++){
//     console.log(cities[i]);
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for(let a of drivers){
//     console.log(a);
// }

// - взять объекты из задания 1 и превратить каждый в json.
// let jSon = JSON.stringify(user1)
// console.log(jSon);

// let jSon2 = JSON.stringify(programer)
// console.log(jSon2);
// - взять json из задания 11 и превратить их обратно в объекты.

// let notJson = JSON.parse(jSon)
// console.log(notJson);

// let notJson2 = JSON.parse(jSon2)
// console.log(notJson2);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let cars = [
//     {model:`asl2`,year:1993,power:230,color:`pink`},
//     {model:`911`,year:2012,power:180,color:`grey`},
//     {model:`s8`,year:2020,power:220,color:`black`},
//     {model:`arc18`,year:2019,power:250,color:`white`},
//     {model:`loon`,year:2018,power:185,color:`blue`}
// ]

// for(let c of cars){
//     let json = JSON.stringify(c)
//     console.log(json);
// }

// for(let a in cars){
//     let jObj = JSON.stringify(cars[a])
//     console.log(jObj);
//}
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let drivers = [
//     {model:`asl2`,year:1993,power:230,color:`pink`,driver:{name:`Dae`,age:39,male:`male`,exp:13}},
//     {model:`911`,year:2012,power:180,color:`grey`,driver:{name:`olga`,age:19,male:`female`,exp:3}},
//     {model:`s8`,year:2020,power:220,color:`black`,driver:{name:`Dilan`,age:23,male:`male`,exp:5}},
//     {model:`arc18`,year:2019,power:250,color:`white`,driver:{name:`LEo`,age:33,male:`male`,exp:8}},
//     {model:`loon`,year:2018,power:185,color:`blue`,driver:{name:`Kitty`,age:25,male:`female`,exp:4}}
// ]

// for(let a in drivers){
//     let jObj = JSON.stringify(drivers[a])
//     console.log(jObj);
// }
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json 
//и сразу скоприовать в новый массив.
// let cities = [
//     {name:`Lviv`,population:450000,country:`Ukraine`,region:`Europe`},
//     {name:`Lutsk`,population:250000,country:`Ukraine`,region:`Europe`},
//     {name:`Abydaby`,population:1000000,country:`OAE`,region:`Europe`},
//     {name:`Tokyo`,population:35000000,country:`Japan`,region:`Aizia`},
//     {name:`Loste`,population:2000,country:`Kanada`,region:`USA`}
// ]

// for(let i=0;i<cities.length;i++){
//     let jsObj = JSON.stringify(cities[i])
//     console.log(jsObj);
//     let notJs = JSON.parse(jsObj)
//     console.log(notJs);
// }

// let newArr = []
// for(let i=0;i<cities.length;i++){
//     let jsObj = JSON.stringify(cities[i])    
//     newArr.push(jsObj)    
// }
// console.log(newArr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills 
//которое является массивом. Проитерировать массив пользователей 
//и в каждом пользователе проитерировать его массив skills
// let cities = [
//     {name:`Lviv`,population:450000,country:`Ukraine`,region:`Europe`,skills:[`lol`,`sl`,123]},
//     {name:`Lutsk`,population:250000,country:`Ukraine`,region:`Europe`,skills:[`lol`,`ghgh`,6]},
//     {name:`Abydaby`,population:1000000,country:`OAE`,region:`Europe`,skills:[`lol`,false,767]},
//     {name:`Tokyo`,population:35000000,country:`Japan`,region:`Aizia`,skills:[`lwwe`,`qwe`,true]},
//     {name:`Loste`,population:2000,country:`Kanada`,region:`USA`,skills:[`lwwe`,`qwe`,true]}
// ]

// for(let i of cities){
//     console.log(`name---`,i.name);
//     for(let a of i.skills){
//         console.log(`skils---`,a);
//     }
    
// }

// for(let i in cities){
//     console.log(`Name:`,cities[i].name);
//     for(let a in cities[i].skills){
//         console.log(cities[i].skills[a]);
//     }
   
// }




// - Создать массив пользователей. У каждого пользователя обязательно должено 
//быть поле skills которое является массивом. Проитерировать массив пользователей 
//и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей 
//в отедльный массив
// let ski = []
// for(let i of cities){
//     console.log(`name---`,i.name);
//     for(let a of i.skills){
//         ski.push(a)
//     }
    
// }
// console.log(ski);






// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];

// for(let n of users){
//     console.log(`user:`,n)
//     for(let s of n.skills){
//         console.log(`skills:`,s);
//     }
// }





// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший 
//порожній масив.
// let newArr = []
// for(let a of users){    
//     newArr.push(a.address)
// }
// console.log(newArr);


// - За допомоги циклу проітерувати  масив users, 
//записати кожного юзера в сівй блок за допомоги document.createElement. 
//Всі данні в одному блоці.
// for(let i=0;i<users.length;i++){
    
//     let div = document.createElement(`div`)
//     let adr = ``
//     for(let a in users[i].address){
//         adr+=` `+users[i].address[a];
//     }

//     div.innerText = `${users[i].name} - ${users[i].age} - ${adr}`

//     document.body.appendChild(div)
// }



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок 
//за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


// for(let i=0;i<users.length;i++){
//     let div = document.createElement(`div`)

//     let h1 = document.createElement(`h1`)
//     let p2 = document.createElement(`p2`)
//     let p3 = document.createElement(`p3`)
//     let p4 = document.createElement(`p3`)
    
//     div.appendChild(h1)
//     div.appendChild(p2)
//     div.appendChild(p3)
//     div.appendChild(p4)
    

//     h1.innerText = `${users[i].name}`
//     p2.innerText = `${users[i].age}-`
//     p3.innerText = `${users[i].status}-`

//     let adr = ``
//     for(let a in users[i].address){
//         adr += ` `+ users[i].address[a]
//     }

//     p4.innerText = `${adr}`

//     document.body.appendChild(div)
// }



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в 
//сівй блок за допомоги document.createElement, розділивши всі властивості 
//по своїм блокам , блок з адресою зробити окремим блоком, 
//з блоками для кожної властивості
// for(let i=0;i<users.length;i++){
    
//     let divMain = document.createElement(`div`)
//     let divSub = document.createElement(`div`)
    
//     let h1_Main = document.createElement(`h3`)
//     let p1_Main  = document.createElement(`p`)
//     let p2_Main  = document.createElement(`p`)
    
//     let p1_Sub = document.createElement(`p`)
//     let p2_Sub = document.createElement(`p`)
//     let p3_Sub = document.createElement(`p`)
//     let p4_Sub = document.createElement(`p`)

//     divMain.appendChild(h1_Main)
//     divMain.appendChild(p1_Main)
//     divMain.appendChild(p2_Main)
//     divMain.appendChild(divSub)
    
//     divSub.appendChild(p1_Sub)
//     divSub.appendChild(p2_Sub)
//     divSub.appendChild(p3_Sub)
//     divSub.appendChild(p4_Sub)

//     divSub.style.border=`solid`
    
//     h1_Main.innerText = `${users[i].name}`
//     p1_Main.innerText = `${users[i].age}`
//     p2_Main.innerText = `${users[i].status}`
    
//     p1_Sub.innerText = `${users[i].address.city}`
//     p2_Sub.innerText = `${users[i].address.country}`
//     p3_Sub.innerText = `${users[i].address.street}`
//     p4_Sub.innerText = `${users[i].address.houseNumber}`
    
//     document.body.appendChild(divMain)  
    

// }

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true}, 
//     {id: 4, name: 'olya', age: 28, status: false},
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];

// З'єднати в один об'єкт користувача та місто 
//з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, 
//address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// for(let a of usersWithId){
//     for(let b of citiesWithId){
//         if(a.id === b.user_id){
//             a.adress = b
//         }
//     }
    
// }

// console.log(usersWithId);

// for(let i=0;i<usersWithId.length;i++){
//     for(let b=0;b<citiesWithId.length;b++){
//         if(usersWithId[i].id === citiesWithId[b].user_id){
//             usersWithId[i].wow = citiesWithId[b]
//         }
//     }
// }
//console.log(usersWithId);

// for(let a in usersWithId){
//     for(let b in citiesWithId){
//         if(usersWithId[a].id === citiesWithId[b].user_id){
//             usersWithId[a].wow = citiesWithId[b]
//         }
//     }
// }
// console.log(usersWithId);

// usersWithId.forEach(user => {
//     user.address = citiesWithId.find(lol => lol.user_id === user.id)
// })
// console.log(usersWithId);








// - створити розмітці блок з id, class та текстом в середені. 
//Зчитати окремо цей текст з селекторів по id , class та тегу

// let elementbyId = document.getElementById(`megan`)
// let textInelement = elementbyId.innerText
// console.log(textInelement);

// let elementbyClass = document.getElementsByClassName(`lol`)
// for(let a of elementbyClass){
//     console.log(a);
// }

// let elementbyTag = document.getElementsByTagName(`p`)
// for(let i of elementbyTag){
//     console.log(i);
// }




// - змінити цей текст використовуючи селектори id, class,  tag

// let idEl = document.getElementById(`megan`)
// let text = idEl.innerText = `lola`
// console.log(text);

// let classEl = document.getElementsByClassName(`lol`)
// for(let i of classEl){
//     i.innerText = `lola`
// }

// let tagEl = document.getElementsByTagName(`p`)
// for(let i of tagEl){
//     i.innerText = `lola`
// }


// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// let id = document.getElementById(`megan`)
// id.style.width = `250px`
// id.style.height = `250px`


// let cls = document.getElementsByClassName(`lol`)
// for(let i of cls){
//     i.style.width = `200px`
//     i.style.height = `200px`
// }

// let tag = document.getElementsByTagName(`div`)
// for(let i of tag){
//     i.style.width = `300px`
//     i.style.height = `300px`
// }

// - за допомоги document.createElement та appendChild створити 
//таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement(`table`)
// let tr = document.createElement(`tr`)
// let td1 = document.createElement(`td`)
// let td2 = document.createElement(`td`)
// let td3 = document.createElement(`td`)

// tr.appendChild(td1)
// tr.appendChild(td2)
// tr.appendChild(td3)

// table.appendChild(tr)


// document.body.appendChild(table)

// - за допомоги document.createElement, 
//appendChild та циклу створити таблицю 
//на 10 рядків з трьома ячейками всередені
// let table = document.createElement(`table`)
// for(let i=0;i<10;i++){
//     let tr = document.createElement(`tr`)
//     for(let a=0;a<3;a++){
//         let td1 = document.createElement(`td`)
//         tr.appendChild(td1)
//     }
//     table.appendChild(tr)
// }

// document.body.appendChild(table)



// - за допомоги document.createElement, appendChild та 2х циклів 
//створити таблицю на 10 рядків з 5 ячейками всередені
// let table  = document.createElement(`table`)
// for (let i = 0; i < 10;i++) {
//     let tr = document.createElement(`tr`)
//     for (let a = 0; a < 5; a++) {
//         let td = document.createElement(`td`)
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table)

// - за допомоги document.createElement, appendChild та 2х циклів створити 
//таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let a = prompt(`Рядків`)
// let b = prompt(`Строк`)
// let table  = document.createElement(`table`)
// for (let i = 0; i < a;i++) {
//     let tr = document.createElement(`tr`)
//     for (let a = 0; a < b; a++) {
//         let td = document.createElement(`td`)
//         tr.appendChild(td)
//     }
//     table.appendChild(tr)
// }
// document.body.appendChild(table)


// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// let p = document.getElementsByTagName(`div`)
// for(let i of p){
//     i.style.background = `red`
// }

// let d = document.getElementsByTagName(`p`)
// for(let i of d){
//     i.innerText = `hello okten`
// }

// let all = document.getElementsByTagName(`*`)
// for(let i of all){
//     if(i.getAttribute(`id`)){
//         console.log(i);
//     }
// }



// 
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. 
//Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить 
//в блоці з id=content з них список(ul>li), 
//який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків 
//з заголовком та параграфом зміниться.

// let h2 = document.getElementsByTagName(`h2`)
// let content = document.getElementById(`content`)
// let ul = document.createElement(`ul`)

// for(let i of h2){
//     let li = document.createElement(`li`)
//     li.innerText = i.innerText    
//     ul.appendChild(li)
// }

// content.appendChild(ul)


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, 
//та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, 
//текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься 
//в блоці wrap файла rule.html




let rules = [
{
	title: 'Первое правило Бойцовского клуба.',
	body: 'Никому не рассказывать о Бойцовском клубе.'
},
{
	title: 'Второе правило Бойцовского клуба.',
	body: 'Никогда никому не рассказывать о Бойцовском клубе.'
},
{
	title: 'Третье правило Бойцовского клуба.',
	body: 'В схватке участвуют только двое.'
},
{
	title: 'Четвертое правило Бойцовского клуба.',
	body: 'Не более одного поединка за один раз.'
},
{
	title: 'Пятое правило Бойцовского клуба.',
	body: 'Бойцы сражаются без обуви и голые по пояс.'
},
{
	title: 'Шестое правило Бойцовского клуба.',
	body: 'Поединок продолжается столько, сколько потребуется.'
},
{
	title: 'Седьмое правило Бойцовского клуба.',
	body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
},
{
	title: 'Восьмое и последнее правило Бойцовского клуба.',
	body: 'Новичок обязан принять бой.'
}];


let divWrap = document.createElement(`div`)
divWrap.id = `wrap`;
for(let i=0;i<rules.length;i++){

}














