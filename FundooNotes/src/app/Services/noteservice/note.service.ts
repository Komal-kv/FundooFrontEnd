import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private httpservice : HttpService) { 
    this.token=localStorage.getItem(`token`)
  }

  addNote(data:any){
    console.log(this.token);
    
    let header ={
      headers : new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'bearer ' + this.token
      })
  }
  return this.httpservice.postservice(`https://localhost:44386/Note/AddNote`, data, true, header)
}

getallnotes(){
  console.log(this.token);
  
  let header ={
    headers : new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'bearer ' + this.token
    })
}
return this.httpservice.getservice(`https://localhost:44386/Note/GetAllNote`, true, header)
}

updatenote(data: any, noteId:any) {
  console.log(this.token);
  console.log(noteId);
  
  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice( `https://localhost:44386/Note/UpdateNote/${noteId}`, data, true, header );
}

getAllNotesservice() {


  let header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':  'bearer ' + this.token		
    })

  }
  
  return this.httpservice.getservice(`https://localhost:44386/Note/GetAllNote`,true,header)
  
}

archiveNote(data: any, noteId:any){
  console.log(this.token);
  console.log(noteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice(`https://localhost:44386/Note/ArchiveNote/${noteId}`,data, true, header);
}

trashNote(data:any,noteId:any){
  console.log(this.token);
  console.log(noteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice(`https://localhost:44386/Note/TrashNote/${noteId}`,data, true, header);
}

}
