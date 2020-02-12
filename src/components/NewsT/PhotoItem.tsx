import React, {useState} from 'react';
import './PhotoItem.scss';
import info from './info.json';
import SortService from "./services/sort.service";

interface Props {
    onChangePhoto?: () => any;
    photo: any;
}

const PhotoItem: React.FC<Props> = props => {

    return (
        <div onClick={props.onChangePhoto}>
            <img src={props.photo.photo} width={110} height={110}/>
        </div>
    );
};

export default PhotoItem;
