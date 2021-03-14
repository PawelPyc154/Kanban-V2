import { useEffect } from 'react';

const useLog = (log: any) => {
  useEffect(() => {
    console.log(log);
  });
};

export default useLog;
