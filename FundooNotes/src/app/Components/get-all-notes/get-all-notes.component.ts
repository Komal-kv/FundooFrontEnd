import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  parentMessage: any; //relation between parent to child (parent component.ts)

  
  constructor(private note: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }
  //for getting all notes on the display
  getNotes() {
    this.note.getallnotes().subscribe((res: any) => {
      console.log(res.data);
      this.parentMessage = res.data;
      this.parentMessage.reverse();
      this.parentMessage = this.parentMessage.filter((object: any) => {
        return object.isTrash=== false && object.isArchive === false
       
      })
    });
  }

  //this one is for create note
  receiveMessage(event: any) {
    console.log(event);
    this.getNotes();
  }

  //this one is for update note
  updateData(event :any){
    console.log(event);
    this.getNotes();
  }

  //this one is for archive and trash note
  recieveArchiveNote(event :any){
    console.log(event);
    this.getNotes();
  }

  //this for giving color to note
  getcolornote(event:any){
    console.log(event);
    this.getNotes();
    
  }
}
