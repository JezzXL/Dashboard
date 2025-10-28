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
- ⚙️ **Página de Configurações** - Gestão completa de perfil, segurança, notificações e sistema
- 📱 **Design Responsivo** - Adaptado para desktop, tablet e mobile
- 🎨 **UI Moderna** - Interface limpa e intuitiva com Tailwind CSS v4
- 🔍 **Sistema de Busca** - Busca global no header
- 📈 **Dashboard Analytics** - Métricas e KPIs em tempo real
- ⚡ **Performance Otimizada** - Build rápido com Vite
- 🎭 **Ícones Lucide** - Biblioteca moderna e leve de ícones
- 🔐 **Autenticação 2FA** - Suporte para autenticação de dois fatores
- 🔔 **Sistema de Notificações** - Preferências personalizáveis de notificações

## 🖼️ Preview

### Dashboard Principal
Visualização de métricas principais, KPIs e gráficos de vendas com estatísticas em tempo real.

### Gerenciamento de Usuários
Sistema completo de CRUD com tabela interativa, filtros avançados e ações de edição/exclusão.

### Página de Configurações
Interface completa com 4 seções principais:
- **Perfil**: Gerenciamento de informações pessoais e avatar
- **Segurança**: Alteração de senha e autenticação 2FA
- **Notificações**: Preferências de e-mail, push, SMS e relatórios
- **Sistema**: Configurações de idioma, fuso horário e formato de data

### Modo Dark
Interface totalmente adaptada para tema escuro, reduzindo fadiga visual em todos os componentes.

### Responsividade
Layout adaptável para todos os dispositivos com sidebar retrátil e navegação otimizada para mobile.

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
git clone https://github.com/JezzXL/Dashboard.git

# Entre no diretório
cd dashboard

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
│   ├── Sidebar.tsx     # Menu lateral de navegação
│   ├── MetricsCards.tsx # Cards de métricas do dashboard
│   ├── SalesChart.tsx  # Gráfico de vendas
│   └── UsersTable.tsx  # Tabela de usuários
├── pages/              # Páginas da aplicação
│   ├── Dashboard.tsx   # Página principal com métricas
│   ├── Users.tsx       # Gerenciamento de usuários
│   ├── Analytics.tsx   # Análise de dados e gráficos
│   └── Settings.tsx    # Configurações completas
├── types/              # Definições de tipos TypeScript
│   └── index.ts        # Interfaces e tipos globais
├── App.tsx             # Componente raiz com roteamento
├── main.tsx            # Entry point da aplicação
└── index.css           # Estilos globais e Tailwind
```

## 🎨 Componentes Principais

### Dashboard
- Cards de métricas com indicadores de mudança percentual
- Gráfico de vendas mensais interativo
- Estatísticas em tempo real
- Resumo de usuários recentes

### Users
- Tabela de usuários com status e roles
- Filtros por role e status
- Sistema de busca integrado
- Ações de edição e exclusão com confirmação
- Paginação

### Analytics
- Gráficos de linha e barra para análise de tendências
- Comparação de períodos
- Métricas detalhadas e KPIs
- Visualização de crescimento e conversão

### Settings
Página completa de configurações com 4 abas:

#### 🧑 Perfil
- Upload e gerenciamento de avatar
- Edição de nome, e-mail e telefone
- Campo de biografia personalizado
- Validação de campos

#### 🔐 Segurança
- Alteração de senha com validação
- Toggle de visualização de senha
- Autenticação de dois fatores (2FA)
- Confirmação de senha

#### 🔔 Notificações
- Notificações por e-mail
- Notificações push no navegador
- Alertas SMS para segurança
- Relatórios semanais e mensais
- Toggle switches animados

#### ⚙️ Sistema
- Seleção de idioma (PT-BR, EN-US, ES-ES)
- Configuração de fuso horário
- Formato de data personalizável
- Zona de perigo com exclusão de conta

## 🔧 Configuração

### Tema Dark/Light
O tema é persistido no localStorage e pode ser alternado através do botão no header. A preferência do sistema é detectada automaticamente na primeira visita.

```typescript
// Exemplo de uso do tema
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") as "light" | "dark";
  if (savedTheme) {
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }
}, []);
```

### Tailwind CSS v4
Configurado no `src/index.css` com suporte nativo a dark mode:

```css
@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));
```

### Responsividade
- **Mobile**: < 768px - Sidebar retrátil com overlay
- **Tablet**: 768px - 1024px - Layout adaptado
- **Desktop**: > 1024px - Sidebar fixa e layout expandido

## 📝 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Cria build de produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
```

## 🎯 Roadmap

- [ ] Integração com API REST
- [ ] Autenticação real com JWT
- [ ] Sistema de permissões e roles
- [ ] Upload real de imagens
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Dashboard customizável por usuário
- [ ] Notificações em tempo real com WebSocket
- [ ] Modo de acessibilidade
- [ ] Testes unitários e E2E
- [ ] Internacionalização (i18n)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrão de Commits
Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: alterações na documentação
style: formatação, ponto e vírgula, etc
refactor: refatoração de código
test: adição de testes
chore: atualização de dependências, etc
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Davyd Willian**
- GitHub: [@JezzXL](https://github.com/JezzXL)
- LinkedIn: [Davyd Willian](https://www.linkedin.com/in/davydwillianp/)

## 🙏 Agradecimentos

- [React](https://react.dev/) - Biblioteca JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide Icons](https://lucide.dev/) - Ícones modernos
- [Recharts](https://recharts.org/) - Biblioteca de gráficos
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática

## 📊 Estatísticas do Projeto

- **Componentes**: 10+
- **Páginas**: 4 (Dashboard, Users, Analytics, Settings)
- **Linhas de código**: ~2.000+
- **Tecnologias**: 8+
- **Ícones**: 20+

---

<div align="center">
  
⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

[![GitHub stars](https://img.shields.io/github/stars/JezzXL/Dashboard?style=social)](https://github.com/JezzXL/Dashboard/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/JezzXL/Dashboard?style=social)](https://github.com/JezzXL/Dashboard/network/members)

</div>

---

**Desenvolvido com ❤️ por [Davyd Willian](https://github.com/JezzXL)**