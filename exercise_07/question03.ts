import { Calculator } from "./question02";

export class ScientificCaculator extends Calculator {
    expoOfOps(): number {
        return Math.pow(this.getOp1, this.getOp2);
    }
}
// Sobre a letra C da terceira questão, foi necessário modificar a classe da questão dois. Além de precisarmos dos métodos get dos operandos 1 e 2, precisei exportar a classe para usar na classe da calculadora científica.