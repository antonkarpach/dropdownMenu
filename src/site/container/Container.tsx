import React from 'react';
import './Container.scss';

const Container = () => {
    return(
        <div className="container">
            <div className="container__grid">
                <div className="container__item">Content 1</div>
                <div className="container__item">Content 2</div>
                <div className="container__item">Content 3</div>
                <div className="container__item">Content 4</div>
            </div>
        </div>
    );
};

export default Container;
