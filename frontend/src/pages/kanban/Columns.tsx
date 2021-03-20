import React from 'react';
import { ColumnType } from '../../models/Board';
import Column from './Column';

export interface ColumnsProps {
  columns: ColumnType[];
}

const Columns: React.FC<ColumnsProps> = ({ columns }) => (
  <>
    {columns.map((column, index) => (
      <Column key={column._id} columnIndex={index} column={column} tasks={column.tasks} />
    ))}
  </>
);

export default Columns;
