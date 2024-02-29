export const TestSmells = [
    { 
        id: 1, 
        name: "Assertion Roulette", 
        description: "Ocorre quando um método de teste possui várias assertions sem explicação, "+
        "dificultando a identificação da causa de um erro em caso de falha. "+
        "Para refatorar, deve-se incluir mensagens explicativas como argumentos opcionais nas assertions, "+
        "uma prática recomendada para melhorar a compreensão dos testes, esclarecendo o propósito de cada assertion "+
        "e facilitando a manutenção do código.",
        exercise: { idSmell: [10, 11, 12] }
    },
    { 
        id: 2,
        name: "Duplication Assert", 
        description: "Ocorre quando um método de teste repete a mesma condição várias vezes dentro do próprio método. "+
        "Para evitar isso, é aconselhável refatorar, criando um novo método de teste se a mesma condição precisa ser verificada com valores diferentes. "+
        "Isso contribui para a organização do código e evita redundâncias.",
        exercise: { idSmell: [7, 8, 9] }
    },
    {
        id: 3, 
        name: "Eager Test", 
        description: "Ocorre quando um método de teste verifica diversos métodos do objeto que está sendo testado. "+
        "Esses testes são de difícil compreensão e leitura, tornando-se menos eficazes como documentação. "+
        "Para solucionar essa situação, recomenda-se refatorar, extraindo o método de teste e separando os assertions em métodos de teste distintos.",
        exercise: {idSmell: [4, 5, 6]}
    },
    {
        id: 4,
        name: "Ignored Test",
        description: "Ocorre quando um método de teste é suprimido da execução. "+
        "Contudo, essa abordagem de Ignored Test pode resultar em sobrecarga durante o tempo de compilação, "+
        "além de aumentar a complexidade e dificultar a compreensão do código. "+
        "Ao utilizar a anotação @Ignore(), há o risco de deixar lacunas na cobertura dos testes, "+
        "pois partes cruciais do código podem não ser adequadamente verificadas. "+
        "A refatoração do Ignored Test consiste em remover a anotação @Ignore() do teste de unidade.",
        exercise: { idSmell: [1, 2, 3] }
    },
];