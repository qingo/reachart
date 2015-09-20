import Scale from './scale'
export default class Linear extends Scale {
    constructor(config) {
        super(config);
    }

    toPixel(numbers) {
        var rst = [];
        var r0 = this.range[0],
            r1 = this.range[1],
            d0 = this.range[0],
            d1 = this.range[1];
        numbers.forEach(num => {
            rst.push((d1 - d0) * num / (r1 - r0) - d0)
        });
        return rst;
    }
}