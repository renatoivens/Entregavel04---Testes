const mdc = require('./MaximoDivisorComum');

it("A função deve retornar o mdc",() => {
    expect(mdc(10, 200)).toBe(10)
})
it("A função deve retornar o mdc",() => {
    expect(mdc(10, 200, 300)).toBe(10)
})
