const BASE_URL = 'http://localhost:3000/recipes'

document.addEventListener('DOMContentLoaded', () => {
    fetchRecipes()
})
   

function fetchRecipes(searchTerm = ''){
    fetch(`http://localhost:3000/recipes`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then((res) => res.json())
    .then((dishes) => {
        {dishes.forEach(recipe => {
            getRecipe(recipe)
        });
        }
    } )
    
}



function getRecipe(recipe){
    const parentDiv = document.querySelector('#caders');
    parentDiv.className = 'card';
    parentDiv.style.height = '500px';
    parentDiv.style.width = '600px';

    const image = document.createElement('img');
    image.classList.add('card-img-top', 'imgH');
    image.style.height = '500px';
    image.style.width = '600px';
    image.src = recipe.image;
    image.alt = recipe.dish;

    const cBody = document.createElement('div');
    cBody.className = 'card-body';

    const bTitle = document.createElement('h5');
    bTitle.className = 'card-title';
    bTitle.innerHTML = recipe.dish;

    const desc = document.createElement('p');
    desc.className = 'card-text';
    desc.innerHTML = recipe.description;

    const ingrButton = document.createElement('button');
    ingrButton.classList.add('btn', 'btn-success');
    ingrButton.type = 'button';
    ingrButton.innerHTML = 'COOK ME';
    ingrButton.addEventListener('click', () => {

        generateIngridients(recipe)
        alert('SCROLL TO THE TOP TO GET YOUR RECIPE');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

  

    cBody.append(bTitle, desc, ingrButton);
    parentDiv.append(image, cBody);
}
function generateIngridients(recipe) {

    const allDetails = document.querySelectorAll('.recipe-details');
    allDetails.forEach(detail => {
        detail.parentNode.removeChild(detail);
    });

    const ingrDiv = document.querySelector('#recp');
    ingrDiv.className = 'col';

    const details = document.createElement('div');
    details.className = 'recipe-details';

    const subheading = document.createElement('h6');
    subheading.innerHTML = 'Ingredients:';
    subheading.className = 'subHeading'

    const ingredientsList = document.createElement('ul');

    recipe.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientItem);
    });

    const procHeader = document.createElement('h6');
    procHeader.innerHTML = 'Procedure:';
    procHeader.className = 'subHeading'

    const procedure = document.createElement('ol');
    recipe.procedure.forEach(step => {
        const stepItem = document.createElement('li');
        stepItem.innerHTML = step;
        procedure.appendChild(stepItem);
    });
    const timeNeeded = document.createElement('h6')
    timeNeeded.innerHTML = 'Total Time Needed:'
    timeNeeded.className = 'subHeading'

        const ttlTime = document.createElement('p')
        ttlTime.innerHTML = recipe.total_time_taken 
    
        timeNeeded.append(ttlTime)

    const servings = document.createElement('h6')
    servings.innerHTML = 'Servings:'

    const servingsNo = document.createElement('p')
    servingsNo.innerHTML = recipe.servings

    

    details.append(subheading, ingredientsList, procHeader, procedure, timeNeeded, ttlTime, servings, servingsNo);
    ingrDiv.appendChild(details);
}