import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe'
import HeaderGallary from './components/HeaderGallary'

const App = ( ) => {
const app_id = 'fee68eda';
const app_key = 'e5ac670d6c9cc04118e7efda54428159'

  const [recipes, setrecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('barbeque')


  useEffect( ()=> {getRecipes()}, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
    const data = await response.json();

    setrecipes(data.hits)
    console.log(data.hits);
    
  }

  const updateSearch = (e) => {
      setSearch(e.target.value) 
      
  }

  const responseOnClick = (e) => {
    e.preventDefault()
    setQuery(search)

  }
  


  return (
    <div className='App'>
      <HeaderGallary />
      <form className='search-form' onClick={responseOnClick}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit' >Search</button>
    </form>
    <div className='recipe'>
    {!query ? <h1>loading..</h1> : recipes.map((recipe, index) => (
      <Recipe
       key={index}
       title={recipe.recipe.label} 
       calorie={recipe.recipe.calories}  
       src={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}/> 
    ) ) }
    
    </div>
    </div>
  )
}


export default App;
