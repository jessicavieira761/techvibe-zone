# 🚀 TechVibe Zone — Vitrine de Hardware

Seja bem-vindo(a) ao repositório da **TechVibe Zone**, uma aplicação web interativa desenvolvida em **React** e **Vite**. Este projeto é uma vitrine virtual especializada em smartphones de última geração e notebooks de alta performance, criada como parte dos critérios de avaliação do curso de **Análise e Desenvolvimento de Sistemas (ADS)** do **IFES - Instituto Federal do Espírito Santo (Campus Ibatiba)**.

A aplicação utiliza conceitos modernos de arquitetura SPA (Single Page Application), gerenciamento de estado global e consumo de APIs REST de mercado.

---

## ⚙️ Funcionalidades e Etapas do Projeto

### 📌 Etapa 1 ao 3: Estrutura Base, Componentização e Rotas
* **Componentização Avançada**: Divisão da interface em múltiplos componentes reaproveitáveis e isolados na pasta `src/components`.
* **Propriedade `children`**: Implementação do componente `Layout.jsx` encapsulando os elementos centrais e a navegação do site.
* **Sistema de Rotas (`react-router-dom`)**: Navegação fluida entre a página Principal (**Home**), a institucional (**Sobre**) e o fluxo de autenticação.
* **Página de Detalhes**: Exibição individualizada das especificações de cada smartphone ou notebook, utilizando parâmetros de rota dinâmica (`/produto/:id`).
* **Estilização Autoral**: Identidade visual moderna em tons de roxo, totalmente responsiva e customizada com CSS puro (Flexbox e Grid Layout).

### 🔑 Etapa 4: Estado Global, Autenticação Avançada e Bônus
* **Gerenciamento de Estado Global (Context API)**: Criação do `AuthContext` (o "quadro de avisos" do app) para centralizar e distribuir os dados da sessão do usuário.
* **Consumo de API Real (BÔNUS IMPLEMENTADO 🏆)**: Substituição do login estático por uma integração assíncrona real (`POST /auth/login`) consumindo os servidores da **DummyJSON**.
* **Persistência de Sessão**: Utilização do `localStorage` para ler e salvar os tokens de autenticação, mantendo o usuário conectado mesmo após recarregar a página (`F5`).
* **Rotas Protegidas (`RotaPrivada.jsx`)**: Bloqueio de segurança que impede o acesso à página de **Minha Conta** por usuários não autenticados, redirecionando-os automaticamente para o Login.
* **Interface Dinâmica**: O botão do cabeçalho alterna dinamicamente entre "Entrar" e "Sair" com base no estado global da aplicação.

---

## 🔑 Credenciais de Teste (Para o Professor)

Para avaliar o fluxo de login real integrado à API da DummyJSON e pontuar os critérios de bônus, utilize a conta de testes oficial abaixo:

* **Usuário:** `emilys`
* **Senha:** `emilyspass`

> ⚠️ **Nota:** O sistema faz a validação direta no servidor externo. Caso digite dados incorretos, o formulário exibirá na tela a mensagem de erro retornada pela própria API.

---

## 📂 Estrutura de Arquivos Atualizada

A organização interna do código segue estritamente o padrão estrutural e modular para a arquitetura React:

```text
techvibe-zone/
├── src/
│   ├── components/
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── Cabecalho.jsx
│   │   ├── Layout.jsx
│   │   ├── ProdutoCard.jsx
│   │   ├── Rodape.jsx
│   │   ├── RotaPrivada.jsx
│   │   
│   ├── pages/
│   │   ├── Detalhe.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MinhaConta.jsx
│   │   ├── NaoEncontrado.jsx
│   │   └── Sobre.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── README.md

## 💻 Tecnologias Utilizadas
**React 18** (Biblioteca Javascript baseada em componentes para interfaces SPA)

**Vite** (Build tool e servidor de desenvolvimento ultra veloz)

**React Router Dom v6** (Gerenciamento de rotas e navegação interna)

**DummyJSON API** (Serviço REST externo para simulação de autenticação via Token JWT)

**HTML5 & CSS3** (Estruturação semântica e estilização responsiva com Flexbox/Grid)

**Git & GitHub** (Controle de versão e hospedagem do código)

## 🚀 Como Executar o Projeto Localmente
Caso queira clonar este repositório e rodar a aplicação em sua máquina:

**1. Clone o repositório:**
git clone [https://github.com/jessicavieira761/techvibe-zone]

**2.Acesse a pasta do projeto:**

cd techvibe-zone

**3.Instale as dependências necessárias:**
npm install

**4.Inicie o servidor de desenvolvimento local:**
npm run dev

**5.Abra o link gerado no terminal** (geralmente http://localhost:5173/) no seu navegador.

## 👩‍💻 Desenvolvedora
**Nome:** Jéssica Vieira

**Curso:** Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)

**Instituição:** Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo (IFES - Campus Ibatiba)