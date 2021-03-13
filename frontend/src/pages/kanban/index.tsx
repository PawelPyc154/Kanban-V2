import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { KanbanDataType } from '../../models/KanbanTypes';
import Columns from './Columns';

export interface KanbanProps {}

const initialState: KanbanDataType = {
  columns: {
    'id-1': {
      id: 'id-1',
      title: 'column-1',
      taskOrderIds: ['taskid-1', 'taskid-2'],
    },
    'id-2': {
      id: 'id-2',
      title: 'column-1',
      taskOrderIds: ['taskid-3', 'taskid-4'],
    },
  },
  tasks: {
    'taskid-1': {
      id: 'taskid-1',
      content: 'task-1',
    },
    'taskid-2': {
      id: 'taskid-2',
      content: 'task-2',
    },
    'taskid-3': {
      id: 'taskid-3',
      content: 'task-3',
    },
    'taskid-4': {
      id: 'taskid-4',
      content: 'task-4',
    },
  },

  columnOrderIds: ['id-1', 'id-2'],
};

const Kanban: React.FC<KanbanProps> = () => {
  const [kanbanData, setKanbanData] = useState(initialState);

  const onDragEnd = ({ destination, source, draggableId, type }: DropResult) => {
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return;

    if (type === 'column') {
      // move task inside column
      const newColumnOrderIds = [...kanbanData.columnOrderIds];
      newColumnOrderIds.splice(source.index, 1);
      newColumnOrderIds.splice(destination.index, 0, draggableId);

      setKanbanData((prev) => ({ ...prev, columnOrderIds: newColumnOrderIds }));

      return;
    }

    const startColumn = kanbanData.columns[source.droppableId];
    const endColumn = kanbanData.columns[destination.droppableId];
    if (startColumn === endColumn) {
      // move task inside column
      const newTaskOrderIds = [...startColumn.taskOrderIds];
      newTaskOrderIds.splice(source.index, 1);
      newTaskOrderIds.splice(destination.index, 0, draggableId);
      const newColumn = { ...startColumn, taskOrderIds: newTaskOrderIds };
      setKanbanData((prev) => ({ ...prev, columns: { ...prev.columns, [newColumn.id]: newColumn } }));
      return;
    }

    const newStartTaskOrderIds = [...startColumn.taskOrderIds];
    newStartTaskOrderIds.splice(source.index, 1);
    const newStartColumn = { ...startColumn, taskOrderIds: newStartTaskOrderIds };

    const newEndTaskOrderIds = [...endColumn.taskOrderIds];
    newEndTaskOrderIds.splice(destination.index, 0, draggableId);
    const newEndColumn = { ...endColumn, taskOrderIds: newEndTaskOrderIds };

    setKanbanData((prev) => ({
      ...prev,
      columns: { ...prev.columns, [newStartColumn.id]: newStartColumn, [newEndColumn.id]: newEndColumn },
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="columns" direction="horizontal" type="column">
        {(provided) => (
          <main
            className="h-page bg-blue-500 p-3 flex items-start space-x-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Columns kanbanData={kanbanData} />
            {provided.placeholder}
          </main>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
