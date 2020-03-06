import React, { Component } from 'react';

export default class Pagination extends Component {
  componentDidMount() {}

  render() {
    return (
      <pre>
        <code>{JSON.stringify(this.props, null, 4)}</code>
      </pre>
    );
  }
}
