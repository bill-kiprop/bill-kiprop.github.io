const BASE_URL = 'http://localhost:3000/recipes'

document.addEventListener('DOMContentLoaded', () => {
    fetchRecipes()
})

function fetchRecipes(){
    fetch(`http://localhost:3000/recipes`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((res) => res.json())
    .then((dishes) => {
        dishes.forEach(recipe => {
            getRecipe(recipe)
        });
    } )
    
}

function getRecipe(recipe){


    const parentDiv = document.querySelector('#caders')
    parentDiv.className = 'card'
    parentDiv.style.height = '500px'
    parentDiv.style.width = '600px'

    const image = document.createElement('img')
        image.classList.add('card-img-top', 'imgH')
    image.style.height = '500px'
    image.style.width = '600px'
    image.src = recipe.image
    image.alt = recipe.dish

    const cBody = document.createElement('div')
    cBody.className = 'card-body'

    const bTitle = document.createElement('h5')
    bTitle.className = 'card-title'
    bTitle.innerHTML = recipe.dish

    const desc = document.createElement('p')
    desc.className = 'card-text'
    desc.innerHTML = recipe.description

    const ingrButton = document.createElement('button') 
    ingrButton.classList.add('btn', 'btn-success')
    ingrButton.type = 'button'
    ingrButton.innerHTML = 'Ingridients'

    cBody.append(bTitle, desc, ingrButton)
parentDiv.append(image, cBody)

}

