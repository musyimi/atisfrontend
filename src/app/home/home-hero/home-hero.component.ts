import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero.model';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.css']
})
export class HomeHeroComponent implements OnInit {

  heroes: Hero[] = [
    new Hero('Connecting Africa','https://images.unsplash.com/photo-1533664488202-6af66d26c44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=100')
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
