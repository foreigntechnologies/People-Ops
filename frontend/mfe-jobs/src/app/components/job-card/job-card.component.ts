import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPosition } from '../../models/job.model';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job!: JobPosition;
}
