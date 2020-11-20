function firstNonRecurringCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
    return "All characters are recurring";
}

console.log(firstNonRecurringCharacter("ABACABAD"));
console.log(firstNonRecurringCharacter("ABACABAABACABA"));

// C
// All characters are recurring