import React from 'react';
export default class ShortcutItems extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.items != null && this.props.items.length > 0) {
      var listItem = this.props.items.map(function(item, index) {
        return(
          <tr>
            <td>{item.name}</td>
            <td>{item.pathValue}</td>
          </tr>
        );
      });
    }

    if(this.props.items != null && this.props.items.length > 0) {
      return(
        <table>
          <tbody>
            {listItem}
          </tbody>
        </table>
      );
    }
    else{
      return(
        <tr>
          <td>Loading</td>
        </tr>
      );
    }
  }
}
