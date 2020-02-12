import React, {CSSProperties, useMemo, useRef} from 'react';
import './Slide.scss';


export interface FrameProps {
    imageName: string;
    width: number;
}

const Slide: React.FC<FrameProps> = props => {
    const style: Partial<CSSProperties> = useMemo(() => ({width: `${props.width}px`}), [props.width]);
    return (
        <div className="Frame" style={style}>
            <img src={props.imageName} />
        </div>
    );
};

export default Slide;
