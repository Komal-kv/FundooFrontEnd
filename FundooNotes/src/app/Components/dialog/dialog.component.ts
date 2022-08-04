import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<any>();
  title:any;
  description:any;
  colour:any;
  noteId:any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private note: NoteService) {
    this.title = this.data.title;
    this.description = this.data.description;
    this.colour = this.data.colour;
    this.noteId = this.data.noteId;
   }

  ngOnInit(): void {
    console.log("inside update", this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    //console.log(this.title, this.description);
    let data ={
      title:this.title,
      description:this.description,
      colour: "white",
    }

    this.note.updatenote(data,this.noteId).subscribe((res :any)=>{
      console.log("note updated", res);
      this.updatedisplay.emit(res)
    })
  }

}
