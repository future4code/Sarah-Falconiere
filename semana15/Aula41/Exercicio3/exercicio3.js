// Exercicio 3

const listaDeTarefas = ["Lavar banheiro", "Lavar a roupa", "Lavar a louça"]

const novaTarefa = process.argv[2]
process.argv[2] && listaDeTarefas.push(novaTarefa)

process.argv[2] && console.log("Tarefa adicionada com sucesso!")
console.log("Tarefas:", listaDeTarefas)