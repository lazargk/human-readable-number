module.exports = function toReadable(number) {
    let res = "";
    const dic = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    const lessThanHundred = (o, str) => {
        if (parseInt(str) <= 20) {
            return o["" + parseInt(str)];
        } else if (str[1] == "0") {
            return o[str];
        } else {
            return o[str[0] + "0"] + " " + o[str[1]];
        }
    };

    let strNum = "" + number;

    if (strNum.length == 3) {
        if (strNum[1] == "0" && strNum[2] == "0") {
            res = dic[strNum[0]] + " hundred";
        } else {
            res = dic[strNum[0]] + " hundred " + lessThanHundred(dic, strNum[1] + strNum[2]);
        }
    } else {
        res = lessThanHundred(dic, strNum);
    }
    return res;
};
