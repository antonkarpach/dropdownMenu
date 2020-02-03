import React, {useState} from 'react';
import './News.scss';
import NewsFilter from "./NewsFilter";
import data from "./news.json";
import NewsList from "./NewsList";
import SortService from './services/sort.service';


interface Props {
    // news?: NewsListInterface[];
}

enum tags {
    'tech',
    'social',
}

const News: React.FC<Props> = props => {
    const [newsList, setNewsList] = useState(data);
    const [activeFilter, setActiveFilter] = useState(false);


    const onFilterChange = (tag: string) => {
        setActiveFilter(!activeFilter);
        setNewsList(SortService.filterByTag(data, tag));

        console.log("this is a click");
    };

    return (
        <div className="News">
            <NewsFilter onRadioClick={onFilterChange}/>
            <NewsList list={newsList}/>
        </div>
    );
};

export default News;

