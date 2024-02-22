const students =[
    {nome: "DRi", firstNote: 7.0, secondNote: 7.0},
    {nome: "Buba", firstNote: 10.0, secondNote: 6.5},
    {nome: "Káka", firstNote: 3.5, secondNote: 5.0} 
]

function media(firstNote, secondNote){
    let media = (firstNote + secondNote) / 2
    return(media)
}

for(i = 0; i < students.length; i++){

    nota = media(students[i].firstNote, students[i].secondNote)
    if(nota < 7){

        alert(`A média do(a) aluno(a) ${students[i].nome} é: ${nota}, Foi reprovado. Tente novamente`)
        
    }else{
        alert(`Aluno(a) ${students[i].nome} foi aprovado(a)! Média: ${nota}`)
    }
}


