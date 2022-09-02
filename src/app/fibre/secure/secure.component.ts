import { Component, OnInit } from '@angular/core';
import { Hero } from '../../home/hero.model'; 

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  heroes: Hero[] = [
    new Hero('Complete protection of personal data and parental control', 
    'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyZW50YWwlMjBjb250cm9sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=70')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
