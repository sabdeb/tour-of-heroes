import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero = HEROES[0];


  constructor() {
    console.log(" ~ file: heroes.component.ts ~ line 12 ~ HeroesComponent ~ constructor ~ constructor");
   }

  hero: Hero = {
    id: 1,
    name: 'Winston'
  };


  ngOnInit(): void {
    console.log ("inside ng on init")
  
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
