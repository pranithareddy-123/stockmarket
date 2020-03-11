import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydataComponent } from './companydata.component';

describe('CompanydataComponent', () => {
  let component: CompanydataComponent;
  let fixture: ComponentFixture<CompanydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
