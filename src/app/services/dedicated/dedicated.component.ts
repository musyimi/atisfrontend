import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';

@Component({
  selector: 'app-dedicated',
  templateUrl: './dedicated.component.html',
  styleUrls: ['./dedicated.component.css']
})
export class DedicatedComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Dedicated Internet Access', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
