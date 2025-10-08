# 🎯 Dashboard Admin

Dashboard administrativo completo e responsivo desenvolvido com React 19, TypeScript e Tailwind CSS v4. Interface moderna com suporte a tema dark/light, visualização de métricas em tempo real, gráficos interativos e sistema de gerenciamento de usuários.

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite&logoColor=white)

## ✨ Features

- 🌓 **Tema Dark/Light** - Alternância suave entre temas com persistência no localStorage
- 📊 **Gráficos Interativos** - Visualização de dados com Recharts
- 👥 **Gestão de Usuários** - CRUD completo de usuários com filtros e busca
- 📱 **Design Responsivo** - Adaptado para desktop, tablet e mobile
- 🎨 **UI Moderna** - Interface limpa e intuitiva com Tailwind CSS v4
- 🔍 **Sistema de Busca** - Busca global no header
- 📈 **Dashboard Analytics** - Métricas e KPIs em tempo real
- ⚡ **Performance Otimizada** - Build rápido com Vite
- 🎭 **Ícones Lucide** - Biblioteca moderna e leve de ícones

## 🖼️ Preview

### Dashboard Principal
Visualização de métricas principais, KPIs e gráficos de vendas.

### Modo Dark
Interface totalmente adaptada para tema escuro, reduzindo fadiga visual.

### Responsividade
Layout adaptável para todos os dispositivos com sidebar retrátil.

## 🛠️ Tecnologias

### Core
- **React 19.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.9** - Superset JavaScript com tipagem estática
- **Vite 7.1** - Build tool rápida e moderna

### Styling
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Lucide React** - Ícones SVG modernos e customizáveis

### Routing & Data
- **React Router DOM 7.9** - Roteamento declarativo
- **Recharts 3.2** - Biblioteca de gráficos baseada em React

### Dev Tools
- **ESLint** - Linting e análise de código
- **TypeScript ESLint** - Regras de lint específicas para TypeScript

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/JezzXL/Darshboard.git

# Entre no diretório
cd darshboard

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gera build otimizado
npm run build

# Preview do build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho com busca e tema
│   └── Sidebar.tsx     # Menu lateral de navegação
├── pages/              # Páginas da aplicação
│   ├── Dashboard.tsx   # Página principal com métricas
│   ├── Users.tsx       # Gerenciamento de usuários
│   ├── Analytics.tsx   # Análise de dados e gráficos
│   └── Settings.tsx    # Configurações (em desenvolvimento)
├── types/              # Definições de tipos TypeScript
│   └── index.ts        # Interfaces e tipos globais
├── App.tsx             # Componente raiz com roteamento
├── main.tsx            # Entry point da aplicação
└── index.css           # Estilos globais e Tailwind
```

## 🎨 Componentes Principais

### Dashboard
- Cards de métricas com indicadores de mudança
- Gráfico de vendas mensais
- Estatísticas em tempo real

### Users
- Tabela de usuários com status
- Filtros por role e status
- Sistema de busca
- Ações de edição e exclusão

### Analytics
- Gráficos de linha para análise de tendências
- Comparação de períodos
- Métricas detalhadas

## 🔧 Configuração

### Tema Dark/Light
O tema é persistido no localStorage e pode ser alternado através do botão no header. A preferência do sistema pode ser detectada automaticamente.

### Tailwind CSS v4
Configurado no `src/index.css` com suporte nativo a dark mode:

```css
@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));
```

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Cria build de produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Seu Nome
- GitHub: [@JezzXL](https://github.com/JezzXL)
- LinkedIn: [Davyd Willian](https://www.linkedin.com/in/davydwillianp/)

## 🙏 Agradecimentos

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

---
⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
