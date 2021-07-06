import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwAllProductsByCategoryComponent } from './veiw-all-products-by-category.component';

describe('VeiwAllProductsByCategoryComponent', () => {
  let component: VeiwAllProductsByCategoryComponent;
  let fixture: ComponentFixture<VeiwAllProductsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwAllProductsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwAllProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
