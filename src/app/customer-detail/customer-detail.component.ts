import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent {

  @Input() customer!: Customer;
  @Output() updateCustomer:EventEmitter<Customer> = new EventEmitter<Customer>()


  public update() {
    this.updateCustomer.emit(this.customer);
  }

}
