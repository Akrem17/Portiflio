import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {

  constructor() { }
  @Input() date:string | undefined;
  @Input() city:string | undefined;
  @Input() college:string | undefined;
  @Input() field:string | undefined;
  @Input() details:string | undefined;

  @Input() company:string | undefined;
  @Input() position:string | undefined;


  ngOnInit(): void {
    console.log(this.date)
  }

}
