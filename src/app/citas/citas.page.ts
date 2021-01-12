import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {Router} from  '@angular/router'

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  constructor(private ApiService: ApiService,private router: Router) { }
  public citas: Array<any>;
  ngOnInit()  {
    this.ApiService.getCitas().then((data) => {
      this.citas = data;
      console.log(data);
    });
    
  }
  gotTocharacter(id){
    this.router.navigateByUrl(`character/${id}`)
  }

}
