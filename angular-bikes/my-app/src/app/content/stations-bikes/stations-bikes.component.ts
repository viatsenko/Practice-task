import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {StationsService} from "../stations.service";
import {select, Store} from "@ngrx/store";
import {favouriteSelector} from "../../store/selectors/favourite.selectors";
import {networkIdSelector, stationsSelector} from "../../store/selectors/bikes.selectors";
import {switchLikes} from "../../store/actions/favourite.actions";
import {map, Observable, take} from "rxjs";
import {clearSelectedNetwork, loadStations} from "../../store/actions/bikes.actions";
import {StationType} from "../../store/reducers/bikes.reducer";

@Component({
  selector: 'app-stations-bikes',
  templateUrl: './stations-bikes.component.html',
  styleUrls: ['./stations-bikes.component.scss']
})
export class StationsBikesComponent implements OnInit{

  constructor(private stationsService: StationsService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params['id']);
      let id = params['id'];
      // fetchStations;
      if (id !== undefined) {
        this.store.dispatch(loadStations({id}))
      }
    })
  }
  bikesStations$: Observable<StationType[]> = this.store.pipe(
    select(stationsSelector)
  )

//navigate Back to Networks page
  handleClick() {
    this.store.dispatch(clearSelectedNetwork())
    this.router.navigate(['/bikes'])
  }
  //switch likes
  networkId$ = this.store.select(networkIdSelector);
  likes$ = this.store.select(favouriteSelector);
  likesIds$ = this.likes$.pipe(map(likes => Object.keys(likes)));

  likesHandler(id: string, name: string){
    this.networkId$
      .pipe(take(1))
      .subscribe(networkId => {
        if (networkId){
          this.store.dispatch(switchLikes({id, name, networkId}))
        }
      }
    );
  }
  //pagination stations
  currentPage: number = 1;
  itemsPerPage: number = 11;
  totalItems: number | undefined;

}
