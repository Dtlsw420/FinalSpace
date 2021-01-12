import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../service/api.service";
import {Router} from  '@angular/router'

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  id={};
  location={};
  constructor(private activeRouter: ActivatedRoute, 
    private service: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.id=this.activeRouter.snapshot.paramMap.get("id")
    console.log(this.id)
    this.service.getLocation(this.id).then((location) => {
      this.location = location;
      console.log(this.location)
    });
  }
  gotTocharacter(id){
    this.router.navigateByUrl(`character/${id}`)
  }

}
