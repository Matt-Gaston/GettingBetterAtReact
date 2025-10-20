import Markdown from "react-markdown"


interface ClankerChefRecipeProps{
    recipe: string
}

function ClankerChefRecipe(props: ClankerChefRecipeProps) {
    if (props.recipe.length > 0) {
        return (
        <>
            <h2>Clanker Chef Recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
        </>
        )
    } else {
        return (null)
    }

    
}

export default ClankerChefRecipe