import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.scss';
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
import RadioT from "./components/NewsT/radioT/RadioT";
import NewsT from "./components/NewsT/NewsT";
import Fruits from "./components/fruits/Fruits";
import ScreenshotSection, {ColorScheme} from "./components/screenshotSection/ScreenshotSection";
import icon from './images/react.png';
import scr from './images/scr.png';
import Slider from "./components/slider/Slider";
import Menu from "./site/menu/Menu";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Container from "./site/container/Container";
import Footer from "./site/footer/Footer";


const App: React.FC = () => {
    // const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                {/*<Accordion title={"this is the tittle1"} isClose={true}>Some content1 </Accordion>*/}
                {/*<Accordion title={"this is the tittle2"}>Some content2 </Accordion>*/}
                {/*<div className={"border"}/>*/}
                {/*<div></div>*/}
                {/*<NavMenu/>*/}
                {/*<div className={"border"}/>*/}
                {/*<div></div>*/}
                {/*<Radio title={"First radio"} id="aa" name="aa" />*/}
                {/*<div className={"border"}/>*/}
                {/*<div></div>*/}
                {/*<div className={"border"}/>*/}
                {/*<br/>*/}
                {/*<News/>*/}
                {/*<div className={"border"}/>*/}
                {/*<br/>*/}
                {/*<NewsT/>*/}
                {/*<Fruits/>*/}
                {/*<ScreenshotSection*/}
                {/*    title="BACK YOUR DECISIONS WITH UNBIASED RATINGS "*/}
                {/*    description="Renaissance Capital has been rating IPOs for over 25 years.*/}
                {/*     Our clients know that we call them like we see them. All of our ratings*/}
                {/*      are completely independent and unbiased, so you know you’re getting research*/}
                {/*       opinions, not Wall Street sales pitches."*/}
                {/*    icon={icon}*/}
                {/*    imageUrl={scr}*/}
                {/*    reverse={false}*/}
                {/*    colorScheme={ColorScheme.White}*/}
                {/*/>*/}
                {/*<SiteSlider/>*/}
                {/*<br/>*/}

                {/*<Slider/>*/}


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

                    <Menu/>
                    <Container/>
                    <Footer/>
            </header>
        </div>
    );
}

export default App;
