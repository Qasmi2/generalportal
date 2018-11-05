import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaskComponent } from './questionask.component';

describe('QuestionaskComponent', () => {
  let component: QuestionaskComponent;
  let fixture: ComponentFixture<QuestionaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
