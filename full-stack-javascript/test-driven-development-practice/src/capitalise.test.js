import {capitalise, reverseString, calculate, ceaserShift, analyseArr} from "./capitalise.js"

test('capitalises a string', () => {
    expect(capitalise("jockey")).toBe("Jockey");
})

test('reverses a string', () => {
    expect(reverseString("jockey")).toBe("yekcoj");
})

test('runs basic calculator operations', () => {
    expect(calculate(20, 5)).toEqual({plus: 25, minus: 15, multiply: 100, divide: 4})
})

test('ceaserShift by a given value', () => {
    expect(ceaserShift("jockey!", 4)).toBe("nsgoic!")
})

test ('Returns the average, min, max, and length of an array', () => {
    expect(analyseArr([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
})