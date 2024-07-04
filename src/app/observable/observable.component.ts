import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {
  timeObservable = new Observable<string>(listener => {
    const intervalId = setInterval(()=> listener.next(new Date().toString()), 2000);

    setTimeout(() => {
      clearInterval(intervalId);
      listener.complete(); // Notify observers that the observable is complete
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  });
}
