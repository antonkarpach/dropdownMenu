import React from 'react';
import C from './C';
interface Props {
    bb: (str: any) => void;
}

const B: React.FC<Props> = props => {
    const tit = 'In 3 to 2';
    const bb = () => {
      console.log("B component is existing");
        props.bb && props.bb(tit);
    };

    return(
        <div onClick={bb}>
           <C title={tit}/>
            component B
        </div>
    );
};

export default B;
