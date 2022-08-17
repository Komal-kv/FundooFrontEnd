import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(' ');
  currentMessage = this.messageSource.asObservable();

  private isGrid = new BehaviorSubject(true);
  gridList = this.isGrid.asObservable();

  private printmsg = new BehaviorSubject('');
  recievedMessage = this.printmsg.asObservable();
  
  constructor() { }

  //for search function
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  //for changing grid to list view
  changeView(flag: boolean){
    this.isGrid.next(flag)
  }

  //practice purpose
  demoView(message : any){
    this.printmsg.next(message)
  }


}
