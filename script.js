// Estruturas de Repetição WHILE

// 1) Exibir os números de 1 a 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2) Calcular a soma dos números de 1 a 100
let soma = 0;
i = 1;
while (i <= 100) {
    soma += i;
    i++;
}
console.log("A soma dos números de 1 a 100 é:", soma);

// 3) Exibir os números pares de 1 a 50
i = 2;
while (i <= 50) {
    console.log(i);
    i += 2;
}

// 4) Ler 5 números inteiros e exibir a média aritmética dos valores lidos
function calcularMedia() {
    let soma = 0;
    let contador = 0;
    while (contador < 5) {
        let numero = parseInt(prompt("Digite um número inteiro:"));
        soma += numero;
        contador++;
    }
    return soma / 5;
}
console.log("A média aritmética dos números é:", calcularMedia());

// 5) Escrever um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor
function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
exibirTabuada(parseInt(prompt("Digite um número inteiro:")));

// 6) Criar um programa que leia um número inteiro positivo e exiba todos os divisores desse número
function listarDivisores(numero) {
    let i = 1;
    while (i <= numero) {
        if (numero % i === 0) {
            console.log(i);
        }
        i++;
    }
}
listarDivisores(parseInt(prompt("Digite um número inteiro positivo:")));

// 7) Fazer um programa que leia um número inteiro e exiba se ele é um número primo
function verificarPrimo(numero) {
    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo && numero > 1) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}
verificarPrimo(parseInt(prompt("Digite um número inteiro:")));

