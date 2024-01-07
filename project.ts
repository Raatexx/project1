interface IOperacao {

    validar(): boolean;
    calcular(): number;

}

abstract class Operacoes implements IOperacao{
    
    public _first: number;
    public _second: number;

    constructor(primeiro:number, segundo:number){
        this._first = primeiro;
        this._second = segundo;
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