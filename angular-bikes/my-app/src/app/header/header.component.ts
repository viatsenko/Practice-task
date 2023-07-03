import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Store} from "@ngrx/store";
import {clearSelectedNetwork} from "../store/actions/bikes.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

constructor(public auth: AuthService, private store: Store) {}

  clearHeaderInfo() {
    this.store.dispatch(clearSelectedNetwork())
  }
}
