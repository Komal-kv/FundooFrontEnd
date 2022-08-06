import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteservice/note.service';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any;
  isTrash:boolean=false;
  isArchive:boolean=false;

  constructor(private note: NoteService,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    let del= this.activatedroute.snapshot.component;
    if (del == TrashComponent) {
      this.isTrash = true;
      console.log(this.isTrash);
    }
    if(del == ArchiveComponent)
    {
      this.isArchive=true;
      console.log(this.isArchive);
    }
    
  }

  archieve() { 
    let data = {
      noteId: this.noteId,
      isArchive: true,
    };
    console.log('note is archieve');
    this.note.archiveNote(data,this.noteId).subscribe((rip: any) => {
        console.log('Archieve Notes are :', rip);  
      });   
  }

  Trashnote() {
    let data = {
      noteId: this.noteId,
      isTrash: true,
    };
    console.log('note is deleted');
    this.note.trashNote(data,this.noteId).subscribe((response: any) => {
        console.log('Deleted Notes are :', response);
      });        
  }
}

