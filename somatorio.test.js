var soma = require("./Somatorio")

it("A função soma deve retornar o valor de a + b" , function (){
    expect(soma(1,2 )).toBe(3)
})
it("Dever ser retornado o valor de 5 + 5", function(){
    expect(soma(5,5)).toBe(10)
})