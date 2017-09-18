import React from 'react';

/** 
  * Classe para a pesquisa. Renderiza na tela os elementos de busca e executa  e permite a busca. 
  * Detalhes notaveis: botao de pesquisar fica desabilitado quando o campo de pesquisa e vazio ou esta aguardando o resultado de alguma pesquisa (evitar multiplas requisicoes).
  * Nao faz a comunicacao com a API do Google Books, pois essa funcionalidade nao pertence a essa classe para que ela tenha um maior reaproveitamento
  **/
class LibrarySearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		}

        //Realizar o bind apenas uma vez (ao inves de deixar o bind direto no elemento)
        this.doSearch = this.handleSearch.bind(this);
        this.changeSearchTerm = this.handleChangeSearchTerm.bind(this);
	}

    handleSearch(event) {
        if(this.state.searchTerm && this.state.searchTerm.trim()) { //Cuidado com espacoes em branco e strings nulas/undefined
            var term = this.state.searchTerm.replace(new RegExp(' ', 'g'), '+'); //Esse e um ponto que poderia ser colocado em outro lugar
            fetch('https://www.googleapis.com/books/v1/volumes?q='+term+'&orderBy=relevance&maxResults='+this.props.booksPerPage+'&startIndex='+((this.props.currentPage-1)*this.props.booksPerPage))
                .then(response => response.json())
                .then(response => { 
                    if(response) {
                        this.props.callbackParent(response, this.state.searchTerm);
                    } 
                });
        }
    }

    handleChangeSearchTerm(event) {
        this.setState({searchTerm: event.target.value});
    }

	render() {
		return (
			<div className="row justify-content-lg-center justify-content-md-center">
      		    <div className="col-lg-6 col-md-8 col-sm-12 col-xs-12 col-12">
                    <h4 className="text-align-center">Pesquise no Google Books</h4>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Qual livro você procura?" aria-label="Qual livro você procura?" value={this.state.searchTerm} onChange={this.changeSearchTerm} /> 
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.doSearch}>Pesquisar</button>
                        </span>
                    </div>
                </div>
            </div>
		);
	}
}

export default LibrarySearch;