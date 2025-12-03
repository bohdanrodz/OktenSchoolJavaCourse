interface RecipesResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}
interface Recipe{
    id:number;
    name:string;
    ingredients:string[];
    instructions:string[];
    prepTimeMinutes:number;
    cookTimeMinutes:number;
    servings: number;
    difficulty:string;
    cuisine:string;
    caloriesPerServing:number;
    tags:string[];
    userId:number;
    image:string;
    rating:number;
    reviewCount:number;
    mealType:string[];
}
fetch('https://dummyjson.com/recipes?limit=50')
    .then((res:Response) => res.json() as Promise<RecipesResponse>)
    .then(({recipes}:RecipesResponse):void => {
        const recipesContainer:HTMLDivElement = document.createElement('div');
        recipesContainer.classList.add('recipes-container');
        for (const recipe of recipes) {
            const recipeContainer:HTMLDivElement = document.createElement('div');
            recipeContainer.classList.add('recipe');
            const recipeMainInfo:HTMLDivElement = document.createElement('div');
            recipeMainInfo.innerText = `
                id: ${recipe.id}
                name: ${recipe.name}
            `
            const ingredientListContainer:HTMLDivElement = document.createElement('div');
            ingredientListContainer.innerHTML = '<p>ingredients:</p>'
            const ingredientList:HTMLUListElement = document.createElement('ul');
            for (const ingredient of recipe.ingredients) {
                const li:HTMLLIElement = document.createElement('li');
                li.innerText = ingredient;
                ingredientList.appendChild(li);
            }
            ingredientListContainer.appendChild(ingredientList);
            const recipeInstructions:HTMLDivElement = document.createElement('div');
            recipeInstructions.innerHTML = '<p>instructions:</p>'
            const recipeInstructionsList:HTMLOListElement = document.createElement('ol');
            for (const recipeInstruction of recipe.instructions) {
                const li:HTMLLIElement = document.createElement('li');
                li.innerText = recipeInstruction;
                recipeInstructionsList.appendChild(li);
            }
            recipeInstructions.appendChild(recipeInstructionsList);
            const recipeSecondPartInfo:HTMLDivElement = document.createElement('div');
            recipeSecondPartInfo.innerText = `
                prepTimeMinutes: ${recipe.prepTimeMinutes}
                cookTimeMinutes: ${recipe.cookTimeMinutes}
                servings: ${recipe.servings}
                difficulty: ${recipe.difficulty}
                cuisine: ${recipe.cuisine}
                caloriesPerServing: ${recipe.caloriesPerServing}
            `
            const tagsContainer:HTMLDivElement = document.createElement('div');
            tagsContainer.innerText = `tags:`
            const tagsList:HTMLUListElement = document.createElement('ul');
            for (const tag of recipe.tags) {
                const li:HTMLLIElement = document.createElement('li');
                li.innerText = tag;
                tagsList.appendChild(li);
            }
            tagsContainer.appendChild(tagsList);
            const recipeThirdPartInfo:HTMLDivElement = document.createElement('div');
            recipeThirdPartInfo.innerText = `
                userId: ${recipe.userId}
                rating: ${recipe.rating}
                reviewCount: ${recipe.reviewCount}
            `
            const mealTypesContainer:HTMLDivElement = document.createElement('div');
            mealTypesContainer.innerHTML = '<p>mealType:</p>'
            const mealTypesList:HTMLUListElement = document.createElement('ul');
            for (const mealTypeElement of recipe.mealType) {
                const li:HTMLLIElement = document.createElement('li');
                li.innerText = mealTypeElement;
                mealTypesList.appendChild(li);
            }
            mealTypesContainer.appendChild(mealTypesList);
            const recipeImage:HTMLImageElement = document.createElement('img');
            recipeImage.setAttribute('src', recipe.image);
            const hr:HTMLHRElement = document.createElement('hr');
            recipeContainer.append(recipeImage, recipeMainInfo, ingredientListContainer, recipeInstructions, recipeSecondPartInfo, tagsContainer, recipeThirdPartInfo, mealTypesContainer, hr);
            recipesContainer.appendChild(recipeContainer);
        }
        document.body.appendChild(recipesContainer);
});