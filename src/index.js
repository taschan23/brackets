module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let openBrackets = [];
    let closeBrackets = [];
    let bracket = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        let bracketItem = bracketsConfig[i];
        openBrackets.push(bracketItem[0]);
        closeBrackets.push(bracketItem[1]);

        if (openBrackets[i] === closeBrackets[i]) {
            bracket.push(openBrackets[i]);
        }
    }

    let stack = [];
    for (let j = 0; j < str.length; j++) {
        if (!bracket.includes(stack[stack.length - 1]) && bracket.includes(str[j]) || openBrackets.includes(str[j]) && !bracket.includes(str[j])) {
            stack.push(str[j]);
        } else {
            for (let k = 0; k < closeBrackets.length; k++) {
                if (str[j] === closeBrackets[k] && stack[stack.length - 1] === openBrackets[k]) {
                    stack.pop(str[j - 1]);
                    break;
                }
            }
        }
    }

    return !stack.length;
}
