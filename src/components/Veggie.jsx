import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from "react-router-dom";

function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
   }, []);

    const getVeggie = async () => {
    // In order to avoid APİ limits, we will store the data in a local storage

    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`);
    const data = await response.json();
    setVeggie(data.recipes);
    localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  }

  
  

  return (
    <Wrapper>
      <h3>Vegetarian Recipes</h3>

      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem',
      }}>
      {veggie.map((recipe) => {
        return (
          <SplideSlide key={recipe.id}>
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient />
            </Link>
          </Card>
          </SplideSlide>
        );
      })},
      </Splide>
    </Wrapper>
  );
  
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`;


export default Veggie