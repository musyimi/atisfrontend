import { Component, OnInit } from '@angular/core';
import { Hero } from '../home/hero.model'
import { Content } from '../content.model';
import { Content1 } from '../content1.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  heroes: Hero[] = [
    new Hero('Get to know us', 'https://images.unsplash.com/photo-1598550487031-0898b4852123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neSUyMHNldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60')
  ];

  contents: Content[] = [
    new Content('About Us', 'We are a pioneer digital champion, always been focused on innovation and evolution, thinking about future to make it, to stay ahead as a truly meaningful and purposeful organization. We offer variety of ICT solutions and digital services in several categories including telecommunication, IT, financial technology, digital media, cybersecurity, and other advanced digital solutions, with that we are leading the digital transformation nationally and regionally.')];


  content1: Content1[] = [
    new Content1('More', 'A world leader in Tecommunications Atis Telcom is a leading communications service provider, offering the latest mobility, voice and data solutions to multinational enterprises, telecommunications partners, cloud and application service providers and now fiber to the home Our truly global coverage combined with local on-the-ground knowledge has helped us build best-in-class Africa connections linking Africa, the Americas, Asia Pacific, Europe and the Middle East. Our network supports a portfolio of integrated communications services including connectivity, applications, and tailored solutions integrated and orchestrated by Console Connect, the Atis Telcom on-demand digital Software Defined Interconnection platform, one of the first Africa platforms to fully automate switching and routing of all communications for seamless interconnection. Our commitment to delivering exceptional service for every customer is rooted in a personal approach to doing business. It’s what our people know and do best. We think that’s what makes us different.')];

  constructor() { }

  ngOnInit(): void {
  }

}
