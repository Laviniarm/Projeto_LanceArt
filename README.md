# ProjetoLanceArt

Este é um projeto desenvolvido para a disciplina de Programação Web 1 do Instituto Federal da Paraíba (IFPB). O projeto consiste em uma aplicação Angular que permite a inserção e listagem de itens em um sistema de galeria de arte, simulando um e-commerce. É possível adicionar novas artes, alterar, remover e visualizar a lista de artes cadastradas.

## Funcionalidades

- **Inserção de Artes**: Os usuários podem adicionar novas artes à galeria, incluindo detalhes como título, autor e preço.
- **Listagem de Artes**: Todas as artes adicionadas são listadas em uma página dedicada, onde é possível visualizar os detalhes de cada item.
- **Edição de Arte**: É possível alterar o título, artista e preço, não sendo possível editar apenas o ID da arte.
- **Backend Simulado com json-server**: Os dados das artes são armazenados e servidos usando o json-server, permitindo simulação completa de um backend.

## Tecnologias Utilizadas

- **Angular**: Framework utilizado para a construção da interface e gerenciamento do estado da aplicação.
- **Angular Material**: Biblioteca de componentes para Angular, utilizada para criar uma interface de usuário agradável e responsiva.
- **json-server**: Ferramenta usada para simular um backend, armazenando e servindo os dados em formato JSON.

## Estrutura do Projeto

O projeto segue uma estrutura básica de um aplicativo Angular, com componentes dedicados para a inserção e listagem de artes.

- **Componente de Inserção**: Permite que os usuários adicionem novas artes à galeria.
- **Componente de Listagem**: Exibe todas as artes disponíveis na galeria.
- **Componente de Card**: É possível visualizar a arte, editar ou remove-la.
- **Serviços**: Utilizados para comunicação com o json-server e gerenciamento dos dados.
  Aqui está o trecho modificado do README para refletir a alteração que fizemos, onde basta rodar `npm start` para iniciar tanto o `json-server` quanto o Angular:

---

## Como Executar

1. **Clonar o Repositório**: Clone o repositório do GitHub em sua máquina local.
   ```bash
   git clone https://github.com/Laviniarm/Projeto_LanceArt
   ```
2. **Instalar Dependências**: Navegue até o diretório do projeto e instale as dependências necessárias.
   ```bash
   cd Projeto_LanceArt
   npm install
   ```
3. **Iniciar a Aplicação**: Inicie tanto o `json-server` quanto a aplicação Angular simultaneamente.
   ```bash
   npm start
   ```
4. **Acessar a Aplicação**: Abra o navegador e acesse `http://localhost:4200`.

## Links Importantes

- **Link do Stackblitz**: [Stackblitz Project](https://stackblitz.com/~/github.com/Laviniarm/Projeto_LanceArt)
- **Link do GitHub**: [GitHub Repository](https://github.com/Laviniarm/Projeto_LanceArt)
