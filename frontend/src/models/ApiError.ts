import { AxiosError } from 'axios';

type DefaultErrors = string | { [key: string]: string };

type ApiError<Errors = DefaultErrors> = AxiosError<{ success: boolean; error: Errors }>;

export default ApiError;
