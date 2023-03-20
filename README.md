# Avaliação Sprint 3 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da terceira sprint do programa de bolsas Compass UOL para formação em machine learning para [AWS][aws].
A aplicação pode ser acessada clicando [aqui][aqui].

***

## Execução (Código Fonte)

Criar um container com o Docker para executar o projeto da [Sprint 2][sprint2] em uma instância EC2 da AWS Cloud.

### Instalação

  ```sh
    npm install
    npm install express express-handlebars
  ```
### Criando a aplicação com NodeJS

##### Estrutura da aplicação com NodeJS:
A partir do momento que o usuário acessa a URL raiz, ou `/`, da nossa aplicação, usamos a função `res.render('index')` do NodeJs para renderizar a página HTML contida na pasta `/src`.

O app está escutando na porta `9000`, portando é necessário colocar `:9000` ao final da URL.

[Estrutura do index.js](src/img/nodeApp.PNG)

#### Execução em máquina local
  ```sh
    node index.js
  ```

### Construindo a imagem do container
Estrutura do Dockerfile

[Dockerfile](src/img/dockerfile.PNG)

### Criando uma VPC na Console AWS:

1. Abra o Console da AWS e navegue até o serviço de VPC;
2. Clique em "Criar VPC" e "VPC e muito mais".
3. Mantenha todas as configurações automáticas que a AWS indica, apenas altere a quantidade de subnets públicas e privadas para uma 1 cada, respectivamente ([Estrutura Visual da Cloud](src/img/resourcemap.PNG)).

### Criando instância na Console AWS:

1. Abra o Painel EC2 na Console AWS e clique em "Executar instância".
2. Insira o nome da instância, tags e determine o sistema operacional.
3. No campo "Tipo de instância" faça a escolha da opção "t2.micro".
4. Insira ou crie par de chaves.
5. Edite a "Configurações de rede" da seguinte forma:
- Vincule a VPC criada anteriormente 
- Selecione a subnet pública
- Habilite o serviço "Atribuir automaticamente um IP público"
- Crie um novo grupo de segurança e acrescente o acesso a porta 9000 ([Security Group](src/img/securitygroup.PNG)).
6. Em "Configuração de Armazenamento" opte pela quantidade e tipo de volume que sua instância irá ter.
7. Finalize executando a instância.
***

## Equipe
| [<img src="https://avatars.githubusercontent.com/u/73674662?v=4" width=115><br><sub>Marcos Carvalho</sub>](https://github.com/onativo) | [<img src="https://avatars.githubusercontent.com/u/94749597?v=4" width=115><br><sub>O'Dhara Maggi</sub>](https://github.com/odharamaggi) | [<img src="https://avatars.githubusercontent.com/u/87142990?v=4" width=115><br><sub>Luciene Godoy</sub>](https://github.com/LucieneGodoy) | [<img src="https://avatars.githubusercontent.com/u/72028902?s=400&u=55ce73592997b191c7c04082c85ea2ee367f7e2a&v=4" width=115><br><sub>Luiz Renato Sassi</sub>](https://github.com/luizrsassi) |
| :---: | :---: | :---: |:---: |

***
[sprint2]: <https://github.com/Compass-pb-aws-2023-Univesp/sprint-2-pb-aws-univesp/tree/main>
[aws]: <https://aws.amazon.com/pt/>
[aqui]: <http://18.212.213.146:9000/>

