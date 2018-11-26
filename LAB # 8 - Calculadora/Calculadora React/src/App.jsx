import React from 'react';
import Panel from './components/Panel';
import Display from './components/Display';
import calcular from './logica';
import './App'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      siguiente: null,
      operando: null,
    };
  }
  
  handleClick = (buttonName) => {
    this.setState(calcular(this.state, buttonName));
  } 

  render() {
    return (
      <div className="App">
        <Display
          value={this.state.siguiente || this.state.total || '0'}
        />
        
        <Panel
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}
export default App;