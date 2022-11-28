export class Calculator {
    private _op1: number;
    private _op2: number;
    constructor(op1: number, op2: number) {
        this._op1 = op1;
        this._op2 = op2;
    }
    sumOfOps(): number {
        return this._op1 + this._op2;
    }
    get getOp1(): number {
        return this._op1;
    }
    get getOp2(): number {
        return this._op2;
    }
}
