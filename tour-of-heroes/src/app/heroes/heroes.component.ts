import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected Hero ${hero.name} with id=${hero.id} and type=${hero.type}`);
  }

  getHeroes(){
    this.heroService.getHeroes().
    subscribe(heroes => this.heroes = heroes); 
  }

}
