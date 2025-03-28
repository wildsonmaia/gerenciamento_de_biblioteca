# Biblioteca CFT

Biblioteca CFT é um site que gerencia e oferece recursos básicos para as atividades diárias de uma biblioteca.

## Colaboradores
- Carlos Eduardo Maciel Cardoso
- Francisco Wildson Silva Maia
- Thayany Maria Almeida

## Funcionalidades

- Listar livros da base de dados (arquivo JSON)
- Adicionar livro
- Buscar livro por id
- Atualizar livro por id
- Remover livro por id

## Tecnologias e Ferramentas

Biblioteca CFT utiliza:

- [JavaScript] - linguagem de programação
- [node.js] - para o backend
- [Express] - framework node.js
- [React] - framework para frontend
- [axios] - para fazer requisições HTTP ao servidor
- [react-router] - para fazer o roteamento das páginas permitindo a navegação entre elas
- [Visual Studio Code] - editor de texto para codificação
- [Postman / Insomnia] - ferramenta para desenvolver e testar APIs



## Configuração do Backend

- Instalar as dependências:
    - Criar diretório:
        ```sh
        mkdir [nome_diretório]
        ```
    - Adicionar arquivo package.json:
        ```sh
        npm init -y
        ```
    - Instalar node_modules:
        ```sh
        npm i
        ```
    - Instalar express:
        ```sh
        npm i express
        ```
    - Instalar nodemon:
        ```sh
        npm i nodemon
        ```
- Criar os arquivos: server.js, router.js e db.json
    - server.js: Configurar o servidor
    - router.js: Configurar as rotas de requisições
    - db.json: Simular o banco de dados
- Adicionar ao package.json:
    ```sh
    "scripts": {
        //
        "server": "nodemon server.js"
        //
    }
    ```
- Iniciar o servidor:
    ``
    npm run server
    ``



## Servidor
```sh
localhost:3000
```

## Rotas
- Página inicial:
    ```sh
    localhost:3000
    ```
- Rotas: OBTER LIVROS e ADICIONAR LIVRO
    ```sh
    localhost:3000/livros
    ```
- Rotas: OBTER LIVRO, ATUALIZAR LIVRO e REMOVER LIVRO
    ```sh
    localhost:3000/livros/:id
    ```

## Configuração do  Frontend
- Criar pasta frontend:
    ```sh
    npm create vite@latest
    ```
   Nas configurações, nomear a pasta como 'frontend'

- Instalar as dependências:
   - Para acessar a pasta frontend:
    ```sh
    cd frontend
    ```
   - Para instalar o axios:
    ```sh
   npm i axios
    ```
   - Para acessar a pasta react-router:
    ```sh
   npm i react-router
    ```
   - Para acessar a pasta body-parser:
    ```sh
   npm i body-parser
    ```

    - Iniciar projeto:
    ```sh
   npm run dev
    ```

- Estruturar projeto:
   - Adicionar uma pasta src
   - Dentro de src, adicionar três pastas: pages, components e router
   - Pasta pages: que terão o conteúdo principal de cada página do site
   - Pasta components: arquivos que serão reutilizados pelas páginas
   - Pasta router: configuração das rotas das páginas do site
   
## Licença

ISC