import { CanActivateFn } from '@angular/router';

export const canActivatedGuard: CanActivateFn = (route, state) => {
  return true;
};
