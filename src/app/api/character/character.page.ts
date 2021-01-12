import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  id = null;
  character ={};

  constructor(private activeRouter: ActivatedRoute,
    private service: ApiService,) { }

  ngOnInit() {
    {
      this.id = this.activeRouter.snapshot.paramMap.get("id");
      this.service.getCharacter(this.id).then((character) => {
        this.character = character;
      });
    }
   
  }

}
