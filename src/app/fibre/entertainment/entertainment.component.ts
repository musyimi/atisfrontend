import { Component, OnInit } from '@angular/core';
import { Hero } from '../../home/hero.model'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Catch up on the latest blockbuster movies', 
    'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
