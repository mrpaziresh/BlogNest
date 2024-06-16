import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  ngOnInit() {

    console.log('Landing Component');
  }
  constructor(public router: Router) {}
  navigate(path: string){
    this.router.navigate([path])
  }

  protected readonly navigator = navigator;
}
