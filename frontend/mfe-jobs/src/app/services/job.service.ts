import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosition, JobFilters } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:5000/api/jobs'; 

  constructor(private http: HttpClient) {}

  getJobs(filters: JobFilters): Observable<JobPosition[]> {
    let params = new HttpParams();
    if (filters.search) params = params.set('search', filters.search);
    if (filters.workModel) params = params.set('workModel', filters.workModel);
    if (filters.location) params = params.set('location', filters.location);
    if (filters.techStack) params = params.set('techStack', filters.techStack);
    if (filters.area) params = params.set('area', filters.area);

    return this.http.get<JobPosition[]>(this.apiUrl, { params });
  }
}
