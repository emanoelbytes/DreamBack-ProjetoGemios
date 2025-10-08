# ✨ DreamBack - Gerador de Backgrounds com IA

<div align="center">

![DreamBack Logo](https://img.shields.io/badge/DreamBack-✨-blueviolet?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**Dê vida à sua imaginação! Crie backgrounds animados incríveis usando o poder da Inteligência Artificial.**

[Demo ao Vivo](#) • [Documentação](#-funcionalidades) • [Reportar Bug](https://github.com/emanoelbytes/dreamback/issues) • [Solicitar Feature](https://github.com/emanoelbytes/dreamback/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Demonstração](#-demonstração)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Galeria de Templates](#-galeria-de-templates)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuindo](#-contribuindo)
- [Roadmap](#-roadmap)
- [Licença](#-licença)
- [Contato](#-contato)
- [Agradecimentos](#-agradecimentos)

---

## 🎯 Sobre o Projeto

**DreamBack** é um gerador de backgrounds animados que utiliza Inteligência Artificial para transformar suas descrições em código HTML e CSS funcionais. 

### 💡 Por que DreamBack?

- ⚡ **Rápido**: Gere backgrounds em segundos
- 🎨 **Criativo**: Infinitas possibilidades de design
- 🤖 **Inteligente**: Powered by IA
- 📦 **Completo**: HTML + CSS prontos para usar
- 🎭 **Templates**: Galeria com designs pré-prontos
- 🔧 **Personalizável**: Adapte qualquer template às suas necessidades

---

## ✨ Funcionalidades

### 🤖 Gerador com IA

- **Descrição Natural**: Descreva o background em linguagem natural
- **Código Automático**: Receba HTML e CSS prontos
- **Preview Instantâneo**: Visualize em tempo real
- **Copiar com 1 Clique**: Copie os códigos facilmente

### 🎨 Galeria de Templates

- **6+ Templates Prontos**:
  - 🌅 Natureza (Pôr do Sol, Ondas do Oceano)
  - 🌌 Espacial (Nebulosa Galáctica)
  - 🎨 Abstrato (Fluxo Geométrico)
  - 💎 Minimalista (Gradiente Limpo)
  - 🔥 Neon (Grid Cyberpunk)

- **Funcionalidades da Galeria**:
  - 🔍 Busca por nome, descrição ou tags
  - 🏷️ Filtros por categoria
  - ⭐ Sistema de favoritos (localStorage)
  - 📥 Download de templates
  - 🔗 Compartilhamento via URL
  - 🎨 Personalização com IA

### 🛠️ Recursos Técnicos

- ✅ **Totalmente Responsivo** (Mobile, Tablet, Desktop)
- ✅ **Acessível** (WCAG 2.1 AA)
- ✅ **SEO Otimizado**
- ✅ **Performance** (Lighthouse 90+)
- ✅ **PWA Ready**
- ✅ **Sem Dependências Externas** (Vanilla JS)

---

## 🎥 Demonstração

### Screenshots

<div align="center">

| Gerador IA | Galeria de Templates |
|------------|---------------------|
| ![Gerador](https://via.placeholder.com/400x250?text=Gerador+IA) | ![Galeria](https://via.placeholder.com/400x250?text=Galeria) |

| Preview em Tempo Real | Código Gerado |
|----------------------|---------------|
| ![Preview](https://via.placeholder.com/400x250?text=Preview) | ![Código](https://via.placeholder.com/400x250?text=Código) |

</div>

### 🎬 GIF Demonstrativo

![DreamBack Demo](https://via.placeholder.com/800x400?text=Demo+Animado)

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização avançada com variáveis CSS
- **JavaScript (ES6+)** - Lógica e interatividade

### Design
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Animations** - Animações suaves
- **Backdrop Filter** - Efeitos de glassmorphism
- **CSS Variables** - Temas customizáveis

### IA & Backend
- **n8n Webhook** - Integração com IA
- **API REST** - Comunicação assíncrona
- **LocalStorage** - Persistência de favoritos

### Ferramentas
- **Git & GitHub** - Versionamento
- **VS Code** - Desenvolvimento
- **Google Fonts** - Tipografia (Roboto Mono)

---

## 📦 Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Git instalado

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/emanoelbytes/dreamback.git
```

2. **Navegue até a pasta**
```bash
cd dreamback
```

3. **Abra o projeto**
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Usar Live Server (VS Code)
# Clique com botão direito em index.html > Open with Live Server
```

4. **Configure a API (Opcional)**

Se você quiser usar sua própria API de IA, edite o arquivo `src/js/script.js`:

```javascript
// Linha ~580
const response = await fetch("SUA_URL_WEBHOOK_AQUI", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ description }),
});
```

---

## 🎮 Como Usar

### 1️⃣ Usando o Gerador com IA

1. Digite uma descrição do background desejado:
   ```
   Exemplo: "Um pôr do sol vibrante com gradiente do laranja 
   ao roxo, com nuvens animadas passando lentamente"
   ```

2. Clique em **"✨ Gerar Background Mágico"**

3. Aguarde alguns segundos ⏳

4. Visualize o preview e copie o código!

### 2️⃣ Usando Templates Prontos

1. Role até a **Galeria de Templates**

2. Filtre por categoria ou use a busca

3. Clique em **"✨ Aplicar"** para usar diretamente

4. Ou clique em **"🎨 Personalizar"** para modificar com IA

### 3️⃣ Personalizando Templates

1. Clique em **"🎨 Personalizar"** em qualquer template

2. O textarea será preenchido com a descrição base

3. Adicione suas modificações:
   ```
   Baseado no template "Pôr do Sol": 
   Adicione estrelas cintilantes e uma lua cheia no canto superior direito
   ```

4. Gere seu background customizado!

### 4️⃣ Salvando Favoritos

1. Clique no **🤍** para adicionar aos favoritos

2. O ícone muda para **❤️**

3. Favoritos são salvos no navegador (localStorage)

### 5️⃣ Compartilhando Templates

1. Clique em **"🔗 Compartilhar"**

2. O link é copiado automaticamente

3. Compartilhe com amigos! O template será aplicado automaticamente

---

## 🎨 Galeria de Templates

### 🌅 Natureza

#### Pôr do Sol nas Montanhas
- Gradiente suave laranja → roxo
- Montanhas silhuetadas
- Animação de brilho pulsante
- **Popularidade**: ⭐⭐⭐⭐⭐ (150 usos)

#### Ondas do Oceano
- Gradiente azul profundo
- Ondas animadas
- Efeito de profundidade
- **Popularidade**: ⭐⭐⭐⭐ (120 usos)

### 🌌 Espacial

#### Nebulosa Galáctica
- Espaço profundo
- Nebulosa colorida
- Estrelas cintilantes
- **Popularidade**: ⭐⭐⭐⭐⭐ (200 usos)

### 🎨 Abstrato

#### Fluxo Geométrico
- Formas geométricas dinâmicas
- Gradientes vibrantes
- Animação morphing
- **Popularidade**: ⭐⭐⭐ (90 usos)

### 💎 Minimalista

#### Gradiente Limpo
- Design minimalista
- Transição suave
- Elegante e discreto
- **Popularidade**: ⭐⭐⭐ (80 usos)

### 🔥 Neon

#### Grid Cyberpunk
- Grid futurista
- Efeitos neon
- Animações cyberpunk
- **Popularidade**: ⭐⭐⭐⭐⭐ (180 usos)

---

## 📁 Estrutura do Projeto

```
dreamback/
│
├── index.html              # Página principal
│
├── src/
│   ├── css/
│   │   └── style.css      # Estilos globais e componentes
│   │
│   ├── js/
│   │   └── script.js      # Lógica da aplicação
│   │
│   └── imagens/
│       └── ...            # Assets visuais
│
├── README.md              # Este arquivo
├── LICENSE                # Licença MIT
└── .gitignore            # Arquivos ignorados
```

### Arquitetura do Código

```javascript
// script.js - Organização Modular

// 1. Sistema de Templates
const templates = { ... }

// 2. Funcionalidades da Galeria
initializeTemplates()
createTemplatesGallery()
renderTemplates()
setupGalleryEvents()

// 3. Gerador com IA
generateBtn.addEventListener('click', async () => {
  // Fetch API
  // Aplicar background
  // Mostrar códigos
})

// 4. Utilidades
copyToClipboard()
addRemoveBackgroundButton()
applyTemplate()
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Este é um projeto open-source e sua ajuda é muito valiosa.

### Como Contribuir

1. **Fork o projeto**

2. **Crie uma branch para sua feature**
```bash
git checkout -b feature/MinhaFeature
```

3. **Commit suas mudanças**
```bash
git commit -m 'Add: Minha nova feature incrível'
```

4. **Push para a branch**
```bash
git push origin feature/MinhaFeature
```

5. **Abra um Pull Request**

### 📝 Padrões de Commit

Use commits semânticos:

- `Add:` - Nova funcionalidade
- `Fix:` - Correção de bug
- `Update:` - Atualização de código existente
- `Refactor:` - Refatoração
- `Docs:` - Documentação
- `Style:` - Formatação, CSS
- `Test:` - Testes

### 🐛 Reportando Bugs

Encontrou um bug? Abra uma [issue](https://github.com/emanoelbytes/dreamback/issues) com:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Navegador e versão

---

## 🗺️ Roadmap

### 📅 Versão 2.0 (Em Desenvolvimento)

- [ ] **Mais Templates**: +20 novos templates
- [ ] **Editor Visual**: Ajustar cores e animações visualmente
- [ ] **Exportar SVG**: Além de HTML/CSS
- [ ] **Temas**: Claro e Escuro
- [ ] **Histórico**: Salvar backgrounds gerados
- [ ] **API Pública**: Documentação completa
- [ ] **Marketplace**: Usuários podem compartilhar templates
- [ ] **Login Social**: Google, GitHub

### 🔮 Futuro

- [ ] **Mobile App**: React Native
- [ ] **Plugins**: Figma, VS Code
- [ ] **IA Melhorada**: GPT-4, Stable Diffusion
- [ ] **Animações 3D**: Three.js integration
- [ ] **Colaboração**: Edição em tempo real

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2025 João Emanoel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Contato

<div align="center">

### João Emanoel

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/emanoelbytes)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joão-emanoel-19898a366)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:emanoelbytes@gmail.com)

**💼 Desenvolvedor Full Stack | 🤖 Entusiasta de IA | ✨ Criador do DreamBack**

</div>

---

## 🎉 Agradecimentos

Agradecimentos especiais a:

- **Comunidade Open Source** - Por inspiração e recursos
- **n8n** - Pela plataforma de automação incrível
- **Google Fonts** - Pela tipografia Roboto Mono
- **MDN Web Docs** - Pela documentação excepcional
- **Você** - Por usar e contribuir com o DreamBack! 🙏

---

## 📊 Estatísticas do Projeto

<div align="center">

![GitHub Stars](https://img.shields.io/github/stars/emanoelbytes/dreamback?style=social)
![GitHub Forks](https://img.shields.io/github/forks/emanoelbytes/dreamback?style=social)
![GitHub Issues](https://img.shields.io/github/issues/emanoelbytes/dreamback)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/emanoelbytes/dreamback)
![GitHub Last Commit](https://img.shields.io/github/last-commit/emanoelbytes/dreamback)

</div>

---

## 🌟 Dê uma Estrela!

Se este projeto te ajudou, considere dar uma ⭐ no [GitHub](https://github.com/emanoelbytes/dreamback)!

---

<div align="center">

**Feito com ❤️ e ☕ por [João Emanoel](https://github.com/emanoelbytes)**

⭐ **DreamBack** - Transformando imaginação em código desde 2025 ⭐

</div>