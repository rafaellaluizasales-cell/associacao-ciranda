# Site Institucional — Associação Cultural CIRANDA

Este é o repositório oficial do site da **Associação Cultural Ciranda (CIRANDA)**, desenvolvido no plano **Opção 2 — Site Interativo** com a stack moderna **Astro + React + Tailwind CSS**.

---

## 📌 Dados Institucionais do Projeto

- **Nome Empresarial e Fantasia**: CIRANDA (Associação Cultural Ciranda)
- **CNPJ**: 32.599.610/0001-40
- **Natureza Jurídica**: Associação Privada
- **Endereço**: Rua Frei Felipe, S/N — Quadra 285 Lote 4 — Jardim Nova Barra do Garças, Barra do Garças / MT, CEP 78606-448
- **WhatsApp / Telefone**: (66) 98434-0745
- **E-mail Principal**: associacaoculturalciranda@gmail.com
- **Domínio Oficial**: `associacaoculturalciranda.com.br`
- **Crédito de Desenvolvimento**: Soluções Digitais — Rafaella Borges (Rafaella Luiza Sales)

---

## 🚀 Como Rodar o Projeto Localmente

1. Clone ou abra a pasta do projeto:
   ```bash
   cd associacao-ciranda
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse no seu navegador: `http://localhost:4321`

4. Para gerar o build de produção estático:
   ```bash
   npm run build
   ```

---

## 🌐 Guia de Publicação & Apontamento no Registro.br

### Passo 1: Subir o repositório no GitHub
1. Crie um novo repositório no seu GitHub chamado `associacao-ciranda`.
2. Faça o push do código local:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Site Ciranda Opção 2"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/associacao-ciranda.git
   git push -u origin main
   ```

### Passo 2: Conectar na Vercel
1. Acesse o seu painel na Vercel: `https://vercel.com/new?teamSlug=rafaellaluizasales-2707s-projects`
2. Clique em **Import** no repositório `associacao-ciranda`.
3. Mantenha as configurações padrão (Framework Preset: **Astro**) e clique em **Deploy**.

### Passo 3: Configurar o Domínio no Registro.br
1. No painel do projeto na Vercel, vá em **Settings > Domains**.
2. Adicione o domínio: `associacaoculturalciranda.com.br` e `www.associacaoculturalciranda.com.br`.
3. A Vercel exibirá as duas entradas de DNS necessárias:
   - **Tipo A**: `76.76.21.21` (para `@` ou domínio raiz `associacaoculturalciranda.com.br`)
   - **Tipo CNAME**: `cname.vercel-dns.com` (para `www`)
4. Acesse o painel do **Registro.br** com a conta da Juliane (Ju).
5. Vá em **Meus Domínios > associacaoculturalciranda.com.br > Configurar Endereçamento DNS**.
6. Insira ou edite as entradas **A** e **CNAME** indicadas pela Vercel e salve.
7. Em poucas horas, a Vercel emitirá o **certificado SSL gratuito (HTTPS)** e o site estará no ar!

---

## 📝 Guia de Atualização Simples (Para a Rafa e para a Ju)

Todo o conteúdo dinâmico do site foi desacoplado em arquivos JSON dentro da pasta `src/data/`. Não é necessário alterar códigos HTML/CSS complexos.

### 1. Adicionar ou Alterar Eventos na Agenda
Edite o arquivo `src/data/agenda.json`:
```json
{
  "id": "evt-04",
  "titulo": "Nome do Novo Espetáculo",
  "tipo": "Espetáculo Teatral",
  "data": "2026-12-10",
  "dataExibicao": "10 de Dezembro de 2026",
  "horario": "19:00",
  "local": "Teatro Municipal de Barra do Garças",
  "entrada": "Entrada Gratuita",
  "descricao": "Descrição breve da apresentação.",
  "status": "Confirmado",
  "destaqueHome": true
}
```

### 2. Adicionar Novas Peças / Projetos
Edite o arquivo `src/data/projetos.json` criando um novo objeto com título, sinopse, elenco, foto e direção.

### 3. Cadastrar ou Atualizar Oficinas
Edite o arquivo `src/data/oficinas.json` alterando o título, horários, vagas e status (ex.: "Inscrições Abertas" ou "Em Breve").

### 4. Adicionar Fotos na Galeria
Edite o arquivo `src/data/galeria.json` incluindo o link da imagem, título, categoria e legenda.

---

## 📋 Lista de Conteúdos Pendentes da Cliente (Checklist para a Ju)

Para substituir as marcas provisórias `[CONTEÚDO Ciranda]`, solicite à Ju os seguintes itens:
- [ ] Logotipo original vetorizado ou PNG em altíssima resolução.
- [ ] Texto definitivo da história e fundação da Ciranda para a página `/sobre`.
- [ ] Fotos em alta resolução das apresentações passadas e das oficinas.
- [ ] Lista com a ficha técnica completa (elenco, iluminação, figurino) dos espetáculos ativos.
- [ ] Datas e horários confirmados para o calendário da agenda.
- [ ] Depoimentos reais de alunos, artistas locais e espectadores de Barra do Garças.
