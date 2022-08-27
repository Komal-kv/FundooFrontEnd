import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollaboratorService } from 'src/app/Services/collabservice/collaborator.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @Output() updatedisplay = new EventEmitter<any>();
  CollaboratorEmail:any;
  firstname: string = 'Komal'; 
  lastname: string = 'Vairagade';
  email: string = 'divya';

  getFullName(){
    return this.firstname + ' ' + this.lastname;
  }
  
  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private collaborator:CollaboratorService) { }

  ngOnInit(): void {
    console.log("Add collaborator "); 
    
  }

  close(){
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.CollaboratorEmail);
    let data ={
      CollaboratorEmail: this.CollaboratorEmail
    }
    console.log(data);
    this.collaborator.AddCollaborator(data,this.data.noteId).subscribe((res :any)=>{
      console.log("Collaborator added", res);
      this.close();
      this.updatedisplay.emit(res);
    })
    
  }
}
