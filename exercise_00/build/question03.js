"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt;
prompt = (0, prompt_sync_1.default)();
function printMinAndMax(n1, n2, n3) {
    let min;
    let max;
    // find min
    if (n1 < n2) {
        if (n1 < n3) {
            min = n1;
        }
        else {
            min = n3;
        }
    }
    else {
        if (n2 < n3) {
            min = n2;
        }
        else {
            min = n3;
        }
    }
    // find max
    if (n1 > n2) {
        if (n1 > n3) {
            max = n1;
        }
        else {
            max = n3;
        }
    }
    else {
        if (n2 > n3) {
            max = n2;
        }
        else {
            max = n3;
        }
    }
    console.log(`O menor valor é ${min} e o maior valor é ${max}.`);
}
let num1 = Number(prompt("Entre com um número: "));
let num2 = Number(prompt("Entre com um número: "));
let num3 = Number(prompt("Entre com um número: "));
(num1 > num2) ? console.log("O primeiro é maior que o segundo.") : console.log("O segundo é maior que o primeiro.");
(num1 > num3) ? console.log("O primeiro é maior que o terceiro.") : console.log("O terceiro é maior que o primeiro.");
(num2 > num3) ? console.log("O segundo é maior que o terceiro.") : console.log("O terceiro é maior que o segundo.");
console.log("----");
(num1 < num2) ? console.log("O primeiro é menor que o segundo.") : console.log("O segundo é menor que o primeiro.");
(num1 < num3) ? console.log("O primeiro é menor que o terceiro.") : console.log("O terceiro é menor que o primeiro.");
(num2 < num3) ? console.log("O segundo é menor que o terceiro.") : console.log("O terceiro é menor que o segundo.");
console.log("Conclusão:");
printMinAndMax(num1, num2, num3);
