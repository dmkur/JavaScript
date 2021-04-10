let content = document.createElement(`div`)
document.body.appendChild(content)

fetch('https://api.sampleapis.com/futurama/characters')
.then(response => response.json())
.then(item => {
    for (const hero of item) {
        let info = document.createElement(`div`)
        let imgHero = document.createElement(`img`)
        let anchor = document.createElement(`a`)      
         
        
        imgHero.src = `${hero.images.main}`

        //anchor.innerText = `${hero.id} - ${hero.name.first} - ${hero.name.last}`*
        anchor.innerText = `Who am I?`
        anchor.href = `charectersInfo.html?name=${hero.name.first}&lastname=${hero.name.last}&full=${JSON.stringify(hero)}`


        info.appendChild(anchor)
        content.appendChild(info)
        content.appendChild(imgHero)
       
    }
})