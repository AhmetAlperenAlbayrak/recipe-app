import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import React from 'react';

function Recipe() {

    // We use the useParams hook to get the id from the url
    const { id } = useParams();

    // We use the useState hook to set the recipe state
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    // We use the useEffect hook to get the recipe data
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setRecipe(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [id.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{recipe.title}</h2>
            <h4>Cooking Time: {recipe.readyInMinutes} minutes</h4>
            <img src={recipe.image} alt={recipe.title} />
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions </Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab === 'instructions' && (
            <div>
            <h3 dangerouslySetInnerHTML={{__html: recipe.summary}} ></h3>
            <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h3> 
        </div>
        )}
        
        {activeTab === 'ingredients' && (
        <ul>
            {recipe.extendedIngredients.map(ingredient => (
                <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </ul>
        )}

        </Info>
    </DetailWrapper>
  )
}

// Styled Components for the Recipe page
const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: #fff;

    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: #fff;
    border: 1px solid #313131;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
    `;


export default Recipe