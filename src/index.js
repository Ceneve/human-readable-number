module.exports = function toReadable(number) {
    const values = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };
    if (number < 20) {
        return values[number];
    }
    if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            return values[number];
        } else {
            let firstDigit = (Math.floor(number / 10)) * 10;
            let lastDigit = number % 10;
            return values[firstDigit] + " " + values[lastDigit];
        }
    }
    if (number % 100 === 0) {
        return values[number / 100] + " " + "hundred";
    }
    if (number >= 100 && number <= 999) {
        let firstDigit = (Math.floor(number / 100));
        let secondDigit = (number % 100)
        if (secondDigit % 10 === 0) {
            return values[firstDigit] + " " + "hundred" + " " + values[secondDigit];
        }
        if (secondDigit < 20) {
            return values[firstDigit] + " " + "hundred" + " " + values[secondDigit];
        } else if (secondDigit >= 20 && secondDigit <= 99) {
            let secondDigitFirst = (Math.floor(secondDigit / 10)) * 10;
            let secondDigitLast = secondDigit % 10;
            return values[firstDigit] + " " + "hundred" + " " + values[secondDigitFirst] + " " + values[secondDigitLast];
        }
    }
}
