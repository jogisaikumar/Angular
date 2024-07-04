import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private loggerService: LoggerService, private router: Router) {}
  
  alertLog() {
    this.loggerService.log('button Clicked');
  }
  goToCustomerList() {
    this.router.navigateByUrl('CustomerList');
  }

  goToZippy() {
    this.router.navigateByUrl('ParentZippy');
  }
  goToObservableExample() {
    this.router.navigateByUrl('Observable')
  }

  goToTemplateDrivenForms() {
    this.router.navigateByUrl('TemplateForms')
  }
}
