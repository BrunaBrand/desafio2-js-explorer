//Aqui estou criando a variável para colocar os objetos dentro da estrutura de dados, cada {} é um objeto com dados
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
//Aqui estou criando uma lista vazia que vai receber o nome dos estudandes para mostrar na tela
let studentsNames = []
let studentsNote = []

//aqui estou percorrendo a lista de objetos para selecionar apenas o nome dos estudantes
for (let student of students) {
  studentsNames.push(student.name)
}

for (let note of students) {
  studentsNote.push(note.noteProofOne)
}

//aqui estou mostrando em tela os nomes dos estudantes criados na lista.
alert(`

O(a) Estudante ${students[0].name} teve a nota ${students[0].noteProofOne}

`)
