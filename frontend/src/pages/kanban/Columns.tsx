import React from 'react';
import { KanbanDataType } from '../../models/KanbanTypes';
import Column from './Column';

export interface ColumnsProps {
  kanbanData: KanbanDataType;
}

const Columns = React.memo<ColumnsProps>(({ kanbanData }) => (
  <>
    {kanbanData.columnOrderIds.map((columnId, index) => (
      <Column
        key={columnId}
        columnIndex={index}
        column={kanbanData.columns[columnId]}
        tasks={kanbanData.columns[columnId].taskOrderIds.map((taskId) => kanbanData.tasks[taskId])}
      />
    ))}
  </>
));

export default Columns;
