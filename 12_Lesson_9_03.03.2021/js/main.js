// Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


// повторення==========================================
// let random = Math.random()
// new Promise (resolve => {
//     setTimeout(()=>{
//         resolve(`H`)
//         console.log();
//     },random)
// }).then(result=>{
//     return new Promise (resolve=>{
//         setTimeout(()=>{
//             resolve(result)
//             console.log(result);
//         },random)
//     })
// }).then(item=>{
//     return new Promise (good=>{
//         setTimeout(()=>{
//             good(item += `e`)
//             console.log(item);
//         },random)
//     })
// }).then(result=>{
//     return new Promise (resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`l`)
//             console.log(result);
//         },random)       
//     })    
// }).then(result=>{
//     return new Promise (resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`l`)
//             console.log(result);
//         },random)
//     })
// }).then(result =>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`o`)
//             console.log(result);
//         },random)
//     })
// }).then(result=>{
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(result+=` W`)
//             console.log(result);
//         },random)
//     })
// }).then(value => {
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(value+=`o`)
//             console.log(value);
//         },random)
//     })
// }).then(result=>{
//     return new Promise(value=>{
//         setTimeout(()=>{
//             value(result+=`r`)
//             console.log(result);
//         },random)
//     })
// }).then(value=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(value+=`l`)
//             console.log(value);
//         },random)
//     })
// }).then(element=>{
//     return new Promise(value=>{
//         setTimeout(()=>{
//             value(element+=`d`)
//             console.log(element);
//         },random)
//     })
// })
// повторення==========================================


// let random = Math.random()
// let msg = `H`

// let promis = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve(`H`)
//     },random)
// })

// promis.then((result)=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(`H`)
//             console.log(result);
//         },random)
//     })
// }).then((result) =>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result +=`e`)
//             console.log(result);
//         },random)
//     })
// }).then(result=>{
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(result+= `l`)
//             console.log(result);
//         },random)
//     })
// }).then(result =>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`l`)
//             console.log(result);
//         },random)
//     })
// }).then(result=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`o`)
//             console.log(result);
//         },random)
//     })
// }).then(result=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result+=` `)
//         },random)
//     })
// }).then(result=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`W`)
//             console.log(result);
//         },random)
//     })
// }).then(result=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`o`)
//             console.log(result);
//         },random)
//     })
// }).then(result=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(result+=`r`)
//             console.log(result);
//         },random)
//     })
// }).then(value =>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(value+=`l`)
//             console.log(value);
//         },random)
//     })
// }).then(value=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(value+=`d`)
//             console.log(value);
//         },random)
//     })
// }).then(value=>{
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve(value+=`!`)
//             console.log(value);
//         },random)
//     })
// })

// *** за допомогою fetch (як в прикладі) отримати від 
//jsonplaceholder всі users.
//  За допомогою document.createElement вивести їх в браузер.
//  Помістити кожен окремий об'єкт в блок, при цьому кожен 
//внутрішній об'єкт в свій блок (блок в блоці).
// ==========================повторення
// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(result=> result.json())
// .then(result =>{
//     let divGeneral = document.createElement(`div`)
//     document.body.appendChild(divGeneral)
//     result.forEach(element => {
//         let div = document.createElement(`div`)

//         div.innerText = JSON.stringify(element)


//         divGeneral.appendChild(div)
//     });І
    
// })
// ==========================повторення

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(response => response.json())
// .then(user => {
//     user.forEach(item => {
//         console.log(item);
       
//         let div2 = document.createElement(`div`)
//         let div3 = document.createElement(`div`)
//         let div4 = document.createElement(`div`)

//         div2.innerText = JSON.stringify(item)
//         div2.style.margin = `20px`

//         div3.innerText = JSON.stringify(item.address)
//         div4.innerText = JSON.stringify(item.company)


//         div2.appendChild(div3)
//         div2.appendChild(div4)
//         document.body.appendChild(div2)
//     });
// })


// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder 
//всі posts.
// За допомогою document.createElement вивести їх в браузер.
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній 
//об'єкт(якщо він існує) в свій блок (блок в блоці).

// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(posts => posts.json())
// .then(value =>{
//     console.log(value);
//     value.forEach(element => {
//         let div = document.createElement(`div`)
//         let div2 = document.createElement(`div`)
//         let div3 = document.createElement(`div`)

//         div.innerText = `id-${element.id}`
//         div.style.marginBottom = `20px`

//         div2.innerText = `body - ${element.body}`
//         div3.innerText = `title - ${element.title}`

//         div.appendChild(div2)
//         div.appendChild(div3)
//         document.body.appendChild(div)
//     });

// })

// ****** при помощи fetch (как в примере) получить от jsonplaceholder 
// все posts.
// Внутри последнего then() сделать еще один fetch который сделает запрос 
// и получит все comments.
// Объеденить соответсвующий post с соответсвующими comment и вывести в 
// браузер.
// Подсказка : в каждом comment есть поле postId которое определяет какой 
// комментарий принадлежит какому посту

fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(value=>value.json())
.then(posts=>{
   for (const itemPost of posts) {
       itemPost.comment = []
       fetch(`https://jsonplaceholder.typicode.com/comments`)
       .then(value=>value.json())
       .then(comment => {
           for (const itemComment of comment) {
              if(itemPost.id === itemComment.postId){
                  itemPost.comment.push(itemComment)
              }              
           }
           
       })

   }    
})
