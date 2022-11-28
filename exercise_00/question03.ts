import PromptSync from "prompt-sync";

let prompt: PromptSync.Prompt;
prompt = PromptSync();

function printMinAndMax(n1: number, n2: number, n3: number) {
    let min: number;
    let max: number;
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
    console.log(`O menor valor é ${min} e o maior valor é ${max}.`)
}

let num1: number = Number(prompt("Entre com um número: "));
let num2: number = Number(prompt("Entre com um número: "));
let num3: number = Number(prompt("Entre com um número: "));

(num1 > num2) ? console.log("O primeiro é maior que o segundo.") : console.log("O segundo é maior que o primeiro.");
(num1 > num3) ? console.log("O primeiro é maior que o terceiro.") : console.log("O terceiro é maior que o primeiro.");
(num2 > num3) ? console.log("O segundo é maior que o terceiro.") : console.log("O terceiro é maior que o segundo.");

console.log("----");

(num1 < num2) ? console.log("O primeiro é menor que o segundo.") : console.log("O segundo é menor que o primeiro.");
(num1 < num3) ? console.log("O primeiro é menor que o terceiro.") : console.log("O terceiro é menor que o primeiro.");
(num2 < num3) ? console.log("O segundo é menor que o terceiro.") : console.log("O terceiro é menor que o segundo.");

console.log("Conclusão:");
printMinAndMax(num1, num2, num3);
