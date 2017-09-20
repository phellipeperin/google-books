import React from 'react';
import Book from './Book.js';

/** 
  * Classe para a listagem dos livros. Apenas renderiza na tela os elementos e permite a busca.
  * Detalhes notaveis: 
    - variavel para a definicao global de livros por pagina. Assim fica mais facil de alterar futuramente (e permitir que o usuario altere)
    - 
  * Nao faz a comunicacao com a API do Google Books, apenas recebe a lista de livros. A funcao dessa classe e representar visualmente a lista, nao manipular a pesquisa.
  **/
class BookList extends React.Component {
    constructor(props) {
        super(props);

        //bind nas funcoes para poder usar o this e dar bind no click
        this.getFirstPageOfPagination = this.getFirstPageOfPagination.bind(this);
        this.getLastPageOfPagination = this.getLastPageOfPagination.bind(this);
        this.getPagesOfPagination = this.getPagesOfPagination.bind(this);
        this.getPagination = this.getPagination.bind(this);

        this.changePage = this.handleChangePage.bind(this);
    }

    getFirstPageOfPagination(obj, currentPage) {
        if(currentPage === 1) 
            return <li className="page-item disabled"><a className="page-link">Primeira</a></li>
        else
            return <li className="page-item" onClick={() => obj.changePage(1)}><a className="page-link">Primeira</a></li>
    }

    getLastPageOfPagination(obj, currentPage, numberOfPages) {
        if(currentPage === numberOfPages) 
            return <li className="page-item disabled"><a className="page-link">Última</a></li>
        else
            return <li className="page-item" onClick={() => obj.changePage(numberOfPages)}><a className="page-link">Última</a></li>
    }

    getPagesOfPagination(obj, currentPage, numberOfPages) {
        var pagesNumbered = [];
        for(var i = 1; i <= numberOfPages; i++) {
            var page = {number: i};
            page.disabled = (i === this.props.currentPage);
            page.hidden = ( i > (this.props.currentPage+3) || i < (this.props.currentPage-3) );
            pagesNumbered.push(page);
        }
        
        return pagesNumbered.map(function(page) {
            if(page.disabled) {
                return ( <li className="page-item disabled" key={page.number}><a className="page-link">{page.number}</a></li> );
            } else if(page.hidden) {
                return ( <li className="page-item hidden" key={page.number}><a className="page-link">{page.number}</a></li> );
            } else {
                return ( <li className="page-item" key={page.number} onClick={() => obj.changePage(page.number)}><a className="page-link">{page.number}</a></li> );
            }
            
        });
    }

    getPagination() {
        const numberOfPages = Math.ceil(this.props.totalSearchAmount/this.props.booksPerPage);

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    {this.getFirstPageOfPagination(this, this.props.currentPage)}
                    {this.getPagesOfPagination(this, this.props.currentPage, numberOfPages)}
                    {this.getLastPageOfPagination(this, this.props.currentPage, numberOfPages)}
                </ul>
            </nav>
        )
    }

    handleChangePage(pageNumber) {
        this.props.callbackParent(pageNumber);
    }

  	render() {
    	if(this.props.bookCollection && this.props.bookCollection.length) {
            const bookList = this.props.bookCollection.map( (book) => <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={book.id}> <Book data={book} searchTerm={this.props.searchTerm} /> </div>);
            
            return (
                <div>
                    <div className="row justify-content-lg-center justify-content-md-center">
                        <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12">
                            <div className="alert alert-primary" role="alert">
                                Agora sim! Temos <b>{this.props.totalSearchAmount}</b> resultados.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {bookList}
                    </div>
                    <div className="row">
                        <div className="col">
                            {this.getPagination()}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row justify-content-lg-center justify-content-md-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12">
                        <div className="alert alert-secondary" role="alert">
                            Pesquise algo interessante! Estou sem resultados no momento :(
                        </div>
                    </div>
                </div>
            );
        }
  	}
};

export default BookList;