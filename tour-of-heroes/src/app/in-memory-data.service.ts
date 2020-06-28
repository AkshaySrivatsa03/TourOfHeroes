import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      {id: 1, name: 'WindRanger', type: 'Intelligence'},
      {id: 2, name: 'Drow Ranger', type: 'Agility'},
      {id: 3, name: 'Queen of Pain', type: 'Intelligence'},
      {id: 4, name: 'Vengeful Spirit', type: 'Intelligence'},
      {id: 5, name: 'Mirana', type: 'Agility'},
      {id: 6, name: 'Medusa', type: 'Agility'},
      {id: 7, name: 'Legion Commander', type: 'Strength'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
