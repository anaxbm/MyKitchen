import './italian.scss'
import RecipesContainer from '../Recipes/RecipesContainer'
import axios from 'axios'
import {useState, useEffect} from 'react'



const ItalianCuisine = () => {

    const [recipes, setRecipes] = useState([])


    const getItalianRecipes= async () => {

        const apiResponse= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=Italian&number&apiKey=${process.env.REACT_APP_API_KEY}`)
         console.log(apiResponse.data.results)

         setRecipes(apiResponse.data.results)


    }


useEffect(
    ()=>{
        getItalianRecipes()
    }, [])


    return (
       <div className='italian'>
       <RecipesContainer recipes ={recipes}/>
       </div>
    )
}

export default ItalianCuisine