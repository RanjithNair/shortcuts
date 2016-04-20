import React from 'react';
import ShortcutItems from './ShortcutItems.js';


export default class ViewShortcuts extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <ShortcutItems items={this.props.items} />
      </div>
    );
  }
}
