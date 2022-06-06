const fibonacci = require('./fibonacci');

it("A função deve retornar a sequência de Fibonacci",() => {
    expect(fibonacci(10)).toBe("0 1 1 2 3 5 8 13 21 34 55");
})
it("A função deve retornar a sequência de Fibonacci",() => {
    expect(fibonacci(3)).toBe("0 1 1 2");
})