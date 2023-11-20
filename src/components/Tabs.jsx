import React, { useEffect, useState } from 'react'
import {CiPizza} from 'react-icons/ci'
import {GiFruitBowl , GiNoodles,GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import { fetchTabData } from '../service'


const Tabs = (props) => {
    const [active, setActive] = useState('Pizza')
    const [tabData, setTabData] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [tabLabel, setTabLabel] = useState([ 
        {
            name: 'Pizza',
            icon: <CiPizza/>, 
            id:'1b6dfeaf0988f96b187c7c9bb69a14fa',
        },
        {
            name: 'Noodles',
            icon: <GiNoodles/>, 
            id:'b2a6ba8505c4cd4cb2958b1a467153bf',
        },
        {
            name: 'Dessert',
            icon: <GiFruitBowl/>, 
            id:'d086f51bd7ca046eac74bda9198ece46',
        },
        {
            name: 'Ice cream',
            icon: <MdOutlineIcecream/>, 
            id:'c781f77117b7830e403780c081cf0b8f',
        }
    ]);
    
    const handleClick = (name, id) => {
        setActive(name)
        fetchTabData(id)
        .then((res) => {
            setTabData(res)
            props.setLoader(false)
        })
    }

    useEffect(() => {
        fetchTabData(tabLabel[0].id)
        .then((res) => {
            setTabData(res)
            props.setLoader(false)
        })
    }, [props, tabLabel])

    return (
        <div className="container">
        <h1 className='recipeHeading'>Top choices!</h1>
        <div className="tabs">
            {tabLabel.map((item, index) => (
                <div onClick={() => (handleClick(item.name, item.id))} key={index} className={`tablist ${active === item.name ? 'active' : ""}`}>
                    {item.icon}
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
        <div className='recipe_banner'>
            {tabData !== '' && <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {tabData.recipe.ingredientLines.map((list, index) => {
                                return(
                                    <li key={index}><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>{list}</span></li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image}alt={tabData.recipe.label} />
                    </div>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Tabs