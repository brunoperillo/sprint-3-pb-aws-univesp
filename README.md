# Avaliação Sprint 3 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da terceira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***
## Grupo 1
- Luciene Godoy
- Luiz Sassi
- Marcos Carvalho
- O'Dhara Maggi

***

## Execução (Código Fonte)

Criar um container com o Docker para executar o projeto da Sprint 2 em uma instância EC2 da AWS Cloud.

### Instalação
  ```sh
    npm install
    npm install express express-handlebars
  ```
### Criando a aplicação com NodeJS

##### Estrutura da aplicação com NodeJS:
A partir do momento que o usuário acessa a URL raiz, ou `/`, da nossa aplicação, usamos a função `res.render('index')` do NodeJs para renderizar a página HTML contida na pasta `/src`.
O app está escutando na porta `9000`, portando é necessário colocar `:9000` ao final da URL.
![estrutura nodejs](src/img/nodeApp.PNG)

#### Execução em máquina local
  ```sh
    node index.js
  ```

### Construindo a imagem do container
Estrutura do Dockerfile
![imagem container](src/img/dockerfile.PNG)