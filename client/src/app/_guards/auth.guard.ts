import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_Services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/internal/operators/map';

export const AuthGuard: CanActivateFn = (route, state) => {
  const accountService =inject(AccountService);
  const toastr = inject(ToastrService);
  return accountService.currentUser$.pipe(
    map(user => {
      if(user) return true;
      else{
        toastr.error('You shall not pass!');
        return false;
      }
    })
  );
};
