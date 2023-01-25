import './recipes.scss'
import RecipeCard from '../RecipeCard/RecipeCard'

const RecipesContainer = ({recipes}) => {

console.log(recipes)

const recipesCollection = recipes.map((recipe)=>{

    return <RecipeCard title= {recipe.title} image = {recipe.image} key= {recipe.id}/>

})
console.log(recipesCollection)
    return (
        <section className='recipes-container'>
            {recipesCollection}
           
        </section>

    )
}
export default RecipesContainer