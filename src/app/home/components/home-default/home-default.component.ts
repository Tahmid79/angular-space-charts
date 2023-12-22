import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-default',
  templateUrl: './home-default.component.html',
  styleUrls: ['./home-default.component.scss']
})
export class HomeDefaultComponent implements OnInit {
  constructor(public router: Router){}

  ngOnInit(): void {
    this.isLinkActive('');
  }

  isLinkActive(link: any) {
    const url = this.router.url;
    return link.id === url.substring(1, url.indexOf('?'));
  }
}
