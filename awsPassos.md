# sudo ssh -i chaveSSH ec2-user@IPv4

Criar a pasta onde ficaram os arquivos no caminho

# /var/www/html2

Clonar os arquivos do github nessa pasta

# git clone LinkGthub HTTPS

Criar o Dockerfile

# sudo vim Dockerfile

No arquivo colocar o seguinte código

### Conferir o arquivo***

Criar a imagem

# sudo docker build -t sprint3-image .

Verificar se a imagem foi criada

# docker images

Criar um container a partir da imagem

# sudo docker run -d -p 9000:9000 --name sprint3-container 

Verificar se o container está sendo executado

# sudo docker ps
