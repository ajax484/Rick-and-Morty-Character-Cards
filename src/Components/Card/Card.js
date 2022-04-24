import React, { useState } from 'react';
import axios from 'axios';

const Card = ({ char }) => {
    console.log(char);
    const [flip, setFlip] = useState(false);
    const [episodeName, setEpisodeName] = useState('undefined');

    const charStatus = (status) => {
        if (status === "Dead") {
            return (
                <div className={`position-absolute badge bg-danger`}>
                    {status}
                </div>
            );
        } else if (status === "Alive") {
            return (
                <div className={`position-absolute badge bg-success`}>
                    {status}
                </div>
            );
        } else {
            return (
                <div
                    className={`position-absolute badge bg-secondary`}
                >
                    {status}
                </div>
            );
        }
    }

    const getEpisodeName = (url) => {
        axios
            .get(...url)
            .then((res) => {
                console.log(res.data.name)
                setEpisodeName(res.data.name)
            })
    }

    getEpisodeName(char.episode);
    console.log(episodeName);

    return (
        <div
            className={`flippable-card ${flip ? "flip" : ""}`}
            onClick={() => setFlip((prevFlip) => !prevFlip)}
        >
            <div className="card mb-2 p-0 char-card d-flex flex-column justify-content-center front">
                {charStatus(char.status)}
                <img className="card-img-top img" src={char.image} alt={char.name} />
                <div className="card-body">
                    <h5 className="card-title fs-5 fw-bold mb-4">{char.name}</h5>
                    <div className="card-text">
                        <p className="fs-6 fw-normal">Last Location</p>
                        <p className="fs-5">{char.origin.name}</p>
                    </div>
                </div>
            </div>

            <div className="card mb-2 char-card p-1 d-flex flex-column justify-content-center back">
                <div className="card-body p-2">
                    <h5 className="card-title fs-5 fw-bold mb-4">{char.name}</h5>
                    <div className="card-text">
                        <p className="fs-5 fw-normal mb-1">Species:</p>
                        <p className="fs-6 fw-light">{char.species}</p>
                        <p className="fs-5 fw-normal mb-1">Gender:</p>
                        <p className="fs-6 fw-light">{char.gender}</p>
                        <p className="fs-5 fw-normal mb-1">First Appearance:</p>
                        <p className="fs-6 fw-light">{episodeName}</p>
                        <p className="fs-5 fw-normal mb-1">Origin:</p>
                        <p className="fs-6 fw-light">{char.origin.name}</p>
                        <p className="fs-5 fw-normal mb-1">Current location:</p>
                        <p className="fs-6 fw-light">{char.origin.name}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;
