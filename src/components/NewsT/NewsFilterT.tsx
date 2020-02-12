import React, {useState} from 'react';
import './NewsFilterT.scss';
import RadioT from "./radioT/RadioT";
import {ChangeLabelFields} from './radioT/ChangeLabelFields';
import PhotoItem from "./PhotoItem";
import SortService from './services/sort.service';
import info from './info.json';
import data from "../news/news.json";

interface Props {
}

const NewsFilterT: React.FC<Props> = props => {
    const [photo, setPhoto] = useState(info[0]);
    const onChangePhoto = (str) => {
        setPhoto(SortService.filterByType(info, str));
    };




    return (
        <div className="NewsFilterT">
            <PhotoItem photo={photo}/>
            <div>
                <RadioT label={ChangeLabelFields.male} id={"g1"} name="anton" onChange={onChangePhoto}/>
                <RadioT label={ChangeLabelFields.female} id={"g2"} name="anton" onChange={onChangePhoto}/>
            </div>
        </div>
    );
};

export default NewsFilterT;
