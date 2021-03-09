import { ErrorOption } from 'react-hook-form';
import objectEntries from './objectEntries';

const setApiFieldsErrors = <T extends { [k: string]: string }>(
  error: T,
  setError: (name: keyof T, error: ErrorOption) => void,
) => {
  objectEntries(error).forEach(([key, value]) => {
    setError(key, {
      type: 'manual',
      message: value,
    });
  });
};

export default setApiFieldsErrors;
