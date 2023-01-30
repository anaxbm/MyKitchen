import RecipesContainer from "../Recipes/RecipesContainer"
import './korean.scss'
import axios from "axios"
import {useState, useEffect} from 'react'

const KoreanCuisine= () => {

 const [recipes, setRecipes]= useState ([])

 const getKoreanRecipes = async ()=>{

    const apiResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?cuisine=Korean&number=20&apiKey=${process.env.REACT_APP_API_KEY}`)
   

    setRecipes(apiResponse.data.results)

 }

 

useEffect(
    () =>{
        getKoreanRecipes()
    }, [])


    return (
       <div className="korean">
        <RecipesContainer recipes = {recipes}/>

       </div>
    )
}
export default KoreanCuisine