import { Component , OnInit} from '@angular/core';
import { ApiService } from '../service/api.service';
import {Router} from  '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private ApiService: ApiService,private router: Router) {}
  public characters: Array<any>;

ngOnInit()
  {
    this.ApiService.getCharacters().then((data) => {
      this.characters = data;
      console.log(data);
    });
  }
  gotTocharacter(id){
    this.router.navigateByUrl(`character/${id}`)
  }
}
