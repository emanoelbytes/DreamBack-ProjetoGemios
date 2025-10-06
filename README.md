# 🎨 DreamBack - Gerador de Fundos Mágicos

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> ✨ Dê vida à sua imaginação! Crie fundos únicos e impressionantes com o poder da IA. Basta descrever sua ideia e veja a magia ganhar forma diante dos seus olhos.

## 📋 Sobre o Projeto

O **DreamBack** é uma aplicação web interativa que permite aos usuários gerar backgrounds personalizados usando inteligência artificial. Com uma interface intuitiva e moderna, os usuários podem descrever o fundo desejado em texto e receber código HTML/CSS pronto para uso.

## 🚀 Funcionalidades

- **Interface Intuitiva**: Design moderno e responsivo com tema escuro
- **Geração por Descrição**: Digite uma descrição e deixe a IA criar o fundo
- **Preview em Tempo Real**: Visualize o resultado instantaneamente
- **Código Pronto**: Receba HTML e CSS gerados automaticamente
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Acessibilidade**: Interface acessível com suporte a screen readers

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: CSS Grid, Flexbox, Variáveis CSS
- **Tipografia**: Roboto Mono (Google Fonts)
- **Responsividade**: Mobile-first approach
- **Integração**: Preparado para API n8n

## 📁 Estrutura do Projeto

```
DreamBack-ProjetoGemios/
├── index.html              # Página principal
├── src/
│   ├── css/
│   │   └── style.css       # Estilos principais
│   ├── js/
│   │   └── script.js       # Lógica da aplicação
│   └── imagens/
│       └── IMgem-do-projeeto- gemios.png  # Background do projeto
├── README.md               # Documentação
└── LICENSE                 # Licença do projeto
```

## 🎯 Como Usar

1. **Abra o arquivo `index.html`** em seu navegador
2. **Descreva o fundo desejado** no campo de texto
   - Exemplo: "um gradiente azul suave que vai de vinho para azul escuro"
3. **Clique em "Gerar Background Mágico"**
4. **Aguarde o processamento** (indicador de carregamento)
5. **Visualize o resultado** na área de preview
6. **Copie o código** HTML/CSS gerado

## 🔧 Instalação e Configuração

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Instalação Local

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/DreamBack-ProjetoGemios.git
   cd DreamBack-ProjetoGemios
   ```

2. **Abra diretamente**:
   - Simplesmente abra o arquivo `index.html` no navegador
   - Ou use um servidor local para melhor experiência

3. **Servidor Local (recomendado)**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

## 🎨 Customização

### Cores e Tema
O projeto usa variáveis CSS para fácil customização. Edite o arquivo `src/css/style.css`:

```css
:root {
    --bg-body: #0d0d0f;           /* Cor de fundo principal */
    --text-title: #ffffff;        /* Cor dos títulos */
    --btn-bg: linear-gradient(...); /* Gradiente do botão */
    /* ... outras variáveis */
}
```

### Integração com API
Para conectar com uma API real, edite o arquivo `src/js/script.js`:

```javascript
// Descomente e configure a URL da sua API
const response = await fetch("SUA-URL-DA-API-AQUI", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description }),
});
```

## 📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first:

- **Mobile**: Layout em coluna única, botões grandes
- **Tablet**: Grid responsivo de 2 colunas
- **Desktop**: Layout otimizado com larguras controladas
- **Telas Grandes**: Limitação de largura máxima para melhor legibilidade

## ♿ Acessibilidade

- **Semântica HTML**: Uso correto de elementos semânticos
- **ARIA Labels**: Suporte a screen readers
- **Contraste**: Cores com contraste adequado
- **Navegação**: Suporte a navegação por teclado
- **Foco**: Indicadores visuais de foco

## 🚧 Status do Projeto

- ✅ Interface completa e responsiva
- ✅ Lógica JavaScript implementada
- ✅ Sistema de loading/feedback
- 🔄 Integração com API (pendente configuração)
- 🔄 Tratamento de erros (em desenvolvimento)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

## 📄 Licença

Este projeto está sob a licença especificada no arquivo `LICENSE`. Veja o arquivo para mais detalhes.

## 👨‍💻 Autor

**Projeto Gemios** - Desenvolvimento de soluções criativas com IA

## 🔗 Links Úteis

- [Documentação HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Documentação CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Documentação JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Google Fonts - Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**

