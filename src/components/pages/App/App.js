import React, { Component } from 'react';
//import logo from '../../../assets/logo.svg';
import HeaderBar from '../../header/HeaderBar';

import './style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar title={'Expressions'} subtitle={'A safe place'} />
      </div>
    );
  }
}

export default App;
