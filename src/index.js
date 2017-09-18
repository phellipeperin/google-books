import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Library from './js/Library.js';

/**
  * Sempre deixo o index o mais limpo possivel. Apenas chama uma classe que sera a div do projeto todo. Assim ele fica disponivel para outras utilidades (nao necessarias nesse projeto, mas manti o meu padrao mesmo assim)
  **/

ReactDOM.render(<Library />, document.getElementById('main'));