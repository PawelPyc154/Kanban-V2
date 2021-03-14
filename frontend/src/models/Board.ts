export interface TaskType {
  _id: string;
  title: string;
  addBy: string;
  createdAt: Date;
}

export interface ColumnType {
  _id: string;
  title: string;
  tasks: TaskType[];
  addBy: string;
  createdAt: Date;
}

export interface BoardType {
  _id: string;
  title: string;
  addBy: string;
  createdAt: Date;
  columns: ColumnType[];
  members: string[];
}
