Acessar a instância ec2 pelo terminal
```sh
sudo ssh -i chaveSSH ec2-user@IPv4
```

Criar a pasta onde ficaram os arquivos no caminho
 ```sh
  /var/www/html2
```

Clonar os arquivos do github nessa pasta
 ```sh
  git clone LinkGthub HTTPS
 ```
 
Criar o Dockerfile
 ```sh
  sudo vim Dockerfile
 ```
No arquivo colocar o seguinte código
[Dockerfile](https://github.com/Compass-pb-aws-2023-Univesp/sprint-3-pb-aws-univesp/blob/grupo-1/Dockerfile)

Criar a imagem
 ```sh
  sudo docker build -t sprint3-image .
 ```
Verificar se a imagem foi criada
 ```sh
 docker images
 ```
 
Criar um container a partir da imagem
```sh
sudo docker run -d -p 9000:9000 --name sprint3-container 
```

Verificar se o container está sendo executado
```sh
sudo docker ps
```
