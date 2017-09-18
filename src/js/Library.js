import React from 'react';
import LibrarySearch from './LibrarySearch.js';
import BookList from './BookList.js';

/** 
  * Classe principal da aplicacao. Gerencia os outros componentes e guarda a lista de livros pesquisados.
  **/
class Library extends React.Component {

	 /* 
    A biblioteca tem duas partes: pesquisa e lista. Para que a lista possa mostrar o que foi procurado, deve haver uma conexao entre elas. Como elas (na hierarquia proposta) nao possuem conexao direta. A biblioteca verifica se a pesquisa se alterou para ela enviar a lista quando for necessario. 
	Existiria a possibilidade de conectar a lista diretamente com a busca, o que talvez seria mais performatico, porem essa abordagem faz mais sentido em relacao ao dominio e deixa menos pontas soltas. 
	*/

	constructor() {
        super()

        this.state = {
        	searchTerm: '',
        	bookCollection: [],
        	totalSearchAmount: 0,
        	booksPerPage: 12, //Esta no state pois a ideia que ele futuramente possa ser manipulado pelo usuario
        	currentPage: 1
        }
    }

    onSearchChange(newList, searchTerm) {
        this.setState({ bookCollection: newList.items, totalSearchAmount: newList.totalItems, searchTerm: searchTerm });
        console.log(this.state.bookCollection);
    }

    onPageChange(newPage) {
        this.setState({ currentPage: newPage });
    }

  	render() {
    	return (
    		<div>
    			<div id="searchContainer" className="container main-container">
    				<LibrarySearch 	booksPerPage={this.state.booksPerPage} 
    								currentPage={this.state.currentPage} 
    								callbackParent={(newList) => this.onSearchChange(newList)} 
    				/>
    			</div>
    			<div id="bookListContainer" className="container main-container">
    				<BookList 	bookCollection={this.state.bookCollection} 
    							booksPerPage={this.state.booksPerPage}
    							currentPage={this.state.currentPage}
    							totalSearchAmount={this.state.totalSearchAmount}
    							searchTerm={this.state.searchTerm}
    							callbackParent={(newPage) => this.onPageChange(newPage)}
    				/>
    			</div>
    		</div>
    	);
  	}
};

export default Library;