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
Prazo: 15/09/2017 (4 dias)
Entregue em: 16/09/2017 (1 dia de atraso)


2º Passo - Arquitetar o projeto
Frameworks e tecnologias utilizados a fim de agilizar e aprimorar o projeto:
  - React.js (v)
  - Twitter Bootstrap (v4.0)
  - FontAwesome (v.4.7.0)

Arquivos necessários:
  - index.html (estrutura inicial da SPA)
  - index.css (estilização)
  - index.js (estrutura inicial da parte JS da aplicação)
    - Biblioteca
    - Pesquisa
    - Lista
    - Livro

Documentação: português (mesmo idioma que o projeto recebido)


3º Passo - Design
A ideia geral do layout é de ser o mais limpo e simples possível. Evitando, assim, distrações e cansaço ao usar o sistema.
Para a listagem de itens, usou-se as seguintes informações: imagem, titulo e autor. As outras informações apenas aparecem quando solicitar mais informações a fim de dispor ao usuário apenas as informações vitais que ele precisa no momento sem poluir a sua tela.
O campo de pesquisa fica acima de tudo pois é a primeira ferramenta a ser utilizada pelo usuário.


4º Passo - Desenvolvimento
Por ser um projeto de pequeno porte, buscou-se não criar uma estrutura muito complexa. Por isso temos apenas um arquivo estrutural (index.html) e um de estilização (index.css). Toda a estrutura de lista e pesquisa é manejada pelos arquivos JS.
  - Library.js ==> representa a biblioteca como um todo. Faz a integração dos outros componentes.
  - LibrarySearch.js ==> pesquisa do usuário e comunicação com a API GoogleBooks
  - BookList.js ==> lista com os livros buscados pelo usuario
  - Book.js ==> representação gráfica do livro, além do tratamento das informações do mesmo


5º Passo - Testes
Os testes além de serem realizados junto ao desenvolvimento, tem uma etapa separada para



6º Passo - Finalização e Entrega
- Realizado um repositório no github.com


Problemas Conhecidos:
- No momento o Google não permite pesquisar por título apenas ( https://developers.google.com/books/docs/v1/reference/volumes/list ). Por isso quando a palavra pesquisada não se encontra no título ela não está destacada.

Ideias Futuras:
- Permitir alterar quantos livros por página.
- Indicar com reticências que há páginas depois e antes da atual quando for o caso.
- Ordenar livros por outros aspectos (Google limita bastante)