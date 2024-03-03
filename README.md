![Logo](https://github.com/DeigelaLima/Tutor_de_ensino_TS/raw/main/aplicacao/frontend/src/assets/readme-prints/Group%208.svg)

## Tutor de Ensino para Refatoração de Test Smells (TERTS)

TERTS é uma aplicação educacional dedicada ao ensino de técnicas de refatoração de testes de unidades, focalizando na eliminação de "smells" para capacitar alunos de graduação nas áreas de tecnologia. A ferramenta oferece aprendizado efetivo sobre quatro categorias de "test smells" - Assertion Roulette, Duplicate Assert, Ignored Test e EagerTest - por meio de 12 exercícios específicos. Os alunos têm autonomia para escolher a categoria de exercícios desejada. O feedback da ferramenta reflete a refatoração realizada pelo aluno no código de teste. Cada exercício fornece uma descrição detalhada do código de produção associado ao teste e uma explicação sobre o próprio teste, buscando uma compreensão abrangente do contexto de refatoração. Além disso, a ferramenta oferece um guia passo a passo para a refatoração de cada "smell" identificado no teste, essencial para proporcionar clareza e facilitar o processo de aprendizagem nas práticas de refatoração.

## Dependências 

Para utilizar o TERTS  é necessário ter as seguintes dependências instaladas:
- [Node.js](https://nodejs.org/en/download)
- [Vue.js](https://vuejs.org/guide/quick-start.html)



## Instalação

A instalação  consiste nos seguinte passos:

- Clone o repositório.
- Navegue até a pasta do projeto
- Execute o script com o comando `chmod +x script.sh && ./script.sh`

```
cd Tutor_de_ensino_TS/aplicacao
chmod +x script.sh && ./script.sh

```
##  Utilização da ferramenta

A seguir estão enumeradas algumas das funcionalidades do TERTS:

1.  São quatro botões, cada um indicando seu respectivo tipo  de test smell  a ser refatorado. Ao clicar no botão o usuário é levado para a tela de escolha do exercício. 
2.  Esse botão leva o usuário para outra página que tem algumas informações sobre o projeto e seus desenvolvedores.

![Tela 1](https://github.com/DeigelaLima/Tutor_de_ensino_TS/raw/main/aplicacao/frontend/src/assets/readme-prints/Group%2018.svg)

3.  É uma caixa de texto que dá um breve resumo sobre o tipo de test smell que o usuário escolheu.
4.   São botões que levam o usuário para o exercício  que ele escolher.

![Tela 2](https://github.com/DeigelaLima/Tutor_de_ensino_TS/raw/main/aplicacao/frontend/src/assets/readme-prints/Group%2019.svg)


5.  É um editor de texto com o código que possui o smell e deve ser refatorado pelo usuário.
6.  É uma caixa de texto com um breve resumo do código de produção ao qual o código de teste pertence, bem como a definição do que o código de teste faz.
7.  É o passo a passo que deve ser seguido pelo usuário para que a refatoração do test smell seja possível.
8.  Após realizar a refatoração o usuário pode clicar nesse botão para checar o resultado através de um pop-up de acerto ou erro.
9.  Esse botão leva o usuário para a página de exercícios do test smell escolhido anteriormente.

![Tela 3](https://github.com/DeigelaLima/Tutor_de_ensino_TS/raw/main/aplicacao/frontend/src/assets/readme-prints/Group%2022.svg)

10. Caixa de texto que apresenta o feedback sobre a refatoração do usuário.
11. Esse botão leva o usuário para a página de exercícios do test smell escolhido anteriormente.