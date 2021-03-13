import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ColumnType, TaskType } from '../../models/KanbanTypes';
import ColumnFooter from './ColumnFooter';
import ColumnHeader from './ColumnHeader';
import Tasks from './TasksList';

export interface ColumnProps {
  column: ColumnType;
  columnIndex: number;
  tasks: TaskType[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks, columnIndex }) => (
  <Draggable draggableId={column.id} index={columnIndex}>
    {(provided) => (
      <section className="bg-gray-400 rounded-sm w-72" ref={provided.innerRef} {...provided.draggableProps}>
        <ColumnHeader title={column.title} dragHandleProps={provided.dragHandleProps} />
        <Tasks columnId={column.id} tasks={tasks} />
        <ColumnFooter />
      </section>
    )}
  </Draggable>
);

export default Column;
