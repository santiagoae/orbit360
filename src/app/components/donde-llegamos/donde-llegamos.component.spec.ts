import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeLlegamosComponent } from './donde-llegamos.component';

describe('DondeLlegamosComponent', () => {
  let component: DondeLlegamosComponent;
  let fixture: ComponentFixture<DondeLlegamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DondeLlegamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DondeLlegamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
