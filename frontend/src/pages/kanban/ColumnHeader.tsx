import React from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import { BsThreeDotsVertical } from 'react-icons/bs';

export interface ColumnHeaderProps {
  title: string;
  dragHandleProps?: DraggableProvidedDragHandleProps;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title, dragHandleProps }) => (
  <header className="p-2 text-sm flex" {...dragHandleProps}>
    <div className="flex-1">{title}</div>
    <button className="bg-gray-200 w-5 h-5 rounded-sm flex justify-center items-center">
      <BsThreeDotsVertical />
    </button>
  </header>
);

export default ColumnHeader;
