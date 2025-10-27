# Skate Story - Landing Page (HTML, CSS, Gulp)

Landing page responsiva para o lançamento do jogo Skate Story em 8 de dezembro de 2025.

## Características

- ✨ Design responsivo (mobile, tablet, desktop)
- ⏱️ Contador regressivo em tempo real
- 🎨 Tema visual vibrante com gradientes
- 📱 Totalmente otimizado para todos os dispositivos
- 🚀 Build otimizado com Gulp
- 🎯 Sem dependências de frameworks (HTML, CSS, JS puro)

## Estrutura do Projeto

```
skate-story-html/
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── countdown.js
│   ├── images/
│   │   └── (imagens do jogo)
│   └── index.html
├── dist/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.html
├── gulpfile.js
├── package.json
├── tailwind.config.js
└── README.md
```

## Instalação

1. Clone ou extraia o projeto
2. Instale as dependências:

```bash
npm install
```

ou com pnpm:

```bash
pnpm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento com live reload:

```bash
npm run dev
```

ou

```bash
pnpm dev
```

O servidor estará disponível em `http://localhost:3000`

## Build para Produção

Para criar a versão otimizada para produção:

```bash
npm run build
```

ou

```bash
pnpm build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## Deploy no Vercel

1. Faça push do projeto para GitHub
2. Conecte o repositório no Vercel
3. Configure o comando de build: `npm run build`
4. Configure o diretório de output: `dist`

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos com Tailwind CSS
- **JavaScript Vanilla** - Contador regressivo
- **Gulp** - Task runner para build
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Compatibilidade com navegadores
- **CSSNano** - Minificação de CSS
- **Terser** - Minificação de JavaScript

## Funcionalidades

- Contador regressivo que atualiza a cada segundo
- Botão "Adicionar à Lista de Desejos" que abre a página do Steam
- Botão "Saiba Mais" com scroll suave
- Galeria de imagens com efeito hover
- Seção de requisitos de sistema
- Footer com links para Steam e Devolver Digital

## Responsividade

- **Mobile** (até 640px): Layout otimizado para telas pequenas
- **Tablet** (641px - 1024px): Layout intermediário
- **Desktop** (1025px+): Layout completo com múltiplas colunas

## Autor

Desenvolvido para o lançamento do Skate Story

## Licença

MIT

