import React from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const noteSource = {
  beginDrag(props) {
    console.log('begin dragging note', props);
    return {};
  }
};

@DragSource(ItemTypes.NOTE, NoteStore, (connect) => ({
  connectDragSource: connect.DragSource()
}))
export default class Note extends React.Component {
  render() {
    const {connectDragSource, id, onMove, ...props} = this.props ;

    return connectDragSource(
      <li {...props}>{props.children}</li>
    );
  }
}
