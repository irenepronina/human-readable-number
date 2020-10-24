module.exports = function readableNumber(num) {

    const numbers = {
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
        100: 'one hundred'
    }
    if (num === 0) {
        return "zero";
    }

    let result = "";

    if (num >= 100) {
        result += numbers[Math.floor(num / 100)] + " hundred ";
    }

    if (num % 100 > 0) {
        if (num % 100 <= 20) {
            result += numbers[num % 100];
        } else {
            result += numbers[Math.floor(num % 100 / 10) * 10] + " ";

            if (num % 10 > 0) {
                result += numbers[num % 10];
            }
        }
    }

    return result.trim();

};