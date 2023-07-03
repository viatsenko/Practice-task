import {Component, OnInit} from '@angular/core';
import {NetworksService} from "../networks.service";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {loadNetworks} from "../../store/actions/bikes.actions";
import {Observable} from "rxjs";
import {NetworkType} from "../../store/reducers/bikes.reducer";
import {networksSelector} from "../../store/selectors/bikes.selectors";

@Component({
  selector: 'app-networks-bikes',
  templateUrl: './networks-bikes.component.html',
  styleUrls: ['./networks-bikes.component.scss']
})

export class NetworksBikesComponent implements OnInit{
  error = '';

  constructor(private networkService: NetworksService,
              private router: Router,
              private store: Store) {}
  ngOnInit() {
    // fetchNetworks;
    this.store.dispatch(loadNetworks());
  }
  bikesNetworks$: Observable<NetworkType[]> = this.store.pipe(
    select(networksSelector)
  )

  handleClick(id: string) {
    this.router.navigate(['/bikes', id]);
  }
  //pagination
  currentPage: number = 1;
  itemsPerPage: number = 11;
  totalItems: number | undefined;
}
