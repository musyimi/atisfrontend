import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';

@Component({
  selector: 'app-hybrid',
  templateUrl: './hybrid.component.html',
  styleUrls: ['./hybrid.component.css']
})
export class HybridComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Hybrid Dynamic Network', 'https://images.unsplash.com/photo-1508404999913-79a3a2e75437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=100')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
