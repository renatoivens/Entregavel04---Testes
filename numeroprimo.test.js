const numeroPrimo = require ('./NumeroEPrimo');
it("A função deve retornar o numero primo",() => {
    expect(numeroPrimo(10)).toBe(false)
})
it("A função deve retornar o numero primo",() => {
    expect(numeroPrimo(11)).toBe(true)
})
