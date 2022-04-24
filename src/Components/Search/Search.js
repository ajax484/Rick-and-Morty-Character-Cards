import React, { useRef } from 'react';
import './search.css';

const Search = ({ setSearch, updatePageNumber }) => {
    const searchEl = useRef();
    let searchBtn = (e) => {
        e.preventDefault();
        updatePageNumber(1);
        setSearch(searchEl.current.value);
    }

    return (
        <form
            className={`search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
        >
            <input
                placeholder="Search for characters"
                className="input"
                type="text"
                ref={searchEl}
            />
            <button
                onClick={searchBtn}
                className="btn btn-primary fs-5"
            >
                Search
            </button>
        </form>
    );
}

export default Search;
