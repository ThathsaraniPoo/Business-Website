import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePackComponent } from './side-pack.component';

describe('SidePackComponent', () => {
  let component: SidePackComponent;
  let fixture: ComponentFixture<SidePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
