import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteservice/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  // @Input() card: any;
  // @Output() displayicon = new EventEmitter<any>();
  // isArchive: boolean = false;
  // isTrash: boolean = false;
  // noteId: any;
  // noteListId: any;


  constructor(private note: NoteService) { }

  ngOnInit(): void {
    // this.archieve();
    // this.TrashNote();
  }

  // archieve() {
  //   this.noteListId = [this.card.noteId];
  //   let data = {
  //     noteId: [this.card.noteId],
  //     isArchive: true,
  //   };
  //   console.log("note is archive");
  //   this.note.archiveNote(data, this.noteId).subscribe((res: any) => {
  //   this.displayicon.emit(res);
  //   console.log("archive note success", res);

  //   });
  // }

  // TrashNote(){
  //   let data={
  //     noteId:this.card.noteId,
  //     isTrash:true,
  //   };
  //   console.log("note is trashed");
  //   this.note.trashNote(data,this.noteId).subscribe((res:any)=>{
  //   this.displayicon.emit(res);
  //   console.log("Trashed notes are:", res);
  //   });
    
 // }


}

