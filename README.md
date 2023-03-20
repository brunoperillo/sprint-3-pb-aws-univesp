# Avaliação Sprint 3 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da terceira Sprint do Programa de bolsas Compass UOL para formação em machine learning para AWS.

***

## Objetivo 

Execução da API do projeto da [Sprint 2][sprint2] a partir de um containers Docker, dentro da AWS Cloud.

## Introdução:

O Projeto Sprint 3 compreende:

- A execução de uma API (conjunto de instruções e padrões de programação que servem para fornecer dados e informações relevantes de uma determinada aplicação), construída em NodeJS e Express a partir da aplicação da [Sprint-2](https://github.com/Compass-pb-aws-2023-Univesp/sprint-2-pb-aws-univesp);
- A criação de um container Docker (software usado para implantar aplicações dentro de containers virtuais) com a API;
- Sua disponibilização utilizando a AWS Cloud (provedor de soluções em nuvem com entrega sob demanda, oferecendo serviços integrados e otimizados) e sendo executada a partir do container gerado.


**Mas o que é e por quer utilizar o Docker para rodar a aplicação?**

Para o funcionamento de um aplicativo ou serviço em diferentes sistemas a melhor solução é a utilização das funcionalidades do Docker, e a razão é justamente devido ao seu propósito semelhante ao das maquinas virtuais porém com diferenças significativas,
pois o docker é capaz de oferecer aplicações a partir em containers, maior desempenho, e mais leve (pois ocupa menos espaço no armazenamento) e de rápida inicialização. 

**E por quer utilizar o docker na AWS Cloud?**

As vantagens de utilizar o Docker na AWS são diversas, e dentre elas está a facilidade de portabilidade pois o Docker permite o "empacotamento" da aplicação em containers podendo ser executável tanto em local quanto remotamente, em nuvem por exemplo. Isto torna mais fácil mover a aplicação para qualquer ambiente, simplificando seu gerenciamento. O Docker simplifica o gerenciamento de infraestrutura ao tratar cada container como uma unidade lógica, podendo ser gerenciada de acordo com o tipo de projeto, ou seja, pode-se facilmente atualizar, implantar ou remover containers de maneira consistente em toda sua infraestrutura. Em resumo o uso do Docker na AWS Cloud ajuda e simplifica todo o processo de construção, implementação e desenvolvimento de aplicativos.



## Indice

- [Sprint 2][sprint2] 
- Arquivo docker para API
- App.js e package.json implementam a API
- Arquivo com passo a passo do projeto NodeJS em docker na cloud AWS




## Descrição 

Projeto em desenvolvimento para exposição na web da [Sprint 2][sprint2] através do deploy de um container docker na AWS Cloud, a figura a seguir representa o fluxograma da infraestrutura proposta neste projeto:


<img src='https://user-images.githubusercontent.com/125395133/226207497-74f88742-5fe7-44e4-be5c-cee76300ceec.PNG' width='50%'>





## Ferramentas e Técnicas Utilizadas

- Install Node.js incluso Node Package Manager
- Install Docker
- Install VS CODE (opcional)
- Projeto Sprint 2
- Acesso AWS Cloud (ECR, ECS)
- Conhecimento em Docker
- Conhecimento Node.JS
- Conhecimento JavaScript
- Conhecimento HTML



## Aplicação

Verifique o deploy deste projeto clicando <aqui>(editar-o-botão-aqui) ou acesse o endereço abaixo na barra de endereço do seu navegador de preferência.

## Dificuldades Encontradas ao longo do Projeto

Foram encontradas algumas dificuldades no processo de elaboração deste projeto/sprint, algumas dificuldades vivenciadas por exemplo foi a saída de um membro da equipe, familiaridade com a plataforma e criação de imagens no docker, documentação mais precisa no decorrer do projeto, naturalização com o sistema da amazon ECS, entre outras dificuldades não listadas.



## Equipe

| [<img src="https://avatars.githubusercontent.com/u/78061851?v=4" width=115><br><sub>Carlos Roberto</sub>](https://github.com/crobertocamilo) | [<img src="https://avatars.githubusercontent.com/u/81330043?v=4" width=115><br><sub>Bernardo Lima</sub>](https://github.com/belima93) | [<img src="https://avatars.githubusercontent.com/u/125395133?v=4" width=115><br><sub>Adila Mota</sub>](https://github.com/Adila02) |
| :---: | :---: | :---: |





***

[sprint2]: <https://github.com/Compass-pb-aws-2023-Univesp/sprint-2-pb-aws-univesp/tree/main>


