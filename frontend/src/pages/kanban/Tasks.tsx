import React from 'react';
import { TaskType } from '../../models/KanbanTypes';
import Task from './Task';

export interface TasksProps {
  tasks: TaskType[];
}

const Tasks = React.memo<TasksProps>(({ tasks }) => (
  <>
    {tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ))}
  </>
));

export default Tasks;
