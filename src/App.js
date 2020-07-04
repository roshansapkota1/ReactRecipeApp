import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe'

const App = ( ) => {
const app_id = 'fee68eda';
const app_key = 'e5ac670d6c9cc04118e7efda54428159'

  const [recipes, setrecipes] = useState([])
  const [search, setSearch] = useState('')


  useEffect( ()=> {getRecipes()}, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`)
    const data = await response.json();
    setrecipes(data.hits)
    console.log(data.hits);
    
  }

  const updateSearch = (e) => {
      setSearch(e.target.value) 
      console.log(search)
      
  }


  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit' >Search</button>
    </form>
    {recipes.map((recipe, index) => (
      <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} src={recipe.recipe.image}/> 
    ) )}
    </div>
  )
}


export default App;
