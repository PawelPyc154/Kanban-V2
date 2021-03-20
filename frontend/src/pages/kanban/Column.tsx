import React from 'react';
import { Draggable, DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { ColumnType, TaskType } from '../../models/Board';
import ColumnFooter from './ColumnFooter';
import ColumnHeader from './ColumnHeader';
import Tasks from './TasksList';

function getStyle(style: DraggingStyle | NotDraggingStyle | undefined, snapshot: DraggableStateSnapshot) {
  if (!snapshot.isDropAnimating) {
    return style;
  }
  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: '0.01s',
  };
}
export interface ColumnProps {
  column: ColumnType;
  columnIndex: number;
  tasks: TaskType[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks, columnIndex }) => (
  <Draggable draggableId={column._id} index={columnIndex}>
    {(provided, snapshot) => (
      <section
        className="bg-gray-400 rounded-sm w-72"
        ref={provided.innerRef}
        {...provided.draggableProps}
        style={getStyle(provided.draggableProps.style, snapshot)}
      >
        <ColumnHeader title={column.title} dragHandleProps={provided.dragHandleProps} />
        <Tasks columnId={column._id} tasks={tasks} />
        <ColumnFooter />
      </section>
    )}
  </Draggable>
);

export default Column;
