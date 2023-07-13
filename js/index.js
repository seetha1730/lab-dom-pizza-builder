// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
let totalPrice = 0;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

//console.log(ingredients.pepperoni[1])

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  renderButtons();
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((onemush) => {
    if (state.mushrooms) {
      onemush.style.visibility = 'visible';
    } else {
      onemush.style.visibility = 'hidden';
    }
  });
  renderButtons();
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  });
  renderButtons();
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (!state.whiteSauce) {
      sauce.classList.remove('sauce-white');
    } else {
      sauce.classList.add('sauce-white');
    }
  });
  renderButtons();
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crusty) => {
    if (!state.glutenFreeCrust) {
      crusty.classList.remove('crust-gluten-free');
    } else {
      crusty.classList.add('crust-gluten-free');
    }
  });
  renderButtons();
}
function toggleActiveClass(ele, state) {
  if (!state) {
    ele.classList.remove('active');
  } else {
    ele.classList.add('active');
  }
}

function togglePriceItem(ele, state, className, price) {
  
  let panel = document.querySelector('.panel.price ul')
  if (state) {
    panel.appendChild(ele)
    totalPrice += price
  } else {
    if(panel.querySelector(`.${className} `)){
    panel.removeChild(panel.querySelector(`.${className}`))
    totalPrice -= price
    }
  }
}

function renderButtons() {
  let pepperoniButton = document.querySelector('.btn-pepperoni');
  let mushroomButton = document.querySelector('.btn-mushrooms');
  let GreenpepperButton = document.querySelector('.btn-green-peppers');
  let whiteSauceButton = document.querySelector('.btn-sauce');
  let CrustButton = document.querySelector('.btn-crust');

  toggleActiveClass(pepperoniButton, state.pepperoni);
  toggleActiveClass(mushroomButton, state.mushrooms);
  toggleActiveClass(GreenpepperButton, state.greenPeppers);
  toggleActiveClass(whiteSauceButton, state.whiteSauce);
  toggleActiveClass(CrustButton, state.glutenFreeCrust);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panel = document.querySelector('.panel.price ul')
  panel.innerHTML = '';
  totalPrice = basePrice
  const {
    pepperoni: { price: peperoniPrice, name: pepperoniName },
    mushrooms: { price: mushroomPrice ,name:mushroomName},
    greenPeppers: { price: greenPeppersPrice,name:greenPepperName },
    whiteSauce: { price: whiteSaucePrice ,name:whiteSauceName},
    glutenFreeCrust: { price: glutenCrustPrice ,name:glutenCrustName}
  } = ingredients;

 
 let pepperoniItem= document.createElement('li');
 pepperoniItem.innerText = `$${peperoniPrice} ${pepperoniName} `
 pepperoniItem.classList = 'pepperoni'

 let mushroomItem= document.createElement('li');
 mushroomItem.innerText=`$${mushroomPrice} ${mushroomName}`
 mushroomItem.classList = 'mushroomitm'

 let greenPeppers= document.createElement('li');
 greenPeppers.innerText=`$${greenPeppersPrice} ${greenPepperName}`
 greenPeppers.classList = 'greenPeppers'

 let whiteSauce= document.createElement('li');
 whiteSauce.innerText=`$${whiteSaucePrice} ${whiteSauceName}`
 whiteSauce.classList = 'whiteSauce'

 let glutenFreeCrust= document.createElement('li');
 glutenFreeCrust.innerText=`$${glutenCrustPrice} ${glutenCrustName}`
 glutenFreeCrust.classList = 'glutenCrust'

togglePriceItem(pepperoniItem, state.pepperoni, 'pepperoni', peperoniPrice)
togglePriceItem(mushroomItem, state.mushrooms, 'mushroomitm', mushroomPrice)
togglePriceItem(greenPeppers, state.greenPeppers, 'greenPeppers', greenPeppersPrice)
togglePriceItem(whiteSauce, state.whiteSauce, 'whiteSauce', whiteSaucePrice)
togglePriceItem(glutenFreeCrust, state.glutenFreeCrust, 'glutenCrust', glutenCrustPrice)

document.querySelector('.panel.price strong').innerText = `$${totalPrice}`
}
 

  // console.log(
  //   peperoniPrice,
  //   mushroomPrice,
  //   greenPeppersPrice,
  //   whiteSaucePrice,
  //   glutenCrustPrice
  // );




renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderPepperoni();
    renderPrice()
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderMushrooms();
    renderPrice()
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderGreenPeppers();
    renderPrice()
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderPrice()
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderPrice()
});
