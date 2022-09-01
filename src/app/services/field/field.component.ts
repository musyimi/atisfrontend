import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/home/hero.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  heroes: Hero[] = [
    new Hero('Field Service', 'https://images.unsplash.com/photo-1618522285348-1357236b7121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=90')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
