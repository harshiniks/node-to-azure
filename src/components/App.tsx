import React from 'react';

class App extends React.Component {
  render() {
    const style = {
        fontSize: 35,
        marginTop: '20%',
        marginLeft: '30%',
        background: 'aqua',
        marginRight: '20%',
      };
    return (
      <div style={style}>GitHub Student Developer, Here is your helloworld!!!</div>
    );
  }
}

export default App;