import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwProductsByDateComponent } from './veiw-products-by-date.component';

describe('VeiwProductsByDateComponent', () => {
  let component: VeiwProductsByDateComponent;
  let fixture: ComponentFixture<VeiwProductsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwProductsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwProductsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
