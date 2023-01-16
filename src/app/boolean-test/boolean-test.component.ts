import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boolean-test',
  templateUrl: './boolean-test.component.html',
  styleUrls: ['./boolean-test.component.scss']
})
export class BooleanTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
