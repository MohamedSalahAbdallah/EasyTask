import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INewTask, Itask } from '../../itask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() task = new EventEmitter<INewTask>();
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onSubmit() {
    this.task.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
      userId: this.userId,
    });
  }
  onCancel() {
    this.cancel.emit();
  }
}
