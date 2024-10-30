import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Itask, INewTask } from '../itask';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
// import { dummyTasks } from '../dummy-tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  addTaskIdentifier = false;

  constructor(private tasksService: TasksService) {}

  public get selectedUserTasks() {
    return this.tasksService.getTasksByUserId(this.id);
  }
  completeTask(taskId: string) {}

  addTask() {
    this.addTaskIdentifier = true;
  }

  onAddTask() {
    // this.tasksService.addTask(newTask);
    this.addTaskIdentifier = false;
  }

  onCancel() {
    this.addTaskIdentifier = false;
  }
}
