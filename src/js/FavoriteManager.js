import React from 'react';

/** 
  * Classe que gerencia os favoritos (dentro do localstorage)
  **/
class FavoriteManager extends React.Component {

    favoriteBook(bookID) {
        var favoriteListString = localStorage.getItem('favoriteList');
        var favoriteList = [];
        if(favoriteListString) {
            var favoriteList = JSON.parse(favoriteListString);
        }
        favoriteList.push(bookID);
        localStorage.setItem('favoriteList', JSON.stringfy(favoriteList));
    }

    unfavoriteBook(bookID) {
        var favoriteListString = localStorage.getItem('favoriteList');
        var favoriteList = [];
        if(favoriteListString) {
            var favoriteList = JSON.parse(favoriteListString);
            var positionOnList = -1;
            for(var i = 0;  i < favoriteList.length; i++) {
                if(favoriteList[i] == bookID)
                    positionOnList = i;
            }
            favoriteList.splice(positionOnList, 1);
            localStorage.setItem('favoriteList', JSON.stringfy(favoriteList));
        }
    }

    checkIfBookIsFavorite(bookID) {
        var favoriteListString = localStorage.getItem('favoriteList');
        if(favoriteListString) {
            var favoriteList = JSON.parse(favoriteListString);
            var positionOnList = -1;
            for(var i = 0;  i < favoriteList.length; i++) {
                if(favoriteList[i] == bookID)
                    positionOnList = i;
            }
            return (positionOnList !== -1);
        }
        return false;
    }

};

export default FavoriteManager;