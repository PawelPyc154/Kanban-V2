import React from 'react';
import { Link } from 'react-router-dom';
import useBoards from '../../hooks/board/useBoards';

export interface KanbansProps {}

const Kanbans: React.FC<KanbansProps> = () => {
  const { data } = useBoards();
  return (
    <main className="text-gray-50">
      {data?.boards.map((board) => (
        <Link key={board._id} to={`/kanban/${board._id}`}>
          {board.title}
        </Link>
      ))}
    </main>
  );
};

export default Kanbans;
