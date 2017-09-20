/** 
  * E uma funca ao inves de um componente react, afinal ele nao e renderizado em tela, tem apenas funcao logica no nosso sistema. Essa provavelmente nao e a melhor abordagem, mas seria necessario mais estudo para evoluir esse ponto. O lado positivo e que o componente esta desacoplado dos outros.
  *
  * https://stackoverflow.com/questions/35082047/call-external-javascript-function-from-react-components
  */

var favoriteManager = new function() {

    this.favoriteBook = function(bookID) {
        var favoriteListString = localStorage.getItem('favoriteList');
        var favoriteList = [];
        if(favoriteListString) {
            favoriteList = JSON.parse(favoriteListString);
        }
        favoriteList.push(bookID);
        localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    }

    this.unfavoriteBook = function(bookID) {
        var favoriteListString = localStorage.getItem('favoriteList');
        var favoriteList = [];
        if(favoriteListString) {
            favoriteList = JSON.parse(favoriteListString);
            var positionOnList = -1;
            for(var i = 0;  i < favoriteList.length; i++) {
                if(favoriteList[i] === bookID)
                    positionOnList = i;
            }
            favoriteList.splice(positionOnList, 1);
            localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
        }
    }

    this.checkIfBookIsFavorite = function(bookID) {
        var favoriteListString = localStorage.getItem('favoriteList');
        if(favoriteListString) {
            var favoriteList = JSON.parse(favoriteListString);
            var positionOnList = -1;
            for(var i = 0;  i < favoriteList.length; i++) {
                if(favoriteList[i] === bookID)
                    positionOnList = i;
            }
            return (positionOnList !== -1);
        }
        return false;
    };

}

module.exports = {favoriteManager: favoriteManager};