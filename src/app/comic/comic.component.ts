import { Comic } from './comic.model';
import { Character } from 'app/character.model';
import { DataService } from './../data.service';
import { CharacterService } from './../character.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {


  characterid:number;
  allComic:Comic[] =[];


  constructor(private charaterService:CharacterService, private dataService:DataService) { }

  ngOnInit() {
    this.characterid= this.charaterService.getid();
  }

  getComics(){
    this.dataService.getComicById(this.characterid).subscribe(
      result => {
        console.log(result);
        for(var index in result.data.results){
          let newComic = new Comic();
          newComic.id=result.data.results[index].id;
          newComic.name = result.data.results[index].title;
          newComic.description = result.data.results[index].description;
          newComic.imageUrl = result.data.results[index].thumbnail.path+'/landscape_large.'+result.data.results[index].thumbnail.extension;
          this.allComic.push(newComic);
        }

        
        
      //  console.log(this.character)
      })
  }




}
