import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-multiply-test',
  templateUrl: './multiply-test.component.html',
  styleUrls: ['./multiply-test.component.scss']
})
export class MultiplyTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num1: number;
  num2: number;
  result: number;
  onChange(){
    this.result = this.num1 * this.num2;
  }

}
