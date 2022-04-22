import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';



import React from 'react'

function Category() {
  return (
    <div>
        <List>
        <>
        <FaPizzaSlice />
        <h4>Italian</h4>
        </>
        <>
        <GiNoodles />
        <h4>Chinese</h4>
        </>
        <>
        <GiChopsticks />
        <h4>Japanese</h4>
        </>
        <>
        <FaHamburger />
        <h4>American</h4>
        </>
        </List>
    </div>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

export default Category