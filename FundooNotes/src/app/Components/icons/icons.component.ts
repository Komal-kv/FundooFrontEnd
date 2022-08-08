import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteservice/note.service';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isTrash:boolean=false;
  isArchive:boolean=false;
  @Input() notedata:any;
  @Output() displayicons = new EventEmitter<string>();
  colorarray = [{Colorcode:"Red"},{Colorcode:"Orange"},{Colorcode:"Yellow"},{Colorcode:"Green"},
                {Colorcode:"Pink"},{Colorcode:"Brown"},{Colorcode:"Gray"},{Colorcode:"Purple"},
                {Colorcode:"Indigo"},{Colorcode:"fuchsia"},{Colorcode:"lightcoral"},{Colorcode:"lime"}];

  constructor(private note: NoteService,private activatedroute: ActivatedRoute,private sanv:MatSnackBar) { }

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
      isArchive: true,
    };
    console.log('note is archieve');
    this.note.archiveNote(data,this.notedata.noteId).subscribe((rip: any) => {
        console.log('Archieve Notes are :', rip);  
        this.displayicons.emit(rip);
        this.sanv.open('Archive note successfully', '', {
          duration: 3000,
        })
        
      });   
  }

  Trashnote() {
    let data = {
      isTrash: true,
    };
    console.log('note is deleted');
    this.note.trashNote(data,this.notedata.noteId).subscribe((response: any) => {
        console.log('Deleted Notes are :', response);
        this.displayicons.emit(response);
        this.sanv.open('Trash note successfully', '', {
          duration: 3000,
        })
      });        
  }

  ColorNote(color:any) {
    this.notedata.color=color;
    let data = {
      colour:color
    };
    console.log('Note is colored');
    this.note.ColorNote(data,this.notedata.noteId).subscribe((res: any) => {
        console.log('Color note :', res);
        this.displayicons.emit(res);
        this.sanv.open('Color note successfully', '', {
          duration: 3000,
        })
      });        
      
  }

}

