import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import useBoard from '../../hooks/board/useBoard';
import useReorderColumn from '../../hooks/column/useReorderColumn';
import Columns from './Columns';

const Kanban: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading, isFetching } = useBoard(id);

  const reorderColumn = useReorderColumn();

  const onDragEnd = ({ destination, source, draggableId, type }: DropResult) => {
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return;
    // console.log(destination, source, draggableId, type);

    switch (type) {
      case 'column': {
        reorderColumn.mutate({
          boardId: id,
          fromIndex: source.index,
          toIndex: destination.index,
          columnId: draggableId,
        });
        break;
      }
      case 'task': {
        const startColumn = source.droppableId;
        const endColumn = destination.droppableId;
        if (startColumn === endColumn) {
          // startColumn === endColumn
          // console.log('moveTask');
          //   // move task inside column
          //   setKanbanData((prev) => {
          //     const newTaskOrderIds = [...startColumn.taskOrderIds];
          //     newTaskOrderIds.splice(source.index, 1);
          //     newTaskOrderIds.splice(destination.index, 0, draggableId);
          //     const newColumn = { ...startColumn, taskOrderIds: newTaskOrderIds };
          //     return { ...prev, columns: { ...prev.columns, [newColumn.id]: newColumn } };
          //   });
        } else {
          // console.log('moveTaskBetweenColumn');
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
        break;
      }
      default:
        break;
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
      {JSON.stringify(isFetching)}
      {JSON.stringify(isLoading)}
      <Droppable droppableId="columns" direction="horizontal" type="column">
        {(provided) => (
          <main
            className="h-page bg-blue-500 p-3 flex items-start space-x-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data?.columns && <Columns columns={data?.columns} />}
            {provided.placeholder}
          </main>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Kanban;
