import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + search);
        console.log(search);
    }
    


  return (
    <FormStyle>
        <SearchBar>
            <SearchIcon>
                <FaSearch />
            </SearchIcon>
            <SearchInput 
            type="text" 
            placeholder="Search for a recipe..."
            onChange={(e) => setSearch(e.target.value) }
            value={search} />
        </SearchBar>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    width: 100%;
`;

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 0;
    border-radius: 2rem;
    border: none;
    outline: none;
`;

const SearchIcon = styled.div`
    top: 80%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem 0;

    svg {
        font-size: 2rem;
        justify-content: center;
        align-items: center;
    }
`;

const SearchInput = styled.input`
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 2rem;
    border: none;
    outline: none;
`;


export default Search