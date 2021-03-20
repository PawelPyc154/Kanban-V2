import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useBoards from '../../hooks/board/useBoards';

const Kanbans: React.FC = () => {
  const { data } = useBoards();

  return (
    <main className="text-gray-50 ">
      {data?.map((board) => (
        <Link key={board._id} to={`/kanban/${board._id}`}>
          {board.title}
        </Link>
      ))}
      <button
        onClick={() => {
          toast.dark('elo');
          toast.success('elo');
          toast.error('elo');
          toast.warning('elo');
          toast.info('elo');
        }}
      >
        toast
      </button>
    </main>
  );
};

export default Kanbans;
