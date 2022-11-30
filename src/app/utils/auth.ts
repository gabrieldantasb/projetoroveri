import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlSegmentGroup, UrlTree } from "@angular/router";
import { AppGlobalService } from "../app-global.service";

export const isAuth: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if(AppGlobalService.autenticado) return true;
  const router = inject(Router);
  return router.navigate(['/login'])
}
