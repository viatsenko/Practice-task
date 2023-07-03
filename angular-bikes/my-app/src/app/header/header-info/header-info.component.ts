import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  networkIdSelector,
  networkNameSelector,
  networksSelector,
  stationsSelector
} from "../../store/selectors/bikes.selectors";
import {favouriteSelector} from "../../store/selectors/favourite.selectors";
import {combineLatestWith, map} from "rxjs";
import {userAuthSelector} from "../../store/selectors/auth.selectors";

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent {
  constructor(private store: Store) {}
  stationLength$ = this.store.select(stationsSelector);
  networksLength$ = this.store.select(networksSelector);
  networkName$ = this.store.select(networkNameSelector);
  networkId$ = this.store.select(networkIdSelector);
  likes$ = this.store.select(favouriteSelector);
  auth$ = this.store.select(userAuthSelector);

  likesCount$ = this.likes$
    .pipe(
      combineLatestWith(this.networkId$),
      map(([likes, networkId]) => {
        return Object.values(likes).filter(value => {
          if (networkId !== undefined){
            return value.networkId === networkId
          }
          return true;
        }).length
      })
    );



}
