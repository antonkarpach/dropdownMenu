import {data} from './data';

export default class SliderService {
    static readonly step: number = 250;

    static getShiftLeft(shift: number) {
        return shift - this.step;
    }

    static getShiftRight(shift: number) {
        return shift + this.step;
    }

    static isScrollLeft(shift: number) {
        return shift < this.step;
    }

    static isScrollRight(shift: number) {
        return shift < data.length * this.step ;
    }

    static getScrollEnd(shift: number) {
        return this.step * data.length;
    }

    static getScrollStart(shift: number) {
        return shift - shift;
    }
}
