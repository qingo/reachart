export default class Scale {
    constructor(config) {
        this.range = config.range || [0, 1];
        this.domain = config.domain || [0, 1];
    }

}