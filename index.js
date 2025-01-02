// JavaScript for toggling the hamburger menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const recipe = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  delay: 300,
  easing: "ease-out",
  reset: false,
}); 
recipe.reveal(".logo", {
  origin: "top",
  distance: "50px",
  duration: 1200,
  delay: 400,
  easing: "ease-in-out",
});
recipe.reveal(".search-container", {
  origin: "left",
  distance: "60px",
  duration: 1200,
  delay: 500,
  easing: "ease-in-out",
  interval: 200,
});

recipe.reveal(".nav-links", {
  origin: "right",
  distance: "30px",
  duration: 1000,
  delay: 700,
  easing: "ease-in-out",
});
recipe.reveal(".recipe-container", {
  origin: "top",
  distance: "50px",
  duration: 1200,
  delay: 400,
  easing: "ease-in-out",
});

recipe.reveal(".recipe-card", {
  origin: "bottom",
  distance: "60px",
  duration: 1200,
  delay: 500,
  easing: "ease-in-out",
  interval: 200,
});

recipe.reveal(".recipe-name", {
  origin: "left",
  distance: "30px",
  duration: 1000,
  delay: 600,
  easing: "ease-in-out",
});

recipe.reveal(".rating", {
  origin: "right",
  distance: "30px",
  duration: 1000,
  delay: 700,
  easing: "ease-in-out",
});

recipe.reveal(".icon-details", {
  origin: "top",
  distance: "20px",
  duration: 1000,
  delay: 800,
  easing: "ease-in-out",
});

recipe.reveal(".recipe-button", {
  origin: "bottom",
  distance: "20px",
  duration: 1000,
  delay: 900,
  easing: "ease-out",
  interval: 100,
});

const sr = ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 200,
  easing: "ease-out",
  reset: false,
});

sr.reveal(".home-text", {
  origin: "left",
  distance: "80px",
  duration: 1200,
  delay: 300,
});

sr.reveal(".home-image", {
  origin: "right",
  distance: "80px",
  duration: 1200,
  delay: 500,
});

sr.reveal(".curvy-menu", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 700,
});

sr.reveal("#dynamic-text", {
  origin: "top",
  distance: "50px",
  duration: 1500,
  delay: 900,
});

sr.reveal(".features .container", {
  origin: "top",
  distance: "60px",
  duration: 1200,
  delay: 300,
});

sr.reveal(".feature-box", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  delay: 500,
  interval: 200,
});

sr.reveal(".icon-container", {
  origin: "left",
  distance: "30px",
  duration: 1000,
  delay: 600,
});

//--------------------------------------------------------------
let recipesFromStorage = JSON.parse(sessionStorage.getItem("currentRecipe"));
let current = [];

const apis = [
  "7f2698d859f24c3f91102af507f7eae0",
  "d346ae4a383543e59cf356a562969f53",
  "8287c26d4cff4460b7e9473f9a076c5e",
  "5a535224b9e0422a84515a0273df4df0",
];
const getKey = () => Math.floor(Math.random() * apis.length);

const apiKey = apis[getKey()];
const recipeContainer = document.querySelector(".recipe-container");

// const filterButtons = document.querySelectorAll(".filter");
const searchBar = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");
const moreButton = document.querySelector(".more");
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
    <img src="${recipe.image}" alt="${recipe.title}">
    <div class="recipe-details">
      <h3 class="recipe-name">${recipe.title}</h3>
      <div class="icon-details">
        <i class="fa-regular fa-clock"></i>
        <i class="fa-regular fa-face-smile"></i>
        <i class="fa-regular fa-user"></i>
      </div>
      <p class="details">${recipe.readyInMinutes} minutes | ${
      recipe.vegetarian
        ? `<i class="fa-solid fa-circle" style="color:green;"></i>`
        : `<i class="fa-solid fa-circle" style="color: red;"></i>`
    } | ${recipe.servings} people</p>
     
        <a class="recipe-button" href="./chicken_recipe_details.html?id=${
          recipe.id
        }">Explore</a>
      
    </div>
  `;
    recipeContainer.appendChild(card);
  });
}
async function handleSearch() {
  const query = searchBar.value.trim();
  if (query) {
    const recipes = await fetchRecipes(query);
    renderRecipes(recipes);
  }
  searchBar.value = "";
}

const getMore = async () => {
  const recipes = await fetchRecipes();
  console.log(recipes)
  const updatedRecipes = [...current, ...recipes];
  sessionStorage.setItem("currentRecipe", JSON.stringify(updatedRecipes));
  renderRecipes(updatedRecipes);

};

(async function initialize() {
  if (!recipesFromStorage) {
    const recipes = await fetchRecipes();
    current = recipes;
    renderRecipes(current);
    sessionStorage.setItem("currentRecipe", JSON.stringify(current));
  } else {
    current = recipesFromStorage;
    renderRecipes(current);
  }

  // filterButtons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     const category = button.getAttribute("data-category");
  //     renderRecipes(recipes, category);
  //   });
  // });

  searchButton.addEventListener("click", handleSearch);
  moreButton.addEventListener("click", getMore);
})(); // start application
