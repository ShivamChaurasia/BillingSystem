import React from 'react';
import {render} from 'react-dom';
import BillingSystem from './BillingSystem.jsx';

class App extends React.Component {
  render () {
    return (
      <div id="mainContainer" className="mainContainer">
        <BillingSystem />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));