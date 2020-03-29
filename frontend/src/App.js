import React, { useState } from 'react';

import Header from './Header';

function App() {
  // let counter = useState(0); // useState retorna um array -> [valor, funcaoAtualizacao], entao vou precisar de um array para armazenar isso:
  const [counter, setCounter] = useState(0);


  function increment() {
    // counter++; // como transformamos a variavel em array, e agora temos uma funcao para utilizar o estado, vamos chamá-la:
    setCounter(counter+1); // Não dá pra fazer com o "++" :(
  }

  return (
    <>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

export default App;
