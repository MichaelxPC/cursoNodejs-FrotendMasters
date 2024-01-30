const isBigger = (num, num2) => {
    if (num > num2) {
        return true
    } else {
        return false
    }
}

test('We see if the first number is bigger than the second', () => {
     const result =  isBigger(3,2)
     expect(result).toBe(true) 
    })