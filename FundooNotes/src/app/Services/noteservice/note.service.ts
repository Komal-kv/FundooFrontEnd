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

updatenote(data: any, NoteId:any) {
  console.log(this.token);
  console.log(NoteId);
  
  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice( `https://localhost:44386/Note/UpdateNote?noteId=${NoteId}`, data, true, header );
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

archiveNote(data: any, NoteId:any){
  console.log(this.token);
  console.log(NoteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice(`https://localhost:44386/Note/ArchiveNote?NoteId=${NoteId}`,{ }, true, header);
}

trashNote(data:any,NoteId:any){
  console.log(this.token);
  console.log(NoteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice(`https://localhost:44386/Note/TrashNote?NoteId=${NoteId}`, { }, true, header);
}

ColorNote(data:any,NoteId:any,colour:any){
  console.log(this.token);
  console.log(NoteId);
  console.log(colour);
  

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.putservice(`https://localhost:44386/Note/ColorChangeNote?noteId=${NoteId}`, { }, true, header);
}

DeleteNote(data:any,NoteId:any){
  console.log(this.token);
  console.log(NoteId);

  let header = {
    headers: new HttpHeaders({    
      'Content-Type': 'application/json',
      'Authorization' : 'bearer ' + this.token,
    }),
  };
  return this.httpservice.deleteservice(`https://localhost:44386/Note/DeleteNote?NoteId=${NoteId}`, true, header);
}

}
