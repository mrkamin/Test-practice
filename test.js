const {stringLength, reverseString, Calculator, captalize} = require('./index.js')

test('Mohammad to be length of 8', () => 
expect(stringLength('Mohammad')).tobe(8)
)

test('MohammadRafiAmin to throw an error', () => 
expect(stringLength('MohammadRafiAmin')).tobe('the string must be between 1 and 10 characters')
)

test('Mohammad reversed to be dammahoM', () =>
expect(reverseString('Mohammad')).tobe('dammahoM')
)

describe('simple Calculator add method', () => {
    test('expects 3 + 5 to equal 8', () => {
        expect(Calculator.add(3, 5)).toBe(8)
    })
    test('expects -2 + 5 to equal 3', () => {
        expect(Calculator.add(-2, 5)).toBe(3)
    })
    test('expects 0 + 0 to equal 0', () => {
        expect(Calculator.add(0, 0)).toBe(0)
    })
})

describe('simple Calculator subtract method', () => {
    test('expects 15 - 15 to equal 0', () => {
        expect(Calculator.subtract(15, 15)).toBe(0)
    })
    test('expects -2 - 5 to equal -7', () => {
        expect(Calculator.subtract(-2, 5)).toBe(-7)
    })
    test('expects 0 - 0 to equal 0', () => {
        expect(Calculator.subtract(0, 0)).toBe(0)
    })
})

describe('simple Calculator divide method', () => {
    test('expects 15 / 15 to equal 1', () => {
        expect(Calculator.divide(15, 15)).toBe(1)
    })
    test('expects -4 / -8 to equal 0.5', () => {
        expect(Calculator.divide(-4, -8)).toBe(0.5)
    })
    test('expects 0 / 0 to equal 0', () => {
        expect(Calculator.divide(0, 0)).toBeFalsy()
    })
})

describe('simple Calculator multiply method', () => {
    test('expects 10 * 10 to equal 100', () => {
        expect(Calculator.multiply(10, 10)).toBe(100)
    })
    test('expects -4 * -5 to equal 20', () => {
        expect(Calculator.multiply(-4, -5)).toBe(20)
    })
    test('expects 0 * 0 to equal 0', () => {
        expect(Calculator.multiply(0, 0)).toBe(0)
    })
})

test('first leter in microverse to captalized - Microverse', () => {
    expect(captalize('microverse')).toBe('Microverse')
} )