export default class MapView {
    constructor() {
        this.ui = [];
        this.location = {};
    }

    add(map) {
        this.ui.push(map);
    }

    when(callback) {
        callback();
        return
    }

    goTo(location) {
        this.location = location;
    }
}