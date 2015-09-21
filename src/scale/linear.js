import Scale from './scale'
export default class Linear extends Scale {
    constructor(config) {
        super(config);
    }

    toPixel(num) {
        var r0 = this.range[0],
            r1 = this.range[1],
            d0 = this.domain[0],
            d1 = this.domain[1];
        var rst = (r1 - r0) * num / (d1 - d0) - r0;
        return (r1 - r0) * num / (d1 - d0) - r0;
    }
}