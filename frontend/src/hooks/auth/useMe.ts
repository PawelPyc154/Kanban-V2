import { useContext } from 'react';
import { UserContext } from '../../components/providers/UserProvider';

const useMe = () => useContext(UserContext);

export default useMe;
