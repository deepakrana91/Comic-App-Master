import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Md5 } from 'ts-md5/dist/md5';


import { Character } from './character.model'
@Injectable()
export class DataService {

  private url: string = "https://gateway.marvel.com:443/v1/public/characters?limit=20&apikey=8f7c054985604b0d7765cc634196b531";
  users: any[]

  ts = '20170926';
  privateKey = "5335048e3461b733f1cf48308a9a8f94f53584d0"
  publicKey = "8f7c054985604b0d7765cc634196b531";

  constructor(private http: Http) {   
  }

  /**Get the character list from the array from marvels sites. */
  getCharacterList(): Observable<any> {

    let hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey);
    console.log(`hash: ${hash}`);

    let url=`https://gateway.marvel.com:443/v1/public/characters?apikey=${this.publicKey}&ts=${this.ts}&hash=${hash}`;

    // this.http.get(url).subscribe(Response => {
    //   console.log(Response);
    // });
    return this.http.get(url).map(response => response.json());
  }

  getCharacterById(id:number) {

    let hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey);
    console.log(`hash: ${hash}`);

    console.log(id);
    let url=`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this.publicKey}&ts=${this.ts}&hash=${hash}`;
    
    return this.http.get(url).map(response => response.json());

    
  }

  getComicById(id:number) {

    let hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey);


    let url=`https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&characters=${id}&orderBy=focDate&limit=10&&apikey=${this.publicKey}&ts=${this.ts}&hash=${hash}`
    
     return this.http.get(url).map(responce => responce.json());

  }

  
  getComicDetailById(id:number){
    let hash = Md5.hashStr(this.ts + this.privateKey + this.publicKey);
    let url=`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${this.publicKey}&ts=${this.ts}&hash=${hash}`

    return this.http.get(url).map(responce => responce.json());
  }
  private handleErrors(error: Response) {
    return Observable.throw(error);
  };

}
