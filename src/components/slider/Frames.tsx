import React, {CSSProperties, useMemo, useRef} from 'react';
import './Frames.scss';
import Slide, {FrameProps} from './Slide';
import {data} from './data';


interface Props {
    shift: number;
}

const Frames: React.FC<Props> = props => {
    const style: Partial<CSSProperties> = useMemo(() => ({transform: `translate(${props.shift}px)`}), [props.shift]);

    return (
        <div className="Frames" style={style}>
            {data.map((frame: FrameProps, index: number) =>
                <Slide {...frame} key={index} width={250}/>
            )}
        </div>
    );
};

export default Frames;
