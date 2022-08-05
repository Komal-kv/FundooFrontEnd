import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
   @Input() childMessage: any;  //input decorator to allow the data to be passed via templates(child componenet.ts)
   @Output() updatedisplay = new EventEmitter<any>();
   @Output() archivenote = new EventEmitter<any>();

 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: 'auto', height : 'auto',
      data: note,
    });

    dialogRef.afterClosed().subscribe((result :any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
      
    });
  }

  //this is for archive note
  recieveArchiveNote(event:any){
    this.archivenote.emit(event);
  }

  //this is for update note
  operation(value: any) {
    this.updatedisplay.emit(value);
  }

}
