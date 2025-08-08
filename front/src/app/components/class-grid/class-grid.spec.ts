import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassGrid } from './class-grid';

describe('ClassGrid', () => {
  let component: ClassGrid;
  let fixture: ComponentFixture<ClassGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
