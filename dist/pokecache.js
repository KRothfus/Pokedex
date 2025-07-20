export class Cache {
    #cache = new Map();
    #reapIntervaliId = undefined;
    #interval;
    constructor(number) {
        this.#interval = number;
        this.#startReapLoop();
    }
    add(key, val) {
        this.#cache.set(key, { createdAt: Date.now(), val: val });
    }
    get(key) {
        return this.#cache.get(key);
    }
    #reap() {
        const keys = this.#cache.keys();
        this.#cache.forEach((value, key) => {
            if (Date.now() - this.#interval > value.createdAt) {
                this.#cache.delete(key);
            }
        });
    }
    #startReapLoop() {
        this.#reapIntervaliId = setInterval(() => {
            this.#reap();
        }, this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervaliId);
        this.#reapIntervaliId = undefined;
    }
}
