import { createAction, props } from '@ngrx/store';

import { IUser, IUserRegister } from '@interfaces/user.interface';

const registerUser = createAction('[User] register user', props<IUserRegister>());

const successRegisterUser = createAction('[RegisterUser] register user', props<{user: IUser}>());

const errorRegisterUser = createAction('[RegisterUser] register user', props<{error: string}>());

export const userActions = {
    registerUser,
    successRegisterUser,
    errorRegisterUser
}
