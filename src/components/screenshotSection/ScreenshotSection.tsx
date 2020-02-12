import React, {ReactNode} from 'react';
import './ScreenshotSection.scss';
import Description from "./Description";
import classNames from 'classnames';
import Depiction from "./Depiction";

interface Props {
    title: React.ReactNode;
    description: React.ReactNode;
    icon: string;
    imageUrl: string;
    reverse?: boolean;
    colorScheme: ColorScheme;
}

export enum ColorScheme {
    Black = 'black',
    White = 'white',
    Blue = 'blue',
}

const ScreenshotSection: React.FC<Props> = props => {
    return (
        <div className={classNames('ScreenshotSection',{[`ScreenshotSection--${props.colorScheme}`]: props.colorScheme})}>
            <div className={classNames('ScreenshotSection__container', {
                'ScreenshotSection__container--reverse': props.reverse,
            })}>
                <Description icon={props.icon} description={props.description} title={props.title}/>
                <Depiction src={props.imageUrl} alt=""/>
            </div>
        </div>
    );
};

export default ScreenshotSection;
