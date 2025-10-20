

interface IngredientListProps{
    ingredients: string[];
    getRecipeFunc: () => Promise<void>;
}

function IngredientList (props: IngredientListProps) {

    const ingredientsListItems = props.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
    ));

    if (props.ingredients.length > 0) {
        return (
            
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        {ingredientsListItems}
                    </ul>
                    { props.ingredients.length > 3 ? <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={props.getRecipeFunc}>Get a recipe</button>
                    </div> : null}
                </section>
        )
    } else { null }
        
}

export default IngredientList;