import {
  AddBtn,
  AddLogModal,
  AddTechModal,
  EditLogModal,
  Logs,
  SearchBar,
  TechListModal
} from 'components';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import React, { Fragment, useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
