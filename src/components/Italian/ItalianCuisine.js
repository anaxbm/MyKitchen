import './italian.scss'
import RecipesContainer from '../Recipes/RecipesContainer'
import axios from 'axios'
import {useState, useEffect} from 'react'



const ItalianCuisine = () => {

    const [recipes, setRecipes] = useState([])


    const getItalianRecipes= async () => {

        const apiResponse= await axios.get('https://api.spoonacular.com/recipes/complexSearch?cuisine=Italian&number=5&apiKey=7273d60b17a64977950c0d5938d916a0')
         console.log(apiResponse.data.results)

         setRecipes(apiResponse.data.results)


    }


useEffect(
    ()=>{
        getItalianRecipes()
    }, [])


    return (
       <div className='italian'>
       <RecipesContainer/>
       </div>
    )
}

export default ItalianCuisine