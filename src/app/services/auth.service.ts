import { Injectable } from '@angular/core';
import { IUser, IUserRegister } from '@interfaces/user.interface';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(data: IUserRegister): Observable<IUser> {
    return of({
      email: data.email,
      firstName: 'Teste',
      lastName: 'Batata',
      token: crypto.randomUUID()
    }).pipe(delay(1000));
  }
}
