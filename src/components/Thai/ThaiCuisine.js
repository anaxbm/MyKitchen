import './thai.scss'
import RecipesContainer from '../Recipes/RecipesContainer'
import axios from 'axios'
import {useState, useEffect} from 'react'
const ThaiCuisine = () => {
    const [recipes, setRecipes] = useState([])

    const getThaiRecipes= async ()=>{
        
        const apiResponse= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=Thai&number=20&apiKey=${process.env.REACT_APP_API_KEY}`)

        console.log(apiResponse.data.results)
        setRecipes(apiResponse.data.results)
    }

    useEffect(
        ()=>{
           getThaiRecipes()

        }, []
    )



    return (
        <div className='thai'> 
        <RecipesContainer recipes = {recipes}/>

        </div>
    )
}

export default ThaiCuisine