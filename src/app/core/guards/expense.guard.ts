import { CanActivateFn } from '@angular/router';

export const expenseGuard: CanActivateFn = (route, state) => {
  return true;
};
