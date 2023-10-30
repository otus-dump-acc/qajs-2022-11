import { nameIsValid, fullTrim, getTotal } from "../src/app.js";

describe('nameIsValid', () => {
  test('Function successfully defined', () => {
    expect(nameIsValid('Jack')).toBeDefined()
  })
  test('Empty string is invalid', () => {
    expect(nameIsValid('')).toBeFalsy()
  })
  test('Less than 2 words is invalid', () => {
    expect(nameIsValid('a')).toBeFalsy()
  })
  test('Name Jack is valid', () => {
    expect(nameIsValid('Jack')).toBeTruthy()
  })
})

describe('fullTrim', () => {
  test('Function successfully defined', () => {
    expect(fullTrim('Jack Peterson')).toBeDefined()
  })
  test('Delete single space', () => {
    expect(fullTrim('Jack Peterson')).toBe('JackPeterson')
  })
  test('Remove multuple spaces in one place', () => {
    expect(fullTrim('Jack   Peterson')).toBe('JackPeterson')
  })
  test('Trim edge spaces of string', () => {
    expect(fullTrim('  String  ')).toBe('String')
  })
  test('Number as parameter throw an error', () => {
    expect(() => fullTrim(12)).toThrow()
  })
})

describe('getTotal', () => {
  const testCases = [
    {
      items: [
        { price: 10, quantity: 1 }
      ],
      discount: 100,
      expected: 0
    },
    {
      items: [
        { price: 10, quantity: 1 },
        { price: 10, quantity: 9 }
      ],
      discount: 10,
      expected: 90
    },
    {
      items: [
        { price: 10, quantity: 4 }
      ],
      expected: 40
    },
    {
      items: [
        { price: 10, quantity: 1 },
        { price: 10, quantity: 9 }
      ],
      discount: 0,
      expected: 100
    },
  ]
  test.each(testCases)('Amount price of %# index array of items equals $expected', ({items, discount, expected}) => {
    expect(getTotal(items, discount)).toBe(expected)
  })

  test('Discount set as not a number value', () => {
    expect(() => getTotal('string')).toThrow()
  })
  test('Discount can\'t be less than 0', () => {
    expect(() => getTotal(-123)).toThrow()
  })
})
