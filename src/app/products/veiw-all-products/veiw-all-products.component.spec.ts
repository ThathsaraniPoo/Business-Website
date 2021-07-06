import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwAllProductsComponent } from './veiw-all-products.component';

describe('VeiwAllProductsComponent', () => {
  let component: VeiwAllProductsComponent;
  let fixture: ComponentFixture<VeiwAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwAllProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
