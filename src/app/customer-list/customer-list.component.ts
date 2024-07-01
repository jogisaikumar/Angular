import { ChangeDetectorRef, Component } from '@angular/core';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CustomerDetailComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customers: Customer[] = [
    { customerNo: 1, customerName: 'Rahul Dravid', address: '', city: 'Bangalore', state: 'Karnataka', country: 'India' },
    { customerNo: 2, customerName: 'Sachin Tendulkar', address: '', city: 'Mumbai', state: 'Maharashtra', country: 'India' },
    { customerNo: 3, customerName: 'Sourav Ganguly', address: '', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { customerNo: 4, customerName: 'Mahendra Singh Dhoni', address: '', city: 'Ranchi', state: 'Jharkhand', country: 'India' },
    { customerNo: 5, customerName: 'Virat Kohli', address: '', city: 'Delhi', state: 'Delhi', country: 'India' },
  ];

  public selectedCustomer!: Customer;
  constructor(private cdr: ChangeDetectorRef) {

    this.selectedCustomer = new Customer;
  }

  public showDetails(customer: Customer) {
    this.selectedCustomer = {...customer}
  }

  public update(updatedCustomer: Customer) {
    const index = this.customers.findIndex(cust => cust.customerNo === updatedCustomer.customerNo);
    if(index !== -1){
      this.customers[index] = updatedCustomer;
      this.cdr.detectChanges();
      setTimeout(() => {
        alert("Customer Updated Succesfully!!")
      }, 0)
    }
  }

}
