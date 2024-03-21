import { createReducer, on } from '@ngrx/store';

import { IUser, IUserRegister } from '@interfaces/user.interface';

import { userActions } from './user.actions';

export enum EUserStatus {
  pending = 'pending',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export interface IUserState {
  user: IUser | null;
  error: string | null;
  status: EUserStatus;
}

const initialState: IUserState = {
  user: null,
  error: null,
  status: EUserStatus.pending,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.registerUser, (state, user) => ({
    ...state,
    status: EUserStatus.loading,
  })),
  on(userActions.successRegisterUser, (state, user) => {
    console.log('user', user);
    return {
      ...state,
      user: user.user,
      status: EUserStatus.success,
    };
  }),
  on(userActions.errorRegisterUser, (state, error) => ({
   ...state,
     error: error.error,
     status: EUserStatus.error,
  })),
);
