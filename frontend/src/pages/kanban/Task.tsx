import React from 'react';
import { Draggable, DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { TaskType } from '../../models/KanbanTypes';

function getStyle(style: DraggingStyle | NotDraggingStyle | undefined, snapshot: DraggableStateSnapshot) {
  if (!snapshot.isDropAnimating) {
    return style;
  }
  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: '0.2s',
  };
}

export interface TaskProps {
  task: TaskType;
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <article
        className={`bg-blue-200 p-1 ${snapshot.isDragging ? 'bg-blue-500' : ''}`}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        style={getStyle(provided.draggableProps.style, snapshot)}
      >
        {task.content}
      </article>
    )}
  </Draggable>
);

export default Task;
