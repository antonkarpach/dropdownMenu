import React from 'react';
import './style.scss';
import ListTitle from "./ListTittle";

interface Props {
    propsTitle: string;
    postTitle: () => void
}

const List: React.FC<Props> = props =>{
const tit = "tittle";
    const lol = () => {
        return props.postTitle();
    };

    console.log(lol());


  return(
      <div className="List">
          <ListTitle title={tit}/>
      </div>
  );
};

export default List;
