import info from '.././info.json';

export default class SortService {
    static filterByType(data: any, type: string): any {
        const currentType = info.find((item) => {
            return item.type === type;
        });
        return currentType;
    };
};

