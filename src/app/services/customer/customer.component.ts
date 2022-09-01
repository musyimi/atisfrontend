import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Customer Equipment', 'https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=90')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
