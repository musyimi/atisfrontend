import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';

@Component({
  selector: 'app-broadband',
  templateUrl: './broadband.component.html',
  styleUrls: ['./broadband.component.css']
})
export class BroadbandComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('BroadBand Internet Access', 'https://images.unsplash.com/photo-1603736128636-1abafb08d099?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=100')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
