import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/Services/dataservice/data.service';
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
   @Output() colornote = new EventEmitter<any>(); 
   filterString:any;
   message:any;
   subscription: any;
   isGrid:any = true;

 
  constructor(public dialog: MatDialog, private data:DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => {this.message = message;
      console.log(this.message);
     })
     this.data.gridList.subscribe((flag)=>{this.isGrid=flag;
      console.log(this.isGrid)
    })
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: 'auto', 
      data: note,
    });

    dialogRef.afterClosed().subscribe((result :any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
      
    });
  }

  //this is for archive note nd trash
  recieveArchiveNote(event:any){
    this.archivenote.emit(event);
  }

  getcolornote(event:any){
    this.colornote.emit(event);
  }

}
