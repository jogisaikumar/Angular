import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }



  log(message: string) {
    setTimeout(()=> {
      alert(message);
    },300);
  }
}
