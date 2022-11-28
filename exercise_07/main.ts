import { Calculator } from "./question02";
import { ScientificCaculator } from "./question03";

let calculator: Calculator = new Calculator(11, 22);
console.log(`A soma dos operandos é ${calculator.sumOfOps()}.`);

let sc: ScientificCaculator = new ScientificCaculator(2, 2);
console.log(`A exponenciação dos operandos é ${sc.expoOfOps()}.`);
