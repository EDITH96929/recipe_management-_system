// document.addEventListener('DOMContentLoaded', () => {
//     const srConfig = (origin, distance = '50px', delay = 200, opacity = 1, interval = 0) => ({
//         origin,
//         distance,
//         delay,
//         opacity,
//         interval,
//         duration: 1000,
//         easing: 'ease-in-out',
//         reset: true
//     });

//     const sr = ScrollReveal();

//     sr.reveal('.navbar', srConfig('top', '50px', 200));
//     sr.reveal('.logo', srConfig('left', '100px', 400, 0));
//     sr.reveal('.search-container', srConfig('right', '50px', 600, 0));
//     sr.reveal('.recipe-card', srConfig('bottom', '50px', 500, 0, 200));
//     sr.reveal('.recipe-name', srConfig('left', '30px', 800));
//     sr.reveal('.rating', srConfig('right', '30px', 1000));
// });


// function navigateToRecipe(pageUrl) {
//     window.location.href = pageUrl;
//   }

//   ScrollReveal().reveal('.recipe-button', {
//     duration: 1000,        
//     origin: 'left',      
//     distance: '50px',      
//     easing: 'ease-in-out', 
//     delay: 200,            
//     reset: true,           
//   });

const recipe = ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 300,
  easing: 'ease-out',
  reset: true
});

recipe.reveal('.recipe-container', {
  origin: 'top',
  distance: '50px',
  duration: 1200,
  delay: 400,
  easing: 'ease-in-out'
});

recipe.reveal('.recipe-card', {
  origin: 'bottom',
  distance: '60px',
  duration: 1200,
  delay: 500,
  easing: 'ease-in-out',
  interval: 200
});

recipe.reveal('.recipe-name', {
  origin: 'left',
  distance: '30px',
  duration: 1000,
  delay: 600,
  easing: 'ease-in-out'
});

recipe.reveal('.rating', {
  origin: 'right',
  distance: '30px',
  duration: 1000,
  delay: 700,
  easing: 'ease-in-out'
});

recipe.reveal('.icon-details', {
  origin: 'top',
  distance: '20px',
  duration: 1000,
  delay: 800,
  easing: 'ease-in-out'
});

recipe.reveal('.recipe-button', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  delay: 900,
  easing: 'ease-out',
  interval: 100
});


  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-out',
    reset: true
  });

  sr.reveal('.home-text', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 300
  });

  sr.reveal('.home-image', {
    origin: 'right',
    distance: '80px',
    duration: 1200,
    delay: 500
  });

  sr.reveal('.curvy-menu', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 700
  });

  sr.reveal('#dynamic-text', {
    origin: 'top',
    distance: '50px',
    duration: 1500,
    delay: 900
  });



  sr.reveal('.features .container', {
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 300
  });

  sr.reveal('.feature-box', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 500,
    interval: 200
  });

  sr.reveal('.icon-container', {
    origin: 'left',
    distance: '30px',
    duration: 1000,
    delay: 600
  });
  
  




  //--------------------------------------------------------------

  const apis=["7f2698d859f24c3f91102af507f7eae0","d346ae4a383543e59cf356a562969f53","8287c26d4cff4460b7e9473f9a076c5e","5a535224b9e0422a84515a0273df4df0"]
const getKey=()=> Math.floor(Math.random()*apis.length)

const apiKey = apis[getKey()]; 
const recipeContainer = document.querySelector(".recipe-container");

// const filterButtons = document.querySelectorAll(".filter");
const searchBar = document.getElementById("search-bar");
console.log(searchBar)
const searchButton = document.getElementById("search-button");
const toastContainer = document.getElementById("toast-container"); //toast message

const reqConfig = {
  method: "GET",
  headers: {
    "x-api-key": apiKey,
  },
};
async function fetchRecipes(searchQuery = "") {
  const endpoint = searchQuery
    ? `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}`
    : `https://api.spoonacular.com/recipes/random?number=18`;
  const response = await fetch(endpoint, reqConfig);
  const data = await response.json();
console.log(data)
  return searchQuery ? data.results : data.recipes;
}


function renderRecipes(recipes, category = "all") {
  recipeContainer.innerHTML = "";
 

  const filteredRecipes = recipes.filter((recipe) => {
    if (category === "veg") return recipe.vegetarian;
    if (category === "non-veg") return !recipe.vegetarian;
    return true;
  });

  if (filteredRecipes.length === 0) {
    const noResultMessage = document.createElement("div");
    noResultMessage.classList.add("no-result");
    noResultMessage.innerText =
      "No recipes found. Please try a different search or filter.";
    recipeContainer.appendChild(noResultMessage);
    return;
  }

  filteredRecipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
    <!-- Circular Image -->
    <img src="${recipe.image}" alt="${recipe.title}">

    <!-- Recipe Details -->
    <div class="recipe-details">
      <h3 class="recipe-name">${recipe.title}</h3>
    
      <p class="ingredients">
        Ready in ${recipe.readyInMinutes} minutes. Serves ${recipe.servings}.
      </p>
      <div class="icon-details">
        <i class="fa-regular fa-clock"></i>
        <i class="fa-regular fa-face-smile"></i>
        <i class="fa-regular fa-user"></i>
      </div>
      <p class="details">${recipe.readyInMinutes} minutes | ${
    recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"
  } | ${recipe.servings} people</p>
      <a href="recipe-details.html?id=${recipe.id}">
        <button class="recipe-button" onclick="navigateToRecipe('${recipe.id}')">Explore</button>
      </a>
    </div>
  `;
    recipeContainer.appendChild(card);
  });
}














(async function initialize() {
  // if(!recipesFromStorage){

      const recipes = await fetchRecipes();
      renderRecipes(recipes);
      // sessionStorage.setItem("currentRecipe", JSON.stringify(recipes));

      
  // }else{
  //     renderRecipes(recipesFromStorage);

  // }

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const category = button.getAttribute("data-category");
//     renderRecipes(recipes, category);
//   });
// });

// searchButton.addEventListener("click", handleSearch);
})();// start application
