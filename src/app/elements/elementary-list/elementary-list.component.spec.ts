import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementaryListComponent } from './elementary-list.component';

describe('ElementaryListComponent', () => {
  let component: ElementaryListComponent;
  let fixture: ComponentFixture<ElementaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
