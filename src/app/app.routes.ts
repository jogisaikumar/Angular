import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { ParentZippyComponent } from './parent-zippy/parent-zippy.component';
import { ObservableComponent } from './observable/observable.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    { path: 'CustomerList', component: CustomerListComponent },
    {path: 'ParentZippy', component: ParentZippyComponent},
    {path: 'Observable' , component: ObservableComponent},
    {path: 'TemplateForms', component: SignUpComponent},
    
];
