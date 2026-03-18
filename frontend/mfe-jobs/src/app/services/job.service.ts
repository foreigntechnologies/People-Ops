import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JobPosition, JobFilters } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:5000/api/jobs'; // Assuming Gateway runs on 5000

  constructor(private http: HttpClient) {}

  getJobs(filters: JobFilters): Observable<JobPosition[]> {
    let params = new HttpParams();
    if (filters.search) params = params.set('search', filters.search);
    if (filters.workModel) params = params.set('workModel', filters.workModel);
    if (filters.location) params = params.set('location', filters.location);
    if (filters.techStack) params = params.set('techStack', filters.techStack);
    if (filters.area) params = params.set('area', filters.area);

    // Mock data for immediate preview before backend is up
    return of([
      { id: '1', title: 'Senior Software Engineer', description: 'C# and Angular developer focused on cloud architecture.', workModel: 'Remote', location: 'São Paulo, SP', techStack: 'C#, Angular, PostgreSQL', area: 'Back-end', companyId: 'c1', createdAt: new Date().toISOString() },
      { id: '2', title: 'DevOps Specialist', description: 'AWS, Docker, K8s pipelines and IaC.', workModel: 'Hybrid', location: 'Campinas, SP', techStack: 'Docker, Kubernetes, AWS', area: 'DevOps', companyId: 'c2', createdAt: new Date().toISOString() },
      { id: '3', title: 'Front-end Developer', description: 'React, Next.js, and Tailwind CSS master.', workModel: 'Remote', location: 'Rio de Janeiro, RJ', techStack: 'React, Next.js', area: 'Front-end', companyId: 'c3', createdAt: new Date().toISOString() }
    ]);
  }
}
