import data from "../news.json";
import {NewsItem as NewsItemInterface} from "../interfaces/NewsItem";

// Create enum
// Enum as variable type
export const radioNames = ["social", "tech"];

export default class SortService {
    static filterByTag(data: NewsItemInterface[], tag: string): NewsItemInterface[] {
        const newData = data.filter((item:NewsItemInterface) => {
            return item.tag === tag;
        });
        return newData;
    };

    static getTittle(title: string){
        return title;
    }
};

