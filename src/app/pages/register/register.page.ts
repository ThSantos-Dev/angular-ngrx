import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser, IUserRegister } from '@interfaces/user.interface';
import { userSelector } from '@store/states/user/user.selectors';
import { userActions } from '@store/states/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegisterPage implements OnInit {
  protected store = inject(Store);

  user$: Observable<IUser | null> = this.store.select(userSelector.currentUser);
  loading$: Observable<boolean> = this.store.select(userSelector.loadingUser);

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    this.store.dispatch(userActions.registerUser({ email: email.value, password: password.value }));

  }
}
