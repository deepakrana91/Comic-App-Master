import { Comic } from './../comic.model';
import { DataService } from './../../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-edit',
  templateUrl: './comic-edit.component.html',
  styleUrls: ['./comic-edit.component.css']
})
export class ComicEditComponent implements OnInit {

  id:number;
  comic:Comic;
  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id= +params['id'];
        this.dataService.getComicDetailById(this.id).subscribe(
          result => {
            let index = 0;
            let newcomic = new Comic();
            newcomic.id=result.data.results[index].id;
            newcomic.name = result.data.results[index].title;
            newcomic.description = result.data.results[index].description;
            newcomic.imageUrl = result.data.results[index].thumbnail.path+'/landscape_amazing.'+result.data.results[index].thumbnail.extension;
           this.comic= newcomic;
          console.log(this.comic.name)
          }
        )

      }
    );

   
    

  }

}
