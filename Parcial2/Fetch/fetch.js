

const handlecaracters = (callback)=>{
    const results = fetch('https://rickandmortyapi.com/api/character')
    results
        .then(Res => Res.json())
        .then(data => callback(data))
    
}


handlecaracters(data =>{
    console.log(data)

    data.results.forEach(character =>{
        const cards= document.createRange().createContextualFragment(`

            <div class="col my-3 ">
              <div class="card h-100 bg-secondary bg-gradient text-white ">
                <img src="${character.image}">
                <div class="card-body">
                  <h5 class="card-title">${character.name}</h5>
                  <p class="card-text text-white-50">Last known location: </br> <p> ${character.location.name}</p></p>
                </div>
                <div class="card-footer">
                  <small>Status: ${character.status}</small>
                </div>
              </div>
            </div>  
          
        `)
        const main = document.querySelector("main");
        main.append(cards)
    })
})
