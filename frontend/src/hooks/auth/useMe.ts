import { useContext } from 'react';
import { UserContext } from '../../components/appProviders/UserProvider';

const useMe = () => useContext(UserContext);

export default useMe;
