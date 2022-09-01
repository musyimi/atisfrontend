import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Dedicated Cloud Connection', 'https://images.unsplash.com/photo-1644316902396-9bd0558cd771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=100')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
