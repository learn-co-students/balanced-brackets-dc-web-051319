function isBalanced(string) {
    const charObj = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    const stack = []
    

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (Object.keys(charObj).includes(char)) {
            stack.push(char)
        } else {                        
            const last = stack.pop();
            
            if (char !== charObj[last]) {                
                return false
            }
        }
    }

    if (stack.length > 0) {
        return false
    }

    return true
}

console.log(isBalanced("()[]"))
console.log(isBalanced("([])"))
console.log(isBalanced("({)}"))
console.log(isBalanced("{[}"))