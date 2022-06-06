const ordenacao = require('./Ordenacao');

it("A função deve retornar a ordenação dos numeros",() => {
    expect(ordenacao([2,0,4,1,5,7,9,8,3,6])).toStrictEqual([0,1,2,3,4,5,6,7,8,9])
})
