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
import { Provider } from 'react-redux';
import './App.css';
import store from './store';

function App() {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
