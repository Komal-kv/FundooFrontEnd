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
  isTrash: boolean = false;
  isArchive: boolean = false;
  @Input() notedata: any;
  @Output() displayicons = new EventEmitter<string>();
  @Output() colornote = new EventEmitter<any>(); 
 


  colorarray = [{ Colorcode: "DeepSkyBlue" }, { Colorcode: "Orange" }, { Colorcode: "Yellow" }, { Colorcode: "SpringGreen" },
  { Colorcode: "Pink" }, { Colorcode: "Cornsilk" }, { Colorcode: "Gainsboro" }, { Colorcode: "White" },
  { Colorcode: "HotPink" }, { Colorcode: "fuchsia" }, { Colorcode: "lightcoral" }, { Colorcode: "Aquamarine" }];

  constructor(private note: NoteService, private activatedroute: ActivatedRoute, private sanv: MatSnackBar) { }

  ngOnInit(): void {
    let del = this.activatedroute.snapshot.component;
    if (del == TrashComponent) {
      this.isTrash = true;
      console.log(this.isTrash);
    }
    if (del == ArchiveComponent) {
      this.isArchive = true;
      console.log(this.isArchive);
    }

    console.log("notedata", this.notedata);
    
  }

  archieve() {
    let data = {
      isArchive: true,
    };
    console.log('note is archieve');
    this.note.archiveNote(data, this.notedata.noteId).subscribe((rip: any) => {
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
    console.log('Note is trashed');
    this.note.trashNote(data, this.notedata.noteId).subscribe((response: any) => {
      console.log('Trash Notes are :', response);
      this.displayicons.emit(response);
      this.sanv.open('Trash note successfully', '', {
        duration: 3000,
      })
    });
  }

  ColorNote(colour: any) {
    console.log(this.notedata);
    this.notedata.colour = colour;
    let data = {  
      colour: colour,
      noteId:this.notedata.noteId
    };
    console.log('Note is colored');
    this.note.ColorNote(data).subscribe((res: any) => {
      console.log('Color note :', res);
      this.colornote.emit(res);
      this.sanv.open('Color note successfully', '', {
        duration: 3000,
      })
    });
  }

  Unarchieve() {
    let data = {
      isArchieve: false,
    };
    console.log('Note is unarchieve');
    this.note.archiveNote(data, this.notedata.noteId).subscribe((response: any) => {
      console.log('Unarchive note :', response);
      this.displayicons.emit(response);
      this.sanv.open('Unarchive note successfully', '', {
        duration: 3000,
      })
    });
  }

  Restorenote(){
    let data = {
      isTrash: false,
    };
    console.log('Note is restored');
    this.note.trashNote(data, this.notedata.noteId).subscribe((response: any) => {
      console.log('Restore note :', response);
      this.displayicons.emit(response);
      this.sanv.open('Restore note successfully', '', {
        duration: 3000,
      })
    });
  }

  Deletenote(){
    let data = {
      isTrash: true,
    };
    console.log('Note is deleted');
    this.note.DeleteNote(data, this.notedata.noteId).subscribe((response: any) => {
      console.log('Deleted Notes are :', response);
      this.displayicons.emit(response);
      this.sanv.open('Delete note successfully', '', {
        duration: 3000,
      })
    });
  }

}

