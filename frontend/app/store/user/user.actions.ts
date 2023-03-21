import { toastError } from './../../utils/toastError';
import { toastr } from 'react-redux-toastr';
import { AuthService } from './../../services/auth/auth.service';
import { IAuthResponse, IEmailPassword } from './user.interface';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCath } from '../../api/api.helpers';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/register', async ({ email, password }, thunkApi) => {
    try {
        const response = await AuthService.register(email, password)
        toastr.success('Registration', 'Completed successfully')
        return response.data
    } catch (error) {
        toastError(error)
        return thunkApi.rejectWithValue(error)
    }
})

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/login', async ({ email, password }, thunkApi) => {
    try {
        const response = await AuthService.register(email, password)
        toastr.success('Login', 'Completed successfully')
        return response.data
    } catch (error) {
        toastError(error)
        return thunkApi.rejectWithValue(error)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await AuthService.logout
})

export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>('auth/check-auth', async (_, thunkApi) => {
    try {
        const response = await AuthService.getNewTokens()
        return response.data
    } catch (error) {
        if (errorCath(error) === 'jwt expired') {
            toastr.error('Logout', 'Your authorization if finished, please sign in again')
            thunkApi.dispatch(logout())
        }
        return thunkApi.rejectWithValue(error)
    }
})
