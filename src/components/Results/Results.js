import React from 'react';
import './Results.scss';

import ReactJson from 'react-json-view'

class Results extends React.Component {
  render() {
    return(
    <div id='results'>
      <ReactJson src={this.props.payload.header} theme="monokai" />
      <ReactJson src={this.props.payload.result} theme="monokai" />
    </div>
    )
  }
}

export default Results;