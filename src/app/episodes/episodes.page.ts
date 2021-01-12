import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {Router} from  '@angular/router'


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  constructor(private ApiService: ApiService,private router: Router) { }
  public episodes: Array<any>;
  ngOnInit() {
    this.ApiService.getEpisodes().then((data) => {
      this.episodes = data;
      console.log(data);
    });
    
  }
  gotToepisode(id){
    this.router.navigateByUrl(`episode/${id}`)
  }

}
