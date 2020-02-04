import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
// import Acc from "./Acc";
// import Hello from "./components/Hello";
// import Button from "./components/Button";
import Accordion from "./components/accordion/Accordion";
import NavMenu from "./components/navMenu/NavMenu";
import Radio from "./components/radio/Radio";
import News from "./components/news/News";
import TemperatureCalc from "./temperatureCalc/temperatureCalc";
import Cb from "./components/CB/Cb";
import Block from "./components/block/Block";



const App: React.FC = () => {
    // const [count, setCount] = useState(0);

    return (
        <div className="App">K
            <header className="App-header">
                {/*<Accordion title={"this is the tittle1"} isClose={true}>Some content1 </Accordion>*/}
                {/*<Accordion title={"this is the tittle2"}>Some content2 </Accordion>*/}
                <div className={"border"}/>
                <div></div>
                {/*<NavMenu/>*/}
                <div className={"border"}/>
                <div></div>
                {/*<Radio title={"First radio"} id="aa" name="aa" />*/}
                <div className={"border"}/>
                <div></div>
                <div className={"border"}/>
                <br/>
                <News/>
                <div className={"border"}/>
                <br/>








                {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                {/*<Acc title={"Item 1"}*/}
                {/*     content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dicta inventore iusto minima quo velit voluptatibus."}/>*/}
                {/*<Acc title={"Item 2"}*/}
                {/*     content={`*/}
                {/*     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dicta inventore iusto minima quo velit voluptatibus.</p>*/}
                {/*     <p>Second string</p>*/}
                {/*     <p>Third string</p>*/}
                {/*     <p>Fifth string with text</p>*/}
                {/*     `}/>*/}
                {/*<Hello incremented={()=> setCount(count + 1)}/>*/}
                {/*<div>count: {count}</div>*/}
                {/*<p>Standard button</p>*/}
                {/*<Button*/}
                {/*onClick={() => console.log('Button works!!!')}*/}
                {/*/>*/}
                {/*<p>Disabled button</p>*/}
                {/*<Button*/}
                {/*    onClick={() => console.log('Button works!!!')}*/}
                {/*    disabled*/}
                {/*/>*/}
                {/*<p>Button with class</p>*/}
                {/*<Button*/}
                {/*    onClick={() => console.log('Button works!!!')}*/}
                {/*    active*/}
                {/*/>*/}
            </header>
        </div>
    );
}

export default App;
