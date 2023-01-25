import './mexican.scss'
import RecipesContainer from "../Recipes/RecipesContainer"
import axios from 'axios'
import { useState, useEffect } from 'react'



const MexicanCuisine= () => {

const [recipes, setRecipes] =useState([])

const getMexicanRecipes= async ()=> {

    const apiResponse= await axios.get('https://api.spoonacular.com/recipes/complexSearch?cuisine=Mexican&number=20&apiKey=0ca9a24559c547fcb5e4bd188a0a2448')



    setRecipes(apiResponse.data.results)
}

    useEffect(()=>{
        
          getMexicanRecipes()  
        }, [])


    return (
        <div className="mexican">
        <RecipesContainer recipes ={recipes}/>
        </div>
       
    )
}
export default MexicanCuisine