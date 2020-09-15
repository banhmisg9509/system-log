import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  });

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
