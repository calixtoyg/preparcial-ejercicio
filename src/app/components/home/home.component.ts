import {Component, OnInit} from '@angular/core';
import {RegionService} from '../../services/region.service';
import {Country} from '../../interfaces/country';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public region: string;
  public countries: Array<Country>;
  public loading: boolean;

  constructor(public regionService: RegionService) {
    this.region = 'Europe';
  }


  ngOnInit(): void {
    this.loading = true;

    this.regionService.getByRegion('europe').subscribe(value => {
      this.loading = false;
      this.countries = value;
    }, error => console.error);
  }

}
