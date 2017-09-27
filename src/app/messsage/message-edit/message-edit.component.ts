import { CharacterService } from './../../character.service';
import { DataService } from 'app/data.service';
import { Character } from './../../character.model';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {

  id:number;
  character:Character;
  constructor(private route:ActivatedRoute,private dataService:DataService,
              private characterService:CharacterService ) { }


  ngOnInit() {
    
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      
        this.dataService.getCharacterById(this.id).subscribe(
          result => {
            let index = 0;
            let newCharacter = new Character();
            newCharacter.id=result.data.results[index].id;
            newCharacter.name = result.data.results[index].name;
            newCharacter.description = result.data.results[index].description;
            newCharacter.imageUrl = result.data.results[index].thumbnail.path+'/landscape_large.'+result.data.results[index].thumbnail.extension;
           this.character = newCharacter;
          //  console.log(this.character)
          }
        )
      }
    );
        
      
  }

  setId(){
    this.characterService.setid(this.character.id);
  }
  
  

}
