import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {
  token:any;
  firstname:any;
  lastname:any;
  email:any;

  constructor(private httpservice : HttpService) {
    this.token=localStorage.getItem(`token`);
    this.firstname=localStorage.getItem(`firstName`);
    this.lastname=localStorage.getItem(`lastName`);
    this.email=localStorage.getItem(`email`);

   }

   AddCollaborator(data:any, NoteId:any){
    console.log(this.token);
    console.log(this.firstname);
    
    let header ={
      headers : new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'bearer ' + this.token
      })
    }
    return this.httpservice.postservice(`https://localhost:44386/Collab/AddCollaborator?NoteId=${NoteId}`, data, true, header);
   }

   GetAllCollaborator(){
    console.log(this.token);

    let header ={
      headers : new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'bearer ' + this.token
      })
    }
    return this.httpservice.getservice(`https://localhost:44386/Collab/GetAllCollaborator`,true, header);    
   }

   DeleteCollaborator(NoteId:any){
    console.log(this.token);

    let header ={
      headers : new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'bearer ' + this.token
      })
    }
    return this.httpservice.deleteservice(`https://localhost:44386/Collab/DeleteCollab?NoteId=${NoteId}`, true, header)
   }
}
