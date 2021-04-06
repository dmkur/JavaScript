

let div = document.createElement(`div`)
document.body.appendChild(div)

fetch('https://api.sampleapis.com/futurama/characters')
.then(res => res.json())

.then(heroes => {
    for (const hero of heroes) {
        //console.log(hero);
        let info = document.createElement(`div`)
        let anchor = document.createElement(`a`)
        
        anchor.href = 
        `11_Lesson_8_01.03.2021/details.html?name=${hero.name.first}&surname=${hero.name.last}` 

        anchor.innerText = `${hero.id} - 
        ${hero.name.first} - 
        ${hero.name.last}`


        let img = document.createElement(`img`)
        img.src = hero.images.main

        info.appendChild(anchor)
        div.appendChild(info)
        div.appendChild(img)
    }
})