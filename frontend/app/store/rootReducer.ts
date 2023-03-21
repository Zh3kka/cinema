import { reducer as toastrReduser } from 'react-redux-toastr'
import { reducer as userReducer } from './user/user.slice'

export const reducers = {
    user: userReducer,
    toastr: toastrReduser
}
