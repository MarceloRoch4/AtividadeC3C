/* QUESTÃO 3 */

const prompt = require('prompt-sync')({ sigint: true });

let notaAluno

flag = 1

while (flag == 1) {
    notaAluno = prompt("Digite a nota do aluno(a): ")
    if (notaAluno < 0 || notaAluno > 100) {
        console.log("-------------------------")
        console.log("Nota inválida. Digite uma nota entre 0 e 100!")
        console.log("-------------------------")

    } else {
        flag = 0
    }
}


if (notaAluno < 40) {
    console.log("-------------------------")
    console.log("Aluno(a) está reprovado!")
    console.log("-------------------------")

} else if (notaAluno % 10 == 3 || notaAluno % 10 == 8) {
    notaAluno = parseInt(notaAluno) + parseInt("2")

    console.log("-------------------------")
    console.log("Sua nota é: ", notaAluno)
    console.log("-------------------------")

} else if (notaAluno % 10 == 4 || notaAluno % 10 == 9) {
    notaAluno = parseInt(notaAluno) + parseInt("1")

    console.log("-------------------------")
    console.log("Sua nota é: ", notaAluno)
    console.log("-------------------------")

} else {
    console.log("-------------------------")
    console.log("Sua nota é: ", notaAluno)
    console.log("-------------------------")

}