import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  btnClicked= false;
  clicks = [];
  n = 0;

  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.btnClicked = true;
    this.n++;
    this.clicks.push(this.n);
  }

  getBgColor() {
    return this.n >= 5 ? 'blue' : 'white';
  }

}
