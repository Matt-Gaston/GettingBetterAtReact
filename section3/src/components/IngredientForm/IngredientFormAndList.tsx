import React from 'react';
import './IngredientFormAndList.css';
import IngredientList from './IngredientList/IngredientList.tsx';
import { getRecipeFromMistral } from '../../ai';
import ClankerChefRecipe from './ClankerChefRecipe/ClankerChefRecipe.tsx'


function IngredientFormAndList() {
    const [ingredients, setIngredients] = React.useState<string[]>([]);
    const [recipe, setRecipe] = React.useState<string>("")

    async function getRecipe() : Promise<void> {
        const generatedRecipeMD = await getRecipeFromMistral(ingredients);
        console.log(generatedRecipeMD)
        if (generatedRecipeMD){
            setRecipe(generatedRecipeMD)
        } else {
            setRecipe("Failed to generate a recipe")
        }
    }

    function handleIngredientSubmit(event: React.FormEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const ingredient = formData.get('ingredient') as string;
        setIngredients((prev_ingredients) => [...prev_ingredients, ingredient])
        form.reset();
    }

    return (
        <main>
            <form onSubmit={handleIngredientSubmit}>
                <input 
                    type="text"
                    placeholder="Ingredient Name"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <IngredientList ingredients={ingredients} getRecipeFunc={getRecipe}/>
            <ClankerChefRecipe recipe={recipe}/>
        </main>
    )
}

export default IngredientFormAndList;