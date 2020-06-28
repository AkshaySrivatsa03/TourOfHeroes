import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(
    private messageService:MessageService,
    private http:HttpClient
    ) { }
  
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes():Observable<Hero[]> {
    this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number):Observable<Hero>{
    let hero = of(HEROES.find(hero => hero.id === id));
    this.log(`HeroService: fetched hero with id=${id}`);
    return hero
  }
}
