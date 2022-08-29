import { Component, OnInit } from '@angular/core';
import {faFacebook, faGoogle, faTwitter,faLinkedin, faYoutube,} from '@fortawesome/free-brands-svg-icons';
import { faHouse, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faHouse = faHouse;
  faEnvelope = faEnvelope;
  faPhone = faPhone;




  constructor() { }

  ngOnInit(): void {
  }

}
