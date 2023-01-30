import './mexican.scss'
import RecipesContainer from "../Recipes/RecipesContainer"
import axios from 'axios'
import { useState, useEffect } from 'react'



const MexicanCuisine= () => {

const [recipes, setRecipes] =useState([])
const getMexicanRecipes= async ()=> {
    console.log(`${process.env.REACT_APP_API_KEY}`)

    const apiResponse= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=Mexican&number=20&apiKey=${process.env.REACT_APP_API_KEY}`)



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