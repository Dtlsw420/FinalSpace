import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {Router} from  '@angular/router'


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  constructor(private ApiService: ApiService,private router: Router) { }
  public locations: Array<any>;
  ngOnInit() {
    this.ApiService.getLocations().then((data) => {
      this.locations = data;
      console.log(data);
    });
  }
  gotTolocation(id){
    this.router.navigateByUrl(`location/${id}`)
  }
}
