const iniciarContador = require("./Contador")

it("A função deve retornar o contador", function(){
    expect(iniciarContador([10, 200])).toBe(1)
})
it("A função deve retornar o contador", function(){
    expect(iniciarContador([10, 200, 300])).toBe(2)
})