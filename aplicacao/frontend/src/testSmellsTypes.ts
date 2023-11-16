export const TestSmells = [
    { id: 1, name: "Assertion Roulette", description: "O Assertion Roulette ocorre quando um único teste tenta verificar múltiplos comportamentos ou resultados diferentes, tornando-o difícil de entender e manter. Isso pode dificultar a identificação da causa de uma falha no teste, pois várias asserções são executadas antes de o teste ser interrompido em caso de falha.", exercise: { idSmell: [10, 11, 12] } },
    { id: 2, name: "Duplication Assert", description: "e refere à repetição excessiva de asserções (assertions) semelhantes em vários testes unitários. Isso significa que múltiplos testes estão verificando o mesmo comportamento ou resultado, resultando em redundância no código de teste.", exercise: { idSmell: [7, 8, 9] } },
    {
        id: 3, name: "Eager Test", description: "Um teste eager geralmente ocorre quando um desenvolvedor escreve testes que verificam um grande número de resultados ou cenários, incluindo aqueles que não têm relevância direta para o comportamento ou a funcionalidade que está sendo testada.", exercise: {
            idSmell: [4, 5, 6]
        }
    },
    {
        id: 4,
        name: "Ignored Test",
        description:
            "Esse tipo de Test Smell ocorre quando um método de teste é suprimido de execução usando recursos fornecidos pelo JUnit 4. No entanto, essa abordagem de Ignored Test pode resultar em sobrecarga durante o tempo de compilação, além de aumentar a complexidade e dificultar a compreensão do código.  ", exercise: { idSmell: [1, 2, 3] }
    },
];
