interface IOperacao {

    validar(): boolean;
    calcular(): number;

}

abstract class Operacoes implements IOperacao {
    
    private _first: number;
    private _second: number;

    constructor(primeiro:number, segundo:number){
        this._first = primeiro;
        this._second = segundo;
    }
    
    get primeiro(){
        return this._first;
    }
    
    get segundo(){
        return this._second;
    }

    public validar(): boolean {
        return this._first >= 0 && this._second >= 0
    }

    public calcular(): number {
        if(this.validar()){
            return this.relizarCal();
        } else {
            return -1;
        }   
    }

    protected abstract relizarCal(): number;
}


class Soma extends Operacoes {

    protected override relizarCal(): number {
        return this.primeiro + this.segundo;
    }
}

class Subtracao extends Operacoes {
    
    protected override relizarCal(): number {
         return this.primeiro - this.segundo
    }
}