import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
@Input() title!: string;
@Input() position!: string;
@Input() details!: string;
@Input() imgUrl!: string;

displayOn:string="displayOn"
displayOff:string="displayOff"

openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponentComponent, {
    width: '250px'
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

constructor(    private breakpointObserver: BreakpointObserver,public dialog: MatDialog) { 


  
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


  ngOnInit(): void {
  }

  
}







