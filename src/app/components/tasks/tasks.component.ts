import { Component } from '@angular/core';

import { Task } from '../../model/Task';
import { TASKS } from '../../mock-tasks';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
