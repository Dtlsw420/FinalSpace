import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../service/api.service";
import {Router} from  '@angular/router'

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
id={};
episode={};
  constructor( private activeRouter: ActivatedRoute, 
    private service: ApiService,
    private router: Router) { }

  ngOnInit() {
    
    this.id=this.activeRouter.snapshot.paramMap.get("id")
    console.log(this.id)
    this.service.getEpisode(this.id).then((episode) => {
      this.episode = episode;
      console.log(this.episode)
    });
  }
  gotTocharacter(id){
    this.router.navigateByUrl(`character/${id}`)
  }

}
