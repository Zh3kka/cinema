import { toastr } from 'react-redux-toastr';
import { errorCath } from './../api/api.helpers';
export const toastError = (error: any, title?: string) => {
    const message = errorCath(error)
    toastr.error(title || 'Error request', message)
    throw message
}