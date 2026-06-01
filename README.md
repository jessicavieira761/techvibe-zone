# 🚀 TechVibe Zone — Vitrine de Hardware

Seja bem-vindo(a) ao repositório da **TechVibe Zone**, uma aplicação web interativa desenvolvida em **React** e **Vite**. Este projeto é uma vitrine virtual de produtos de tecnologia e hardware criada como parte dos critérios de avaliação do curso de **Análise e Desenvolvimento de Sistemas (ADS)** do **IFES - Instituto Federal do Espírito Santo**.

Este projeto será evoluído de forma incremental ao longo das próximas semanas letivas.

---

## 📌 Etapa 1: Estrutura Base e Componentização (Concluída)

Nesta primeira fase, o foco principal foi a criação da fundação da interface utilizando os conceitos essenciais do ecossistema React, garantindo um design exclusivo e componentização modular.

### 🛠️ Requisitos Técnicos Implementados:
* **Criação do Projeto**: Estruturado do zero utilizando o instalador oficial do `Vite` com `React`.
* **Componentização Avançada**: Divisão da interface em múltiplos componentes reaproveitáveis e isolados na pasta `src/components`.
* **Uso de Props**: Passagem de dados customizados dinamicamente entre componentes (como o título da loja enviado ao cabeçalho).
* **Propriedade `children`**: Implementação obrigatória do componente `Layout.jsx` encapsulando os elementos centrais do site.
* **Renderização de Listas**: Mapeamento (`.map`) de um array exclusivo com mais de 4 produtos estruturados em formato de dados.
* **Renderização Condicional**: Exibição seletiva do selo de *"Entrega Grátis"* baseado nas propriedades lógicas de cada produto.
* **Estilização Exclusiva**: Identidade visual autoral voltada para o tema claro com detalhes em roxo e rodapé contrastante, totalmente responsivo para dispositivos móveis.

---

## 📂 Estrutura de Arquivos

A organização interna do código segue rigorosamente o padrão modular exigido para a arquitetura do projeto:

```text
techvibe-zone/
├── src/
│   ├── components/
│   │   ├── Botao.jsx
│   │   ├── Cabecalho.jsx
│   │   ├── Layout.jsx
│   │   ├── ProdutoCard.jsx
│   │   ├── Rodape.jsx
│   │   ├── Selo.jsx
│   │   └── Vitrine.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── README.md
```

## 💻 Tecnologias Utilizadas
* **React** (Biblioteca Javascript para construção de interfaces)

* **Vite** (Build tool e servidor de desenvolvimento ultra veloz)

* **HTML5 & CSS3** (Estruturação de Grid Layout e Flexbox responsivos)

* **Git & GitHub** (Controle de versão e hospedagem do código)

---

## 🚀 Como Executar o Projeto Localmente
Caso queira clonar este repositório e rodar a aplicação em sua máquina:

* **1.Clone o repositório:**
git clone [https://github.com/SEU_USUARIO_DO_GITHUB/techvibe-zone.git](https://github.com/SEU_USUARIO_DO_GITHUB/techvibe-zone.git)

* **2.Acesse a pasta do projeto:**
cd techvibe-zone

* **3.Instale as dependências necessárias:**
nmp install

* **4.Inicie o servidor de desenvolvimento local:**
npm run dev

* **4.Abra o link** gerado no terminal (geralmente http://localhost:5173/) no seu navegador.

## 👩‍💻 Desenvolvedora
* **Nome:** Jéssica Vieira

* **Curso:** Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)

* **Instituição:** Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo (IFES)
