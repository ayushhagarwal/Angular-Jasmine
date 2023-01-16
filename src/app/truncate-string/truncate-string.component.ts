import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truncate-string',
  templateUrl: './truncate-string.component.html',
  styleUrls: ['./truncate-string.component.scss']
})
export class TruncateStringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  longDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
  truncatedString: string;

  public truncateString (){
    if(this.longDescription.length>50){
      this.truncatedString = this.longDescription.slice(0,50);
    }
    else{
      this.truncatedString = this.longDescription;
    }
  }

}
