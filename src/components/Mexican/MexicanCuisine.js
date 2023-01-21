import './mexican.scss'
import RecipesContainer from "../Recipes/RecipesContainer"
import axios from 'axios'
import { useState, useEffect } from 'react'
const MexicanCuisine= () => {
    
const [recipes, setRecipes] =useState([])



    useEffect(()=>{
        const getMexicanRecipes= async ()=> {
            const apiResponse= await axios.get('https://api.spoonacular.com/recipes/complexSearch?cuisine=Mexican&number=5&apiKey=7273d60b17a64977950c0d5938d916a0').then(
                 (response)=>{
                
                    return response
                }
            )
            setRecipes(apiResponse.results)
        }
          getMexicanRecipes()  
        }, [])



    return (
        <div className="mexican">
        <RecipesContainer/>
        </div>
       
    )
}
export default MexicanCuisine