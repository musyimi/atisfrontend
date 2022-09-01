import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';

@Component({
  selector: 'app-wildix',
  templateUrl: './wildix.component.html',
  styleUrls: ['./wildix.component.css']
})
export class WildixComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Wildix', 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=100')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
