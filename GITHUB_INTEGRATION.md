# Funcionalidade de Repositórios GitHub

## Descrição
Esta funcionalidade permite listar automaticamente seus repositórios do GitHub no portfólio, com paginação de 5 itens por página.

## Funcionalidades Implementadas

### 1. Hook useGitHubRepos
- Busca repositórios do GitHub via API
- Filtra repositórios públicos e não forkados
- Implementa paginação com 5 itens por página
- Retorna dados formatados para o portfólio

### 2. Componente GitHubProjectCard
- Exibe informações dos repositórios do GitHub
- Mostra estrelas, forks e data de atualização
- Links para código fonte e demo (se disponível)
- Design responsivo

### 3. Componente de Paginação
- Navegação entre páginas
- Mostra informações sobre itens exibidos
- Botões anterior/próximo
- Números de páginas com reticências para muitas páginas

### 4. Configuração
Arquivo `src/data/config.json`:
```json
{
  "github": {
    "username": "LuizHenr1que",
    "excludeRepos": [
      "LuizHenr1que",
      "portfolio-v3"
    ],
    "featuredRepos": [
      "ayerlLol",
      "Menu",
      "bikcraft"
    ]
  }
}
```

## Como Usar

### Na lista de projetos
O componente `ProjectList` agora possui um botão para alternar entre:
- **Projetos Destacados**: Projetos manuais com imagens personalizadas
- **Todos os Repositórios**: Repositórios do GitHub com paginação

### Configuração do username
Edite o arquivo `src/data/config.json` e altere o campo `username` para seu usuário do GitHub.

### Excluir repositórios
Adicione os nomes dos repositórios que não deseja exibir no array `excludeRepos`.

## Componentes Criados

1. `src/hooks/useGitHubRepos.js` - Hook para buscar repositórios
2. `src/Components/ProjetosList/GitHubProjectCard.jsx` - Card dos repositórios
3. `src/Components/Pagination/Pagination.jsx` - Componente de paginação
4. `src/Components/ProjetosList/GitHubReposPreview.jsx` - Prévia para página inicial
5. `src/data/config.json` - Configurações

## API GitHub
A funcionalidade usa a API pública do GitHub:
- Endpoint: `https://api.github.com/users/{username}/repos`
- Não requer autenticação
- Limite de 60 requisições por hora para usuários não autenticados

## Customização

### Alterar número de itens por página
No componente `ProjectList`, altere o parâmetro do hook:
```jsx
const { ... } = useGitHubRepos(config.github.username, 10); // 10 itens por página
```

### Personalizar aparência
Edite os arquivos CSS ou as classes Tailwind nos componentes.
