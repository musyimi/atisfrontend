import { Component, OnInit } from '@angular/core';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home-sec5',
  templateUrl: './home-sec5.component.html',
  styleUrls: ['./home-sec5.component.css']
})
export class HomeSec5Component implements OnInit {

  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
