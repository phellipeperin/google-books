import React from 'react';
import favoriteManager from './FavoriteManager.js';
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody } from 'react-modal-bootstrap';

/** 
  * Classe que dispoe o livro. Tem um detalhe importante que e o tratamento das informacoes, para evitar null, undefined e outros erros.
  **/
class Book extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMore: false,
            favorite: favoriteManager.favoriteManager.checkIfBookIsFavorite(this.props.data.id)
        }

        this.toggleFavorite = this.handleToggleFavorite.bind(this);
        this.showMore = this.handleShowMore.bind(this);
        this.closeModal = this.handleCloseModal.bind(this);
    }

    getTitle(bookTitle) {
        if(bookTitle) {
            return bookTitle;
        } else {
            return 'Título não disponível';
        }
    }

    getTitleHTML(bookTitle) {
        if(bookTitle) {
            var indexSearch = bookTitle.toLowerCase().indexOf(this.props.searchTerm.toLowerCase());
            if(indexSearch !== -1) {
                var firstPart = bookTitle.substring(0, indexSearch);
                var termPart = bookTitle.substring(indexSearch, indexSearch+this.props.searchTerm.length); //Tem que fazer substring e nao apenas colocar o termo por causa que a pesquisa e case insenstive. Entao deixa-se assim para o titulo ficar igual o original.
                var lastPart = bookTitle.substring(indexSearch+this.props.searchTerm.length);

                return firstPart + '<b>' + termPart + '</b>' + lastPart;
            } else {
                return bookTitle;
            }
        }
        else return 'Título não disponível';
    }

    getDescription(bookDescription) {
        if(bookDescription) return bookDescription;
        else return 'Descrição não disponível';
    }

    getNumberOfPages(pageCount) {
        if(pageCount) return pageCount + " páginas";
        else return 'Número de páginas não especificado';
    }

    getPublishedDate(publishedDate) {
        if(publishedDate) return "Publicado em: " + publishedDate;
        else return 'Date de publicação não especificada';
    }

    getFirstAuthor(bookAuthors) {
        if(bookAuthors && bookAuthors.length) {
            return bookAuthors[0];
        } else {
            return "Sem autor";
        }
    }

    getAllAuthors(bookAuthors) {
        if(bookAuthors && bookAuthors.length) {
            var authors = "";
            for(var i = 0; i < bookAuthors.length; i++) {
                authors += bookAuthors[i];
                if(i < (bookAuthors.length - 1)) {
                    authors += "; ";
                }
            }
            return authors;
        } else {
            return "Sem autor";
        }    
    }

    getSmallThumbnail(bookImages) {
        if(bookImages && bookImages.smallThumbnail) return bookImages.smallThumbnail;
        else return 'http://www.instrumentationtoday.com/wp-content/themes/patus/images/no-image-half-landscape.png'; //Idealmente essa imagem deveria estar no projeto, nao foi colocado para manter o link ao site do criador (nao roubar propriedade). Seria possivel utilizar uma imagem livre de direitos, porem essa se ajustou muito bem ao projeto :) {this.getTitle(this.props.data.volumeInfo.title)}
    }

    getBigThumbnail(bookImages) {
        if(bookImages && bookImages.thumbnail) return bookImages.thumbnail;
        else return this.getSmallThumbnail;
    }

    handleShowMore(event) {
        this.setState({showMore: true});
    }

    handleCloseModal(event) {
        this.setState({showMore: false});
    }

    handleToggleFavorite(event) {
        if(this.state.favorite) {
            favoriteManager.favoriteManager.unfavoriteBook(this.props.data.id);
            this.state.favorite = false;
        } else {
            favoriteManager.favoriteManager.favoriteBook(this.props.data.id);
            this.state.favorite = true;
        }
        this.forceUpdate();
    }

    /* TODO
     * dangerouslySetInnerHTML --> perigoso de ataques de XSS
     * utilizar biblioteca de sanitize ( https://github.com/cure53/DOMPurify )
     */
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <img src={this.getSmallThumbnail(this.props.data.volumeInfo.imageLinks)} alt="Sem imagem"/>
                        <a className={"favorite-link " + (this.state.favorite ? 'active' : '')} onClick={this.toggleFavorite}>
                            <i className={(this.state.favorite ? 'fa fa-star' : 'fa fa-star-o')}></i>
                        </a>
                        <h5 className="card-title" dangerouslySetInnerHTML={{__html: this.getTitleHTML(this.props.data.volumeInfo.title)}}></h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.getFirstAuthor(this.props.data.volumeInfo.authors)}</h6>
                        <a className="card-link" onClick={this.showMore}>Ver mais</a>
                    </div>
                </div>

                <Modal isOpen={this.state.showMore} size="modal-lg">
                    <ModalHeader>
                        <ModalTitle>{this.getTitle(this.props.data.volumeInfo.title)}</ModalTitle>
                        <ModalClose onClick={this.closeModal}/>
                    </ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6 text-align-center">
                                <img src={this.getBigThumbnail(this.props.data.volumeInfo.imageLinks)} alt="Sem imagem"/>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-6 col-6">
                                <h6>{this.getAllAuthors(this.props.data.volumeInfo.authors)}</h6>
                                <h6 className="mb-2 text-muted">{this.getNumberOfPages(this.props.data.volumeInfo.pageCount)}</h6>
                                <h6 className="mb-2 text-muted">{this.getPublishedDate(this.props.data.volumeInfo.publishedDate)}</h6>
                            </div>
                        </div>
                        <div className="row row-description">
                            <div className="col">
                                <h6 className="mb-2 text-muted">Descrição</h6>
                                <p>{this.getDescription(this.props.data.volumeInfo.description)}</p>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
};

export default Book;