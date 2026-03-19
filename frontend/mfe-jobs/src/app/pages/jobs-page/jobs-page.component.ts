import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { JobService } from '../../services/job.service';
import { JobPosition, JobFilters } from '../../models/job.model';
import { JobCardComponent } from '../../components/job-card/job-card.component';
import { JobFiltersComponent } from '../../components/job-filters/job-filters.component';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [CommonModule, JobCardComponent, JobFiltersComponent, TranslateModule],
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit {
  jobs: JobPosition[] = [];
  isLoading = false;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobs({});
  }

  onFiltersChanged(filters: JobFilters) {
    this.loadJobs(filters);
  }

  private loadJobs(filters: JobFilters) {
    this.isLoading = true;
    this.jobService.getJobs(filters).subscribe({
      next: (data) => {
        this.jobs = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching jobs', err);
        this.isLoading = false;
      }
    });
  }
}
