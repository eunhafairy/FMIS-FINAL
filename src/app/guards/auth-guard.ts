import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { FacultyService } from "../Service/faculty.service";


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private facultyService: FacultyService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      console.log('GET AUTH!: ' + this.facultyService.getAuth());
        const isAuth = this.facultyService.getAuth();
        if(!isAuth){

            this.router.navigate(['/login']);

        }


        return isAuth;
    }







}
