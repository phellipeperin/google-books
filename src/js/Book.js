import React from 'react';
import FavoriteManager from './FavoriteManager.js';

/** 
  * Classe que dispoe o livro. Tem um detalhe importante que e o tratamento das informacoes, para evitar null, undefined e outros erros.
  **/
class Book extends React.Component {

    getTitle(bookTitle) {
        if(bookTitle) return bookTitle;
        else return 'Livro sem Título';
    }

    getDescription(bookDescription) {
        if(bookDescription) {
            var description = '';
            if(bookDescription.length > 80) description = bookDescription.substring(0, 80) + '...';
            else description = bookDescription;
            return description
        } else {
            return 'Sem descrição';
        }
    }

    getAuthor(bookDescription) {
        if(bookDescription) {
            var description = '';
            if(bookDescription.length > 80) description = bookDescription.substring(0, 80) + '...';
            else description = bookDescription;
            return description
        } else {
            return 'Sem descrição';
        }
    }

    getThumbnail(bookImages) {
        if(bookImages && bookImages.smallThumbnail) return bookImages.smallThumbnail;
        else return 'http://www.instrumentationtoday.com/wp-content/themes/patus/images/no-image-half-landscape.png'; //Idealmente essa imagem deveria estar no projeto, nao foi colocado para manter o link ao site do criador (nao roubar propriedade). Seria possivel utilizar uma imagem livre de direitos, porem essa se ajustou muito bem ao projeto :)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <img src={this.getThumbnail(this.props.data.volumeInfo.imageLinks)} alt="Sem imagem"/>
                    <h5 className="card-title">{this.getTitle(this.props.data.volumeInfo.title)}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.getAuthor(this.props.data.volumeInfo.authors)}</h6>
                    <a href="#" className="card-link">Ver mais</a>
                </div>
            </div>
        );
    }
};

export default Book;

/** <p className="card-text">{description}</p>
<a href="#" className="card-link"><i className ="fa fa-star"></i></a> */