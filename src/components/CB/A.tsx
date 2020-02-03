import React from 'react';
import B from './B';

interface A {

}

const A: React.FC = () => {
    const aa = (str) =>{
      console.log("This is function aa"+ str);

    };

   return(
       <div>
           Component A
            <B bb={aa}/>
           Component A
       </div>
   );
};

export default A;
