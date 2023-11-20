import React,{useEffect,useState} from 'react'
import {BsSearch} from 'react-icons/bs';
import { fetchData } from '../service';

const RecipeList = (props) => {

  const [searchedRecipe, setSearchedRecipe] = useState('');
  const [query, setQuery] = useState('Indian');// eslint-disable-next-line
  const [data, setData] = useState('');

    const searchRecipe = (inputRecipe) => {
        fetchData(inputRecipe)
        .then((res) => {
            setData(res)
            props.setLoader(false)
        })
    }

  useEffect(() => {
    fetchData(query).then((res) => {
        setData(res)
        props.setLoader(false)
    })
  }, [props, query])

  return (
    <div className='container'>
        <div className='heading-line'>
            <strong>Search Recipes</strong>
            <div className='input-wrapper' >
                <input 
                onChange={(e) => {setSearchedRecipe(e.target.value)}} 
                value={searchedRecipe} 
                type="text" 
                placeholder='Search your recipe' />
                <button onClick={() => (searchRecipe(searchedRecipe))} ><BsSearch /></button>
            </div> 
        </div>
        <div className='flexbox'>
            {
                data && data.hits.map((item, index) => {
                    return(
                        <div key={index} className='flexItem'>
                            <div className='img-wrapper'>
                                <img src={item.recipe.image} alt={item.recipe.label} />
                            </div>
                            <p>{item.recipe.label}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    </div>
  )
}

export default RecipeList