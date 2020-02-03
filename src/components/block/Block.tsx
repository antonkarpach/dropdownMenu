import React, {useState} from 'react';
import './style.scss';
import List from "./List";

interface Props {

}

const Block: React.FC<Props> = props =>{
const [title, setTitle] = useState("BlockTitle");
const funVal = () => {
    return title;
};


   return(
       <div className="Block">
           Block
           -------------------------
           <List propsTitle={title} postTitle={funVal}/>
       </div>
   );
};

export default Block;
