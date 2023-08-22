import React from 'react'
import {
    useState
} from 'react';
const Usersearch = ({ searchResults }) => {

    const [query, setQuery] = useState("");
    const handsubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/users/search?query=${query}`);
        const users = await res.json();
        searchResults(users);
    }
    return (
        <form onSubmit={handsubmit}>
            <input
                type="text"
                className='search-input'
                placeholder='Search Users'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className='search-button' type='submit'>
                Search...
            </button>
        </form>
    )
}

export default Usersearch