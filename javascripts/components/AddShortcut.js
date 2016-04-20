import React from 'react';
import ShortcutItems from './ShortcutItems.js';
import reducers from '../reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

export default class AddShortcut extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var self= this;
    return (
      <div>
        Name: <input ref={node => {this.inputName = node;}} />
        Value: <input ref={node => {this.inputShortcut = node;}} />
        <button onClick={self.props.onClick.bind(null, this)}></button>
      </div>
    );
  }

}
