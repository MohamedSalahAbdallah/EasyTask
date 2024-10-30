import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Itask, INewTask } from '../itask';
import { NewTaskComponent } from './new-task/new-task.component';
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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  public get selectedUserTasks(): Itask[] {
    return this.tasks.filter((task) => task.userId === this.id);
  }
  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  addTask() {
    this.addTaskIdentifier = true;
  }

  onAddTask(newTask: INewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      dueDate: newTask.dueDate,
      summary: newTask.summary,
      title: newTask.title,
      userId: newTask.userId,
    });
    this.addTaskIdentifier = false;
  }

  onCancel() {
    this.addTaskIdentifier = false;
  }
}
