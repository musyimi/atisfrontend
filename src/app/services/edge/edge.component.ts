import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';


@Component({
  selector: 'app-edge',
  templateUrl: './edge.component.html',
  styleUrls: ['./edge.component.css']
})
export class EdgeComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Edge SD-WAN', 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=100')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
