function stringLength(string) {
    if (string.length > 1 && string.length < 10 ) {
        return string.length
    } else {
        return 'the string must be between 1 and 10 characters'
    }
}

const  reverseString = (string) => {
    let spliteString = string.split("")
    let reversedArry = spliteString.reverse()
    let reversed = reversedArry.join("")
    return reversed
    }

    class Calculator {

        static subtract = (x, y) => {
            return x - y
        }

        static multiply = (x, y) => {
        return x * y
        }

        static add = (x, y) => {
            return x + y
        };
      
        static divided = (x, y) => {
            return x / y
        }
    }

    const captalize = (string) => {
        return string.slice(0, 1).toUpperCase() + string.slice(1)
    }
    
    module.exports = {stringLength, reverseString, Calculator, captalize }