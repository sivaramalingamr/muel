import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropElementComponent } from './drop-element.component';

describe('DropElementComponent', () => {
  let component: DropElementComponent;
  let fixture: ComponentFixture<DropElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
