import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  result:any;
  constructor(private note :NoteService) { }

  ngOnInit(): void {
    this.trashNote();
  }

  trashNote(){
    this.note.getAllNotesservice().subscribe((resp:any)=>{
      console.log(resp.data);
      this.result = resp.data;
      this.result.reverse();
      this.result = this.result.filter((object: any) => {
        return object.isTrash === true;
      });
    })
  }

  recieveArchiveNote(event:any){
    console.log("trash note", event);
    this.trashNote();
  }

}