// 8) Escrever um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido
function fibonacciAte(numero) {
    let fibonacci = [0, 1];
    for (let i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= numero; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    console.log("Sequência de Fibonacci até " + numero + ":", fibonacci.join(", "));
}
fibonacciAte(parseInt(prompt("Digite um número inteiro:")));

// 9) Criar um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades
function calcularMediaIdades() {
    let somaIdades = 0;
    for (let i = 0; i < 5; i++) {
        let nome = prompt("Digite o nome da pessoa:");
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        somaIdades += idade;
    }
    return somaIdades / 5;
}
console.log("A média das idades é:", calcularMediaIdades());

// 10) Fazer um programa que exiba os primeiros 20 números da sequência de Fibonacci
let fibonacci = [0, 1];
for (let i = 2; i < 20; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log("Os primeiros 20 números da sequência de Fibonacci são:", fibonacci.join(", "));

// 11) Escrever um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido
function somaParesAte(numero) {
    let somaPares = 0;
    for (let i = 2; i <= numero; i += 2) {
        somaPares += i;
    }
    console.log("A soma dos números pares até " + numero + " é:", somaPares);
}
somaParesAte(parseInt(prompt("Digite um número inteiro:")));

// 12) Criar um programa que exiba os números ímpares de 50 a 1
for (let i = 50; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 13) Fazer um programa que leia um número inteiro e exiba os seus dígitos separadamente
function exibirDigitosSeparadamente(numero) {
    while (numero > 0) {
        console.log(numero % 10);
        numero = Math.floor(numero / 10);
    }
}
exibirDigitosSeparadamente(parseInt(prompt("Digite um número inteiro:")));

// 14) Escrever um programa que calcule o fatorial de um número inteiro inserido pelo usuário
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
console.log("O fatorial de " + numero + " é:", calcularFatorial(parseInt(prompt("Digite um número inteiro:"))));

// 15) Criar um programa que leia o nome e a idade de várias pessoas até que o nome "fim" seja informado. Ao final, exiba a média das idades
function calcularMediaIdades() {
    let somaIdades = 0;
    let contador = 0;
    let nome;
    while (true) {
        nome = prompt("Digite o nome da pessoa (ou 'fim' para sair):");
        if (nome.toLowerCase() === "fim") {
            break;
        }
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        somaIdades += idade;
        contador++;
    }
    if (contador > 0) {
        return somaIdades / contador;
    } else {
        return "Nenhum dado foi inserido.";
    }
}
console.log("A média das idades é:", calcularMediaIdades());


// Estruturas de Repetição DO WHILE

// 16) Exibir os números de 1 a 10
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 17) Calcular a soma dos números de 1 a 100
soma = 0;
i = 1;
do {
    soma += i;
    i++;
} while (i <= 100);
console.log("A soma dos números de 1 a 100 é:", soma);

// 18) Exibir os números pares de 1 a 50
i = 2;
do {
    console.log(i);
    i += 2;
} while (i <= 50);

// 19) Ler 5 números inteiros e exibir a média aritmética dos valores lidos
function calcularMedia() {
    let soma = 0;
    let contador = 0;
    do {
        let numero = parseInt(prompt("Digite um número inteiro:"));
        soma += numero;
        contador++;
    } while (contador < 5);
    return soma / 5;
}
console.log("A média aritmética dos números é:", calcularMedia());

// 20) Escrever um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor
function exibirTabuada(numero) {
    let i = 1;
    do {
        console.log(numero + " x " + i + " = " + (numero * i));
        i++;
    } while (i <= 10);
}
exibirTabuada(parseInt(prompt("Digite um número inteiro:")));

// 21) Criar um programa que leia um número inteiro positivo e exiba todos os divisores desse número
function listarDivisores(numero) {
    let i = 1;
    do {
        if (numero % i === 0) {
            console.log(i);
        }
        i++;
    } while (i <= numero);
}
listarDivisores(parseInt(prompt("Digite um número inteiro positivo:")));

// 22) Fazer um programa que leia um número inteiro e exiba se ele é um número primo
function verificarPrimo(numero) {
    let primo = true;
    let i = 2;
    do {
        if (numero % i === 0) {
            primo = false;
            break;
        }
        i++;
    } while (i < numero);
    if (primo && numero > 1) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}
verificarPrimo(parseInt(prompt("Digite um número inteiro:")));

// 23) Escrever um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido
function fibonacciAte(numero) {
    let fibonacci = [0, 1];
    let i = 2;
    do {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        i++;
    } while (fibonacci[i - 1] + fibonacci[i - 2] <= numero);
    console.log("Sequência de Fibonacci até " + numero + ":", fibonacci.join(", "));
}
fibonacciAte(parseInt(prompt("Digite um número inteiro:")));

// 24) Criar um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades
function calcularMediaIdades() {
    let somaIdades = 0;
    let contador = 0;
    do {
        let nome = prompt("Digite o nome da pessoa:");
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        somaIdades += idade;
        contador++;
    } while (contador < 5);
    return somaIdades / 5;
}
console.log("A média das idades é:", calcularMediaIdades());

// 25) Fazer um programa que exiba os primeiros 20 números da sequência de Fibonacci
fibonacci = [0, 1];
i = 2;
do {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    i++;
} while (i < 20);
console.log("Os primeiros 20 números da sequência de Fibonacci são:", fibonacci.join(", "));

// 26) Escrever um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido
function somaParesAte(numero) {
    let somaPares = 0;
    let i = 2;
    do {
        somaPares += i;
        i += 2;
    } while (i <= numero);
    console.log("A soma dos números pares até " + numero + " é:", somaPares);
}
somaParesAte(parseInt(prompt("Digite um número inteiro:")));

// 27) Criar um programa que exiba os números ímpares de 1 a 50
i = 1;
do {
    console.log(i);
    i += 2;
} while (i <= 50);

// 28) Fazer um programa que leia um número inteiro e exiba os seus dígitos separadamente
function exibirDigitosSeparadamente(numero) {
    do {
        console.log(numero % 10);
        numero = Math.floor(numero / 10);
    } while (numero > 0);
}
exibirDigitosSeparadamente(parseInt(prompt("Digite um número inteiro:")));

// 29) Escrever um programa que calcule o fatorial de um número inteiro inserido pelo usuário
function calcularFatorial(numero) {
    let fatorial = 1;
    let i = 2;
    do {
        fatorial *= i;
        i++;
    } while (i <= numero);
    return fatorial;
}
console.log("O fatorial de " + numero + " é:", calcularFatorial(parseInt(prompt("Digite um número inteiro:"))));

// 30) Criar um programa que leia o nome e a idade de várias pessoas até que o nome "fim" seja informado. Ao final, exiba a média das idades
function calcularMediaIdades() {
    let somaIdades = 0;
    let contador = 0;
    let nome;
    do {
        nome = prompt("Digite o nome da pessoa (ou 'fim' para sair):");
        if (nome.toLowerCase() === "fim") {
            break;
        }
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        somaIdades += idade;
        contador++;
    } while (true);
    if (contador > 0) {
        return somaIdades / contador;
    } else {
        return "Nenhum dado foi inserido.";
    }
}
console.log("A média das idades é:", calcularMediaIdades());


// Estruturas de Repetição FOR

// 31) Exibir os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 32) Calcular a soma dos números de 1 a 100
soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("A soma dos números de 1 a 100 é:", soma);

// 33) Exibir os números pares de 1 a 50
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// 34) Ler 5 números inteiros e exibir a média aritmética dos valores lidos
function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Digite um número inteiro:"));
        soma += numero;
    }
    return soma / 5;
}
console.log("A média aritmética dos números é:", calcularMedia());

