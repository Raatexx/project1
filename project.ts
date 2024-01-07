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
            return this.realizarCal();
        } else {
            return -1;
        }   
    }

    protected abstract realizarCal(): number;
}


class Soma extends Operacoes {

    protected override realizarCal(): number {
        return this.primeiro + this.segundo;
    }
}

class Subtracao extends Operacoes {
    
    protected override realizarCal(): number {
        return this.primeiro - this.segundo
    }
}

class Multiplicacao extends Operacoes {

    protected override realizarCal(): number {
        return this.primeiro * this.segundo;
    }
}

class Divisao extends Operacoes {

    public override validar(): boolean{
        return this.primeiro >= 0 && this.segundo > 0  
    }

    protected override realizarCal(): number {
        return this.primeiro / this.segundo
    }
}