import React from 'react';

import Header from './Header';

function App() {
  let counter = 0;

  function increment() {
    counter++;
    console.log(counter);
  }

  return (
    <>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

export default App;
