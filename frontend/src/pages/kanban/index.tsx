import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import useLog from '../../hooks/auth/useLog';
import useBoard from '../../hooks/board/useBoard';
import Columns from './Columns';

export interface KanbanProps {}

const Kanban: React.FC<KanbanProps> = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useBoard(id);
  useLog(data);

  const onDragEnd = ({ destination, source, draggableId, type }: DropResult) => {
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return;
    console.log(destination, source, draggableId, type);
    if (type === 'column') {
      console.log('moveColumn');
      // move column
      // setKanbanData((prev) => {
      //   const newColumnOrderIds = [...prev.columnOrderIds];
      //   newColumnOrderIds.splice(source.index, 1);
      //   newColumnOrderIds.splice(destination.index, 0, draggableId);
      //   return { ...prev, columnOrderIds: newColumnOrderIds };
      // });
      return;
    }
    if (type === 'task') {
      const startColumn = source.droppableId;
      const endColumn = destination.droppableId;
      if (startColumn === endColumn) {
        // startColumn === endColumn
        console.log('moveTask');
        //   // move task inside column
        //   setKanbanData((prev) => {
        //     const newTaskOrderIds = [...startColumn.taskOrderIds];
        //     newTaskOrderIds.splice(source.index, 1);
        //     newTaskOrderIds.splice(destination.index, 0, draggableId);
        //     const newColumn = { ...startColumn, taskOrderIds: newTaskOrderIds };
        //     return { ...prev, columns: { ...prev.columns, [newColumn.id]: newColumn } };
        //   });
      } else {
        console.log('moveTaskBetweenColumn');
        // move task between column
        //     setKanbanData((prev) => {
        //       const newStartTaskOrderIds = [...startColumn.taskOrderIds];
        //       newStartTaskOrderIds.splice(source.index, 1);
        //       const newStartColumn = { ...startColumn, taskOrderIds: newStartTaskOrderIds };
        //       const newEndTaskOrderIds = [...endColumn.taskOrderIds];
        //       newEndTaskOrderIds.splice(destination.index, 0, draggableId);
        //       const newEndColumn = { ...endColumn, taskOrderIds: newEndTaskOrderIds };
        //       return {
        //         ...prev,
        //         columns: { ...prev.columns, [newStartColumn.id]: newStartColumn, [newEndColumn.id]: newEndColumn },
        //       };
        //     });
        //   }
      }
    }
  };
  if (isLoading) {
    return <div>Loader</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {JSON.stringify(data)}
      <Droppable droppableId="columns" direction="horizontal" type="column">
        {(provided) => (
          <main
            className="h-page bg-blue-500 p-3 flex items-start space-x-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data?.board.columns && <Columns columns={data?.board.columns} />}
            {provided.placeholder}
          </main>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
