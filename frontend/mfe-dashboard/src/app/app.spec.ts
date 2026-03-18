import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.ts';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent (MFE Dashboard)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}) }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
