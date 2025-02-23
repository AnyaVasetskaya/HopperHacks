const recipes = [
    {
        id: 646368,
        title: 'Hawaiian Grilled Cheese',
        image: 'https://img.spoonacular.com/recipes/646368-312x231.png',
        imageType: 'png',
        usedIngredientCount: 2,
        missedIngredientCount: 4,
        missedIngredients: [ [Object], [Object], [Object], [Object] ],
        usedIngredients: [ [Object], [Object] ],
        unusedIngredients: [],
        likes: 1
    },
    {
        id: 634545,
        title: 'Beans Hawaiian',
        image: 'https://img.spoonacular.com/recipes/634545-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 2,
        missedIngredientCount: 8,
        missedIngredients: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object]
        ],
        usedIngredients: [ [Object], [Object] ],
        unusedIngredients: [],
        likes: 6
    },
    {
        id: 661447,
        title: 'Square Deviled Eggs',
        image: 'https://img.spoonacular.com/recipes/661447-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [ [Object], [Object] ],
        usedIngredients: [ [Object] ],
        unusedIngredients: [ [Object] ],
        likes: 25
    },
    {
        id: 982365,
        title: 'Instant Pot Hawaiian Chicken',
        image: 'https://img.spoonacular.com/recipes/982365-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [ [Object], [Object] ],
        usedIngredients: [ [Object] ],
        unusedIngredients: [ [Object] ],
        likes: 19
    },
    {
        id: 1956748,
        title: 'Pina Colada',
        image: 'https://img.spoonacular.com/recipes/1956748-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [ [Object], [Object] ],
        usedIngredients: [ [Object] ],
        unusedIngredients: [ [Object] ],
        likes: 0
    }
]

// Function to create and display image buttons
function showRecipes() {
    const container = document.getElementById("button-container");

    // Clear existing buttons (if any) to prevent duplicates
    container.innerHTML = '';

    recipes.forEach(item => {
        const button = document.createElement("button");
        button.className = "image-button";
        button.id = `button-${item.id}`; // Assign unique ID to button

        button.addEventListener("click", () => {
            alert(`You clicked ${item.title} (ID: ${item.id})`);
        });

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.title;

        const span = document.createElement("span");
        span.textContent = item.title;

        button.appendChild(img);
        button.appendChild(span);
        container.appendChild(button);
    });
}


// Attach event listener to "Show Image Buttons" button
document.getElementById("button").addEventListener("click", showRecipes);