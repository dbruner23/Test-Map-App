export default class WebMap {
    constructor() {
        this.layers = [];
    }

    add(layer) {
        this.layers.push(layer);
    }
}