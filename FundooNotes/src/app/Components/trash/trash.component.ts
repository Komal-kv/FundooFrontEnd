import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  trashnote:any;
  constructor(private note :NoteService) { }

  ngOnInit(): void {
    this.trashNote();
  }

  trashNote(){
    this.note.getAllNotesservice().subscribe((res:any)=>{
      console.log(res.data);
      this.trashnote = res.data;
      this.trashnote.reverse();
      this.trashnote = this.trashnote.filter((object: any) => {
        return object.isTrash === true;
      });
    })
  }

  recieveArchiveNote(event:any){
    console.log("trash note", event);
    this.trashNote();
  }

}
