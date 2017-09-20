Projeto Desafio Frontend RD - Phellipe Perin


1º Passo - Entender o problema

Domínio: Google Books
  - Autores
  - Categorias
  - Data de Publicação
  - Descrição
  - Imagem
  - Número de Páginas
  - Título

Especificações:
  - Listagem
  - Pesquisa por palavra-chave
  - Paginação
  - Favoritos
  - Informações adicionais
  - Destacar palavra-chave pesquisada

Necessidades técnicas:
  - SPA
  - Entregar com README via github
  - Testes automatizados
  - Possibilitar abrir apenas com index.html
  - Sem necessidade de backend


2º Passo - Arquitetar o projeto

Frameworks e tecnologias utilizados a fim de agilizar e aprimorar o projeto:
  - React.js
  - Twitter Bootstrap
  - React-Modal-Bootstrap ( https://www.npmjs.com/package/react-modal-bootstrap ) 
  - FontAwesome

Arquivos necessários:
  - index.html (estrutura inicial da SPA)
  - index.css (estilização)
  - index.js (estrutura inicial da parte JS da aplicação)
    - Biblioteca
    - Pesquisa
    - Lista
    - Livro
    - Gerenciador de Favoritos

Documentação: português (mesmo idioma que o projeto recebido)


3º Passo - Design

A ideia geral do layout é de ser o mais limpo e simples possível. Evitando, assim, distrações e cansaço ao usar o sistema.
Para a listagem de itens, usou-se as seguintes informações: imagem, titulo e autor. As outras informações apenas aparecem quando solicitar mais informações a fim de dispor ao usuário apenas as informações vitais que ele precisa no momento sem poluir a sua tela. O campo de pesquisa fica acima de tudo pois é a primeira ferramenta a ser utilizada pelo usuário.


4º Passo - Desenvolvimento

Por ser um projeto de pequeno porte, buscou-se não criar uma estrutura muito complexa. Por isso temos apenas um arquivo estrutural (index.html) e um de estilização (index.css). Toda a estrutura de lista e pesquisa é manejada pelos arquivos JS.
  - Library.js ==> representa a biblioteca como um todo. Faz a integração dos outros componentes.
  - LibrarySearch.js ==> pesquisa do usuário e comunicação com a API GoogleBooks
  - BookList.js ==> lista com os livros buscados pelo usuario
  - Book.js ==> representação gráfica do livro, além do tratamento das informações do mesmo
  - FavoriteManager.js ==> gerencia os favoritos, comuniaca-se apenas com o livro


5º Passo - Finalização e Entrega
- Realizado um repositório no github.com
- Conectado com o código, commitado e enviado ao repositório.


Problemas Conhecidos
- API do Google Books retorna sempre um valor aproximado de quantos livros encontrou com aquela pesquisa ( https://productforums.google.com/forum/#!topic/books-api/Y_uEJhohJCc ). Por isso as últimas páginas geralmente ficarão em branco. Atualmente o sistema volta para a página inicial como se o usuário não tivesse feito a pesquisa para evitar erros.


Ideias Futuras:
- Permitir alterar quantos livros por página.
- Indicar com reticências que há páginas depois e antes da atual quando for o caso.
- Ordenar livros por outros aspectos (Google limita bastante)


Comentários de Desenvolvimento:
- Foi minha primeira experiência com React vindo do angular 1.X, foi uma relação de amor e ódio durante todo o desenvolvimento, principalmente por não "pensar react" o que resultou num trabalho mais longo e massante.
- A aplicação tem os seus domínios bem divididos e separados, mas nem todos são independentes dos outros. Isso é ponto que poderia ter sido trabalhado melhor da minha parte. A paginação poderia ser separada do BookList.js e virar um componente reusável, por exemplo.
- O projeto desafio é muito bem pensado e consegue explorar diversos aspectos e habilidades do desenvolvedor. Senti falta de quais informações sobre o livro o usuário gostaria de ver e de uma especificação mais clara quanto ao visual da plataforma para que abordasse técnicas de desenvolvimento com CSS tanto quanto foi com JS.