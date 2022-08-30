import { Component, OnInit } from '@angular/core';
import { faHouse, faShield, faWifi, faTv, faCameraRetro, faServer} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-fibrecomponent',
  templateUrl: './fibrecomponent.component.html',
  styleUrls: ['./fibrecomponent.component.css']
})
export class FibrecomponentComponent implements OnInit {
  faHouse = faHouse;
  faShield = faShield;
  faWifi = faWifi;
  faTv = faTv;
  faCameraRetro = faCameraRetro;
  faServer = faServer;

  constructor() { }

  ngOnInit(): void {
  }

}
