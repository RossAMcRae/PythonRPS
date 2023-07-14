class Event {
    constructor() {
        this.listeners = [];
    }

    addListener(listener) {
        this.listeners.push = [];
    }

    trigger(params) {
        this.listeners.forEach(listener => { listener(params); })
    }
}

export default Event;