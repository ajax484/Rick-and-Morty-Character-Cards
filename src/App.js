import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from 'react';
import './app.css';
import CardList from './Components/Card/CardList';
import Pagination from './Components/Pagination/Pagination';
import Filter from './Components/Filter/Filter';
import Search from './Components/Search/Search';

export default function App() {
    let [pageNumber, updatePageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    const [fetchedData, updateFetchedData] = useState([]);

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
    let { info, results } = fetchedData;

    useEffect(() => {
        axios
            .get(api)
            .then((res) => {
                updateFetchedData(res.data);
            });
    }, [api])


    return (
        <div className="App">
            <h1 className="text-center mb-3 header-text p-3 fs-3"><span className="brand fs-1">Rick And Morty</span> Character Cards</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <div className="container">
                <div className="row">
                    <Filter
                        pageNumber={pageNumber}
                        status={status}
                        updateStatus={updateStatus}
                        updateGender={updateGender}
                        updateSpecies={updateSpecies}
                        updatePageNumber={updatePageNumber}
                    />
                    <CardList results={results} />
                </div>
                <Pagination
                    info={info}
                    pageNumber={pageNumber}
                    updatePageNumber={updatePageNumber}
                />
            </div>
        </div>
    )
}
