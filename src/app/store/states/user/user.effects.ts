import { inject } from '@angular/core';

import { catchError, map, of, switchMap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { userActions } from './user.actions';

import { AuthService } from '@services/auth.service';

export const registerUserEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(userActions.registerUser),
      switchMap((user) =>
        authService.register(user).pipe(
          map((user) => userActions.successRegisterUser({ user })),
          catchError((error: string) =>
            of(userActions.errorRegisterUser({ error }))
          )
        )
      )
    );
  },
  { functional: true }
);
