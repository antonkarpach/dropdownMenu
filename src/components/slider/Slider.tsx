import React, {CSSProperties, useCallback, useMemo, useState} from 'react';
import './Slider.scss';
import Arrow from "./arrow/Arrow";
import {Direction} from "./arrow/Direction";
import Frames from "./Frames";
import SliderService from "./slider.service";

const Slider: React.FC = () => {
    const [shift, setShift] = useState(0);
    const isLeftAvailable = useMemo<boolean>(() => SliderService.isScrollLeft(shift), [shift]);
    const isRightAvailable = useMemo<boolean>(() => SliderService.isScrollRight(shift), [shift]);

    console.log(isRightAvailable);
    const onScrollLeft = useCallback(
        () => {
            setShift( SliderService.getShiftLeft(shift));
        },
        [shift]
    );

    const onScrollRight = useCallback(
        () => {
            setShift( SliderService.getShiftRight(shift));
        },
        [shift]
    );

    const onScrollStart = useCallback(
        () => {
            setShift(SliderService.getScrollStart(shift));
        },
        [shift]
    );

    const onScrollEnd = useCallback(
        () => {
            setShift(SliderService.getScrollEnd(shift));
        },
        [shift]
    );

    return (
        <div className="Slider">
            {!isLeftAvailable && <Arrow direction={Direction.Left} onClick={onScrollStart}/>}
            {!isLeftAvailable && <Arrow direction={Direction.Left} onClick={onScrollLeft}/>}
            <Frames shift={shift}/>
            {!isRightAvailable && <Arrow direction={Direction.Right} onClick={onScrollRight}/>}
            {/*{!isRightAvailable && <Arrow direction={Direction.Right} onClick={onScrollEnd}/>}*/}
        </div>
    );
};

export default Slider;
