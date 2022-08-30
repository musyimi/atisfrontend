import { Component, OnInit } from '@angular/core';
import {Hero } from '../../home/hero.model'

@Component({
  selector: 'app-homefibre',
  templateUrl: './homefibre.component.html',
  styleUrls: ['./homefibre.component.css']
})
export class HomefibreComponent implements OnInit {

  heroes: Hero[] = [
    new Hero('Enjoy every moment with Atis smart home access', 
    'https://images.unsplash.com/photo-1517181875630-f72350452109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlicmUlMjBvcHRpY3N8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
