import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {

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


  displayOn:string="displayOn"
  displayOff:string="displayOff"
  

  constructor(    private breakpointObserver: BreakpointObserver) { 
      this.breakpointObserver.observe([
        "(max-width: 768px)"
      ]).subscribe((result: BreakpointState) => {
        if (result.matches) {
            
                this.displayOff=""
                this.displayOn="displayOff"
               
        } else {
          this.displayOff="displayOff"
          this.displayOn=""

        }
    })
  }
}
