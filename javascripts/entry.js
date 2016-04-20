require('../less/main.less');
'use strict';
import React from "react";
import { createStore } from 'redux';
import reducers from './reducers';
import ViewShortcuts from './components/viewShortcuts.js';
import AddShortcut from './components/AddShortcut.js';
import ReactDOM from 'react-dom';

const store = createStore(reducers);

class ShortcutApp extends React.Component {

  addShortcut(component, event) {
    store.dispatch({
      type: 'SHORTCUT_ADDED',
      text: component.inputName.value,
      pathValue: component.inputShortcut.value
    });
  }

  render() {
    var self = this;
    return(
      <div className="myDiv">
        <ViewShortcuts items={store.getState().shortcutItems}/>
        <AddShortcut onClick={self.addShortcut}/>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <ShortcutApp />,
    document.getElementById('content')
  );
};

store.subscribe(render);
render();
