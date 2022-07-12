//Aqui estou criando a variável para colocar os objetos dentro de uma lista para criar estrutura de dados, cada {} é um objeto com dados. Criei uma const com uma lista de objetos dentro
const students = [
  {
    name: 'Renata',
    noteProofOne: 8,
    noteProofTwo: 9
  },
  {
    name: 'Marcelo',
    noteProofOne: 3,
    noteProofTwo: 8
  },
  {
    name: 'Roberto',
    noteProofOne: 9,
    noteProofTwo: 9
  }
]
//Aqui estou criando listas vazias que vai receber o nome dos estudandes para mostrar na tela
// let studentsNames = []
// let studentsNote = []

// //aqui estou percorrendo a lista de objetos para selecionar apenas o nome dos estudantes

// for (let student of students) {
//   studentsNames.push(student.name)
// }

//aqui estou mostrando em tela os nomes dos estudantes criados na lista.
// alert(`
//   ${studentsNames}
// `)

//declarando a função

function printAverage(students) {
  let studentNote = (students.noteProofOne + students.noteProofTwo) / 2
  let average = 7

  let txtStorage = `A média de ${students.name} foi de: ${studentNote.toFixed(
    2
  )}`

  if (studentNote >= average) {
    return `${txtStorage} Parabéns, você foi aprovado!`
  } else {
    return `${txtStorage} Não foi dessa vez!`
  }

  // return `
  //   A média de ${students.name} foi de: ${(
  //   (students.noteProofOne + students.noteProofTwo) /
  //   2
  // ).toFixed(2)}

  // `
}

// if (printAverage >= 7) {
//   ;(' Parabéns, você foi aprovado(a) no consurso')
// } else {
//   ;(' Não foi dessa vez, tente na próxima')
// }

for (let student of students) {
  let averageMessage = printAverage(student)

  alert(averageMessage)
}
