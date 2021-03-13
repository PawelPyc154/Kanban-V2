import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TaskType } from '../../models/KanbanTypes';

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
      >
        {task.content}
      </article>
    )}
  </Draggable>
);

export default Task;
