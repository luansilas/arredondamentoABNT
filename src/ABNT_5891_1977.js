module.exports = class ABNT_5891_1977 {
    
    constructor(casasDecimais){
        this.casasDecimais = casasDecimais;
    }

    arredonda(decimal){
        const exp = Math.pow(10,(this.casasDecimais + 2));
        
        let numeroInteiro = parseInt(parseFloat(decimal.toFixed((this.casasDecimais+2))) * exp);

        let sobra = parseInt((numeroInteiro + "").substr(-2));
        let  numero = parseInt((numeroInteiro + "").substr(0, ((numeroInteiro+"").length - 2) ));
        //console.log("Numero ==> ", numero, (numeroInteiro+"").length, (numeroInteiro+"") );
        if(this.ehPar(numero)){
            if(sobra > 50){
                numero++;
            }
        } else {
            if(sobra >= 50){
                numero++;
            }
        }

        //console.log("Numero ==> ", numero);
        //console.log("sobra ===> " , sobra);
        
        numero = (numero / Math.pow(10, this.casasDecimais)).toFixed(this.casasDecimais);
        //console.log("Numero ==> ", numero);
        return numero;
    }

    ehPar(numero){
        return (numero % 2 == 0)
    }
}