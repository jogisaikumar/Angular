import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
  isVisible: boolean = true;

  @Output() isOpen = new EventEmitter<string>();
  @Output() isClose = new EventEmitter<string>();
  toggle() {
    this.isVisible = !this.isVisible;
    if(this.isVisible) {
      this.isOpen.emit('');
    } else {
      this.isClose.emit('');
    }
  }
}
