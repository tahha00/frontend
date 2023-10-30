const fruitForm = document.querySelector("#inputSection form"); //* access to form
// console.log(fruitForm)

fruitForm.addEventListener("submit", extractFruit); //* add event listener to form

function extractFruit(e) {
  e.preventDefault(); //* stops page from refreshing
  fetchFruitData(e.target[0].value)
  //console.log(e);
  //console.log(e.target[0].value);
  e.target[0].value = "" //* clears form
  //console.log(e.target.fruitInput.value)
}

function fetchFruitData(fruit){
    fetch(`https://fruity-api.onrender.com/fruits/${fruit}`)
    .then(processResponse)
    // .then(resp => resp.json()) //* take the response, and process it as json. - json to javascript object.
    .then(data => addFruit(data)) //* pass that JS data into our function addFruit.
    .catch(err => console.log(err))
}

function processResponse(resp){
    if(resp.ok) {
        return resp.json()
    } else {
        throw "Error: http status code = " + resp.status
    }
}

//const tahha = require("./script2");
//require("./script3");
//console.log(tahha);

const fruitList = document.querySelector("#fruitSection ul")

const fruitNutrition = document.querySelector("#nutritionSection p")

let calories = 0
const fruitCal = {}

function addFruit(fruit) {
    console.log('addFruit', fruit)
    const li = document.createElement("li") //*creates element - li item in this example.
    li.addEventListener("click", removeFruit, {once:true}) //* event listener for clicking on any list item.
    li.textContent = fruit['name'] 
    fruitList.appendChild(li) //* adds item to dom - so adds it to list.

    fruitCal[fruit.name] = fruit.nutritions.calories
    console.log(fruitCal)

    calories += fruit.nutritions.calories
    fruitNutrition.textContent = calories
}

function removeFruit(e) {
    console.log(fruitCal)
    const fruitName = e.target.textContent
    calories -= fruitCal[fruitName]
    fruitNutrition.textContent = calories

    //delete fruitCal[fruitName]

    e.target.remove()
}



