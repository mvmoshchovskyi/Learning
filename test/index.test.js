const {numbers, numbersSum, isPerfect} = require('./index');

describe('check numbers function', () => {

    test('should convert 4589 to 4', () => {
        expect(numbers(4589)).toBe(4)
    });

    test('should convert 56726 to 5', () => {
        expect(numbers(56726)).toBe(5)
    });

});

describe('check numbersSum function', () => {

    test('should convert 123 to 6', () => {
        expect(numbersSum(123)).toBe(6)
    });

    test('should convert 12432143 to 26', () => {
        expect(numbersSum(12432143)).toBe(20)
    });

});

describe('check isPerfect function', () => {

    test('should convert 15 to false', () => {
        expect(isPerfect(123)).toBe('123 is false')
    });

    test('should convert 496 to true', () => {
        expect(isPerfect(496)).toBe('496 is true')
    });

});
