export interface ColumnType {
  id: string;
  title: string;
  taskOrderIds: string[];
}
export interface TaskType {
  id: string;
  content: string;
}

export interface KanbanDataType {
  columns: {
    [key: string]: ColumnType;
  };
  tasks: {
    [key: string]: TaskType;
  };
  columnOrderIds: string[];
}
