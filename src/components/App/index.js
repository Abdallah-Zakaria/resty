import React from 'react';

import Header from '../Header';
import Form from '../Form';
import Footer from '../Footer';
import Results from '../Results';
import History from '../History';
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
        <History />
        <Results payload={this.state} />
        <Footer />
      </>
    )
  }
}

export default App;
