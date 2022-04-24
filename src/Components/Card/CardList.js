import React from 'react';
import Card from './Card';
import './card.css';

const CardList = ({ results }) => {
    let display;

    if (results) {
        display = results.map((char) => {
            return (
                <div key={char.id} className="col-md-4">
                    <Card char={char} />
                </div>
            );
        });
    } else {
        display = <p>No results to display</p>;
    }

    return (
        <div className="col-lg-9 col-12">
            <div className="row gy-3">
                {display}
            </div>
        </div>
    )
}

export default CardList;
