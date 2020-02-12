export default class SortService {
    static filterByName(data: any, name: string): any {
        const currentType = data.find((item) => {
            return item.name === name;
        });
        return currentType;
    };
};
