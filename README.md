# Clique

Este projeto é uma aplicação React que conta o número de cliques em um botão e registra a data e hora do último clique usando o Firebase Firestore. A aplicação é responsiva, segura, e utiliza variáveis de ambiente para proteger as credenciais do Firebase.

## Índice
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração do Firebase](#configuração-do-firebase)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

- Node.js e npm (ou yarn)
- Conta no [Firebase](https://firebase.google.com/) com um projeto configurado
- Firestore habilitado no seu projeto Firebase

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as Dependências

    ``` bash
    npm install
    # ou
    yarn install

## Configuração do Firebase

1. No console do Firebase, vá até Configurações do projeto > Suas apps e copie as credenciais do Firebase.

2. Crie um arquivo .env na raiz do projeto e adicione as credenciais com o prefixo REACT_APP_, conforme abaixo:

   ``` plaintext
   REACT_APP_FIREBASE_API_KEY=your_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   REACT_APP_FIREBASE_APP_ID=your_app_id_here

3. No Firestore, crie uma coleção chamada clicks e um documento chamado clicksCount com um campo clicks (inicialize com 0).

## Uso

1. Inicie o servidor de desenvolvimento:

    ``` bash
    npm start
    # ou
    yarn start

2. Acesse http://localhost:3000 no navegador.

3. Clique no botão Clique Aqui para aumentar o contador de cliques. A contagem de cliques e a data/hora do último clique serão atualizados em tempo real.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- npm start: Executa a aplicação em modo de desenvolvimento.
- npm run build: Cria o build de produção na pasta build.

## Tecnologias Utilizadas

- React — Biblioteca para criação de interfaces de usuário.
- Firebase — Backend-as-a-Service para autenticação e banco de dados em tempo real.
- Firestore — Banco de dados NoSQL para armazenamento de dados.
- CSS — Estilização da interface.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
3. Commit suas alterações (git commit -m 'Adicionei uma nova feature').
4. Faça o push para a branch (git push origin feature/nome-da-feature).
5. Abra um Pull Request.
