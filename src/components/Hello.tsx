import React from 'react';

const Hello = ({incremented}) => {
    return(
        <button onClick={incremented}>
            hello
        </button>
    );
}

export default Hello;
