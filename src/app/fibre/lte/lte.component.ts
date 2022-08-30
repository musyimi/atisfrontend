import { Component, OnInit } from '@angular/core';
import { Hero } from '../../home/hero.model';

@Component({
  selector: 'app-lte',
  templateUrl: './lte.component.html',
  styleUrls: ['./lte.component.css']
})
export class LteComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('LTE and 5G Wireless Edge Solutions for every network.', 
    'https://images.unsplash.com/photo-1647055168440-846f498a78f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
