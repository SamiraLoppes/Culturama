> # Culturama:

> ### Sobre:
Uma plataforma Web e Mobile que visa incentivar o turismo, cultura, locais, hoteis de uma região. Terá a possibilidade de buscar e indicar locais, também contratar guia turísticos.

> ### Protótipo

[Figma](https://www.figma.com/design/vFauTIfcBFC2lo5Dw0OkHM/CULTURAMA?node-id=0-1&t=fDZwKGLLjCGjZuIO-1)

> ## Configurar e Rodar o Projeto:

Tudo será feito no terminal, então abra-o na pasta do projeto.

**Front-end:**

Abra um terminal para o projeto front-end, acessa a pasta com o seguinte código no terminal:
```bash
cd culturama-frontend
```
Instale as dependências:
```bash
npm install
```
Rode o projeto local
```bash
npm run dev
```
Agora seu projeto front-end estará rodando localmente, basta acessar o link: http://localhost:5173

**Back-end:**
Abra um outro terminal para o projeto back-end, acessa a pasta com o seguinte código no terminal:
```bash
cd culturama-api
```
Instale as dependências:
```bash
npm install
```

Renomeie o arquivo <kbd>.env.example</kbd> para <kbd>.env</kbd> e coloquei as configurações do seu Banco de Dados de acordo com o que deseja.

Agora é preciso ter o <kbd>Docker</kbd> instalado para criar um banco Postgres local, tendo isso, rode os seguintes comandos:
```bash
npm run docker:up
```
```bash
npm run migration:run
```
Esses comandos vão subir um container postgres e rodar as migrations para configurar o Banco de Dados encontradas dentro de src/database/migrations

**OBS:** Caso precise criar ou atualizar uma tabela no Banco de Dados, rode o seguinte comando:
```bash
npm run migration:create -name=algum-nome-para-a-migration
```

Agora para rodar o back-end
```bash
npm run start:dev
```

Agora seu back-end estará rodando localmente:
- Documentação da API com Swagger: http://localhost:3000/api-docs
- API: http://localhost:3000

> ## Tecnologias e Ferramentas:

- NodeJs: v20.X
- Docker

**Front-end**
- Ionic
- React
- Typescript

**Back-end**
- NestJS
- TypeScript
- Fastify
- Swagger
