class GuessingGame {
    constructor() {
        this.maxNum = 0;
        this.minNum = 0;
        this.number = 409;
        this.result = 0;
    }

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        this.result = Math.round((this.maxNum / 2) + (this.minNum / 2));
        return this.result;
    }

    lower() {
        this.maxNum = this.result;
    }

    greater() {
        this.minNum = this.result;
    }
}

module.exports = GuessingGame;
