import { Component, OnInit } from '@angular/core';
import { Hero } from '../../home/hero.model';

@Component({
  selector: 'app-cctv',
  templateUrl: './cctv.component.html',
  styleUrls: ['./cctv.component.css']
})
export class CctvComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Smart home automation.', 
    'https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2N0diUyMGNhbWVyYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
