import './recipecard.scss'
const RecipeCard = ({title, image}) => {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <img src={image} alt='img'/>

            
        </div>
    )
}
export default RecipeCard