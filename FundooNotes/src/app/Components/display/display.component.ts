import { Component, Input, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
   @Input() childMessage: any;
 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: note,
    });

    dialogRef.afterClosed().subscribe((result :any) => {
      console.log('The dialog was closed');
      
    });
  }

}
