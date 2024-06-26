import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  $isLoggedIn = signal<boolean>(false);

  set isLoggedIn(isAuth: boolean) {
    this.$isLoggedIn.set(isAuth);
  }
}
