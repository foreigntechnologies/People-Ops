import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobFilters } from '../../models/job.model';

@Component({
  selector: 'app-job-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-filters.component.html',
  styleUrls: ['./job-filters.component.css']
})
export class JobFiltersComponent {
  @Output() filtersChanged = new EventEmitter<JobFilters>();

  filters: JobFilters = {
    search: '',
    workModel: '',
    location: '',
    techStack: '',
    area: ''
  };

  applyFilters() {
    this.filtersChanged.emit({ ...this.filters });
  }

  clearFilters() {
    this.filters = { search: '', workModel: '', location: '', techStack: '', area: '' };
    this.applyFilters();
  }
}
