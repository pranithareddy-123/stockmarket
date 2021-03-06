import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCompanyComponent } from './comparecompany.component';

describe('ComparecompanyComponent', () => {
  let component: CompareCompanyComponent;
  let fixture: ComponentFixture<CompareCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
