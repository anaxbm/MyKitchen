import './recipecard.scss'
const RecipeCard = ({title, image}) => {
    return (
        <div className='card'>
            
            <img className='recipe_img' src={image} alt='img'/>
            <div className='recipe_title'>
             <h1>{title}</h1>
            </div>
            
        </div>
    )
}
export default RecipeCard