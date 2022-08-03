import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  parentMessage:any;

  constructor( private note :NoteService) { }

  ngOnInit(): void {
    this.getNotes()
  }
  getNotes(){
    this.note.getallnotes().subscribe((res:any)=>{
      console.log(res.data);
      this.parentMessage = res.data;
    })
  }

  receiveMessage(event:any){
    console.log(event);
    this.getNotes();
  }

}
