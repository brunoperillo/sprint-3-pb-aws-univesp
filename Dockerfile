FROM node:14-alpine


# Define o diretório onde estará a aplicação
WORKDIR /src

# faz a cópia dos arquivos package.json e o package-lock.json para dentro do container
COPY package*.json ./

RUN npm install

# Copia todo o diretório atual para o container
COPY . .

EXPOSE 3000

# Inicia a aplicação pelo comando start, definido no package.json
CMD ["npm", "start"]