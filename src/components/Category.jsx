import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';



import React from 'react'

function Category() {
  return (
    <div>
        <List>
        <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/Chinese'} >
        <GiNoodles />
        <h4>Chinese</h4>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
        </SLink>
        </List>
    </div>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    margin-right: 1rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: #fff;
        font-size: 0.8rem;
    }

    svg {
        color: #fff;
        font-size: 2rem;
    }
  
     &:active {
        background: linear-gradient(to right, #g27121, #e94057);

        svg {
            color: #fff;
        }

        h4 {
            color: #fff;
        }
    }

  `;

  


export default Category