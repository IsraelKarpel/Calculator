const { colorsMap } = require('../maps/colors');

class ResultBuilderColor {

    number = null;
    color = null;

    getReminder(number) {
        return number % 2;
    }

    build(calculateResult) {
        this.number = calculateResult;
        this.color = colorsMap[(this.getReminder(calculateResult))]
    }

    getParameters() {
        return {
            numer: this.number,
            color: this.color
        }
    }

}

module.exports = ResultBuilderColor