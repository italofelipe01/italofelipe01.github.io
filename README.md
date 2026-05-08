# Italo Felipe Portfolio

Portfólio pessoal de Italo Felipe, com foco em Business Intelligence, análise de dados, dashboards, certificações, experiências profissionais, formação acadêmica e atividade open source.

## Créditos

Este projeto deriva diretamente do projeto original **MasterPortfolio**, criado e mantido originalmente por **Ashutosh Hathidara** e colaboradores.

Repositório original:

```text
https://github.com/ashutosh1919/masterPortfolio
```

O layout base, a estrutura inicial de seções e parte da organização visual vieram desse projeto. Este repositório adapta essa base para o portfólio de Italo Felipe e moderniza a stack para React/Vite.

## Stack Atual

- React 19
- Vite 8
- React Router 7
- styled-components
- Chart.js e react-chartjs-2
- Iconify React
- Font Awesome Free
- Vitest e Testing Library
- GitHub Pages via `gh-pages`

## Estrutura Principal

- `src/portfolio.js`: conteúdo principal do portfólio.
- `src/theme.js`: temas visuais e tema ativo.
- `src/containers/Main.js`: rotas da aplicação.
- `src/pages/`: páginas principais.
- `src/components/`: componentes reutilizáveis.
- `src/shared/opensource/`: dados estáticos de GitHub/open source.
- `git_data_fetcher.mjs`: atualiza dados de GitHub via API GraphQL.
- `public/`: arquivos públicos, ícones, manifesto e `404.html` para GitHub Pages.

## Configuração Local

Use Node.js `20.19.0` ou superior. A versão atual recomendada para este projeto é Node 22.

```bash
npm install
npm start
```

O comando `npm start` sobe o servidor Vite. Por padrão, ele usa a porta `5173`.

## Scripts

```bash
npm start
```

Inicia o ambiente local de desenvolvimento.

```bash
npm test
```

Executa os testes com Vitest.

```bash
npm run build
```

Gera a versão de produção em `dist/`.

```bash
npm run preview
```

Serve localmente o build de produção.

```bash
npm run deploy
```

Gera o build e publica `dist/` na branch `gh-pages`.

## Como Configurar o Conteúdo

A maior parte da personalização está em `src/portfolio.js`.

### Dados do site e SEO

Edite:

```js
const seo = { ... };
const greeting = { ... };
```

Aqui ficam título do site, descrição, nome, subtítulo, link do currículo, repositório e perfil GitHub.

### Redes sociais

Edite:

```js
const socialMediaLinks = [ ... ];
```

Cada item define nome, link, ícone Font Awesome e cor de fundo.

### Skills

Edite:

```js
const skills = { ... };
```

Cada seção define título, ilustração, lista textual e ícones técnicos. Os ícones usam nomes do Iconify, por exemplo:

```js
fontAwesomeClassname: "logos:microsoft-power-bi"
```

### Formação

Edite:

```js
const degrees = { ... };
```

Use essa seção para universidades, cursos formais e descrições.

### Certificações

Edite:

```js
const certifications = { ... };
```

Cada certificação pode ter título, instituição/professor, logo, link do certificado e cor de card.

### Experiência

Edite:

```js
const experience = { ... };
```

As experiências são agrupadas por seção, como trabalho, estágio e voluntariado.

### Projetos e publicações

Edite:

```js
const projectsHeader = { ... };
const publicationsHeader = { ... };
const publications = { ... };
```

Use `publications` para dashboards, relatórios, links públicos do Power BI ou outros materiais publicados.

Os projetos vindos do GitHub são lidos de:

```text
src/shared/opensource/projects.json
```

### Contato

Edite:

```js
const contactPageData = { ... };
```

Esta seção controla imagem, texto de contato, endereço, telefone e link do Google Maps. Revise bem esses dados antes de publicar, porque ficam visíveis no site.

## Atualização de Dados do GitHub

Crie um arquivo `.env` baseado em `env.example`:

```text
GITHUB_TOKEN=seu_token
GITHUB_USERNAME=italofelipe01
```

Depois execute:

```bash
node git_data_fetcher.mjs
```

O script atualiza:

- `src/shared/opensource/pull_requests.json`
- `src/shared/opensource/issues.json`
- `src/shared/opensource/organizations.json`
- `src/shared/opensource/projects.json`

Nunca versionar `.env`. Ele já está ignorado pelo `.gitignore`.

## Temas

Os temas ficam em:

```text
src/theme.js
```

O tema ativo é definido em:

```js
export const chosenTheme = materialTealTheme;
```

Para trocar o tema, altere `chosenTheme` para outro tema exportado ou crie um novo objeto seguindo o mesmo formato.

## GitHub Pages

Este projeto usa SPA com React Router. O arquivo `public/404.html` redireciona rotas internas para o app, evitando erro 404 ao acessar URLs como `/experience` diretamente.

Para publicar:

```bash
npm run deploy
```

O deploy publica a pasta `dist/` na branch `gh-pages`.

## Domínio

O arquivo `CNAME` do template original foi removido. Sem `CNAME`, o site usa o endereço padrão:

```text
https://italofelipe01.github.io
```

Se você usar um domínio próprio no futuro, crie um novo `CNAME` com o seu domínio real e configure o DNS no GitHub Pages.

## Docker

O projeto também possui Docker para desenvolvimento:

```bash
docker compose up --build
```

O serviço expõe o Vite em:

```text
http://localhost:3001
```
