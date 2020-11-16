import React from 'react';

import Header from '../Header/Header.js';
import Form from '../Form/Form.js';
import Footer from '../Footer/Footer.js';
import Results from '../Results/Results.js'
import './App.css';


class App extends React.Component {
  state = {
    url: '',
    method: '',
    header: {},
    count: 0,
    result: {}
  }
  updateState = (data) => {
    this.setState({ url: data.url, method: data.method, header: data.header, count: data.count, result: data })
  }
  render() {
    return (
      <>
        <Header />
        <Form updateState={this.updateState} />
        <Results payload={this.state} />
        <Footer />
      </>
    )
  }
}

export default App;
