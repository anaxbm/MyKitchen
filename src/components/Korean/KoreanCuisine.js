import RecipesContainer from "../Recipes/RecipesContainer"
import './korean.scss'
import axios from "axios"
import {useState, useEffect} from 'react'

const KoreanCuisine= () => {

 const [recipes, setRecipes]= useState ([])

 const getKoreanRecipes = async ()=>{

    const apiResponse = await axios.get('https://api.spoonacular.com/recipes/complexSearch?cuisine=Korean&number=20&apiKey=7273d60b17a64977950c0d5938d916a0')
   

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