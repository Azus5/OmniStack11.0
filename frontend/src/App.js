import React from 'react';
// import React, { useState } from 'react';
import Routes from './routes';
import './global.css';
//Geralmente um componente no React tem a primeira letra Maiuscula
//Quando o html está escrito dentro de um arquivo JS, ele é chamado de JSX (Javascript XML(sintaxy do HTML))
function App() {
  //useState retorna um Array [valor, funçãoAtualização]
  // const [counter, setCounter] = useState(0)



  return (
    <Routes />
  );
}

export default App;
