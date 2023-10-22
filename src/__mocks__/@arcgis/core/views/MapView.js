import Ui from './Ui'

export default class MapView {
    constructor() {
        this.ui = new Ui;
        this.location = {};
    }

    when(callback) {
        callback();
        return
    }

    goTo(location) {
        this.location = location;
    }
}