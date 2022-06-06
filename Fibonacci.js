function fibonacci(n){
        var n = n
        
        var numero1 = 0;
        var numero2 = 1;
        var numero3 = 1;
        var resultados = (numero1 + " " + numero2);
        
        for (i = 2; i <= n; i++)
        {
            numero3 = numero1 + numero2;
            resultados += (" " + numero3);
            numero1 = numero2;
            numero2 = numero3;
        }
        return (resultados);
    }
module.exports = fibonacci