function mdc(Valor1, Valor2) {
    var Valor1 = Valor1;
    var Valor2 = Valor2;

    for(var i = Valor1; i > 0; i--) {
        if(Valor1 % i == 0 && Valor2 % i == 0) {
            return (i);
        }   
    }
}
module.exports = mdc