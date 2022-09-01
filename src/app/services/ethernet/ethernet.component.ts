import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';

@Component({
  selector: 'app-ethernet',
  templateUrl: './ethernet.component.html',
  styleUrls: ['./ethernet.component.css']
})
export class EthernetComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Ethernet Access', 'https://images.unsplash.com/photo-1554098415-4052459dc340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=100')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
