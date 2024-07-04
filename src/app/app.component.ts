import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CustomerListComponent],
  providers:[LoggerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImportExportExample';
  
 
}
