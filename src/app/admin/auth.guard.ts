import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,RouterStateSnapshot,Router } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { R3PartialDeclaration } from "@angular/compiler";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthGuard{
    constructor(private router: Router, private auth: AuthService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if (!this.auth.authenticate) {
            this.router.navigateByUrl("/admin/auth")
            return false
        }
        return true
    }
}
