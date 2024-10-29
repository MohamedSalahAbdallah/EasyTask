import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itask } from '../../itask';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Itask;
  @Output() complete = new EventEmitter<string>();

  public completed() {
    return this.complete.emit(this.task.id);
  }
}
