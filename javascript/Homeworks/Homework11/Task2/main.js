fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then(({recipes}) => {
        const recipesContainer = document.createElement('div');
        recipesContainer.classList.add('recipes-container');
        for (const recipe of recipes) {
            const recipeContainer = document.createElement('div');
            recipeContainer.classList.add('recipe');
            const recipeMainInfo = document.createElement('div');
            recipeMainInfo.innerText = `
                id: ${recipe.id}
                name: ${recipe.name}
            `
            const ingredientListContainer = document.createElement('div');
            ingredientListContainer.innerHTML = '<p>ingredients:</p>'
            const ingredientList = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ingredientList.appendChild(li);
            }
            ingredientListContainer.appendChild(ingredientList);
            const recipeInstructions = document.createElement('div');
            recipeInstructions.innerHTML = '<p>instructions:</p>'
            const recipeInstructionsList = document.createElement('ol');
            for (const recipeInstruction of recipe.instructions) {
                const li = document.createElement('li');
                li.innerText = recipeInstruction;
                recipeInstructionsList.appendChild(li);
            }
            recipeInstructions.appendChild(recipeInstructionsList);
            const recipeSecondPartInfo = document.createElement('div');
            recipeSecondPartInfo.innerText = `
                prepTimeMinutes: ${recipe.prepTimeMinutes}
                cookTimeMinutes: ${recipe.cookTimeMinutes}
                servings: ${recipe.servings}
                difficulty: ${recipe.difficulty}
                cuisine: ${recipe.cuisine}
                caloriesPerServing: ${recipe.caloriesPerServing}
            `
            const tagsContainer = document.createElement('div');
            tagsContainer.innerText = `tags:`
            const tagsList = document.createElement('ul');
            for (const tag of recipe.tags) {
                const li = document.createElement('li');
                li.innerText = tag;
                tagsList.appendChild(li);
            }
            tagsContainer.appendChild(tagsList);
            const recipeThirdPartInfo = document.createElement('div');
            recipeThirdPartInfo.innerText = `
                userId: ${recipe.userId}
                rating: ${recipe.rating}
                reviewCount: ${recipe.reviewCount}
            `
            const mealTypesContainer = document.createElement('div');
            mealTypesContainer.innerHTML = '<p>mealType:</p>'
            const mealTypesList = document.createElement('ul');
            for (const mealTypeElement of recipe.mealType) {
                const li = document.createElement('li');
                li.innerText = mealTypeElement;
                mealTypesList.appendChild(li);
            }
            mealTypesContainer.appendChild(mealTypesList);
            const recipeImage = document.createElement('img');
            recipeImage.setAttribute('src', recipe.image);
            const hr = document.createElement('hr');
            recipeContainer.append(recipeImage, recipeMainInfo, ingredientListContainer, recipeInstructions, recipeSecondPartInfo, tagsContainer, recipeThirdPartInfo, mealTypesContainer, hr);
            recipesContainer.appendChild(recipeContainer);
        }
        document.body.appendChild(recipesContainer);
});