// 35) Escrever um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor
function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
exibirTabuada(parseInt(prompt("Digite um número inteiro:")));

// 36) Criar um programa que leia um número inteiro positivo e exiba todos os divisores desse número
function listarDivisores(numero) {
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
}
listarDivisores(parseInt(prompt("Digite um número inteiro positivo:")));

// 37) Fazer um programa que leia um número inteiro e exiba se ele é um número primo
function verificarPrimo(numero) {
    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo && numero > 1) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}
verificarPrimo(parseInt(prompt("Digite um número inteiro:")));

// 38) Escrever um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido
function fibonacciAte(numero) {
    let fibonacci = [0, 1];
    for (let i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= numero; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    console.log("Sequência de Fibonacci até " + numero + ":", fibonacci.join(", "));
}
fibonacciAte(parseInt(prompt("Digite um número inteiro:")));

// 39) Criar um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades
function calcularMediaIdades() {
    let somaIdades = 0;
    for (let i = 0; i < 5; i++) {
        let nome = prompt("Digite o nome da pessoa:");
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        somaIdades += idade;
    }
    return somaIdades / 5;
}
console.log("A média das idades é:", calcularMediaIdades());

// 40) Fazer um programa que exiba os primeiros 20 números da sequência de Fibonacci
fibonacci = [0, 1];
for (let i = 2; i < 20; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}
console.log("Os primeiros 20 números da sequência de Fibonacci são:", fibonacci.join(", "));

// 41) Escrever um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido
function somaParesAte(numero) {
    let somaPares = 0;
    for (let i = 2; i <= numero; i += 2) {
        somaPares += i;
    }
    console.log("A soma dos números pares até " + numero + " é:", somaPares);
}
somaParesAte(parseInt(prompt("Digite um número inteiro:")));

// 42) Criar um programa que exiba os números ímpares de 50 a 1
for (let i = 50; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 43) Fazer um programa que leia um número inteiro e exiba os seus dígitos separadamente
function exibirDigitosSeparadamente(numero) {
    while (numero > 0) {
        console.log(numero % 10);
        numero = Math.floor(numero / 10);
    }
}
exibirDigitosSeparadamente(parseInt(prompt("Digite um número inteiro:")));

// 44) Escrever um programa que calcule o fatorial de um número inteiro inserido pelo usuário
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
console.log("O fatorial de " + numero + " é:", calcularFatorial(parseInt(prompt("Digite um número inteiro:"))));

// 45) Criar um programa que leia o nome e a idade de várias pessoas até que o nome "fim" seja informado. Ao final, exiba a média das idades
function calcularMediaIdades() {
    let somaIdades = 0;
    let contador = 0;
    let nome;
    while (true) {
        nome = prompt("Digite o nome da pessoa (ou 'fim' para sair):");
        if (nome.toLowerCase() === "fim") {
            break;
        }
        let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
        somaIdades += idade;
        contador++;
    }
    if (contador > 0) {
        return somaIdades / contador;
    } else {
        return "Nenhum dado foi inserido.";
    }
}
console.log("A média das idades é:", calcularMediaIdades());