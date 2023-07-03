import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {logIn, logOut} from "../../store/actions/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

form!: UntypedFormGroup;
constructor(private fb: UntypedFormBuilder,
            public auth: AuthService,
            private router: Router,
            private store: Store) {};

  submitForm(): void{
    if (this.form.valid){
      this.router.navigate(['/bikes'])
      this.form.reset();
      this.store.dispatch(logIn());
    }
  }
  ngOnInit(): void {
  this.auth.logout();
  this.store.dispatch(logOut());
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(3)]],
    })
  }

}
