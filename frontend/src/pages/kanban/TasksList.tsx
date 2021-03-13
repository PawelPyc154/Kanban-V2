import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TaskType } from '../../models/KanbanTypes';
import Tasks from './Tasks';

export interface TasksListProps {
  columnId: string;
  tasks: TaskType[];
}

const TasksList: React.FC<TasksListProps> = ({ columnId, tasks }) => (
  <Droppable droppableId={columnId} type="task">
    {(provided, snapshot) => (
      <>
        <div
          className={`p-1 bg-blue-800 space-y-1 ${snapshot.isDraggingOver ? 'bg-red-400' : ''}`}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <Tasks tasks={tasks} />
        </div>

        {provided.placeholder}
      </>
    )}
  </Droppable>
);

export default TasksList;
