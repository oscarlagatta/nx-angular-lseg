import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntityFeatureSearchComponent } from './entity-feature-search.component';

describe('EntityFeatureSearchComponent', () => {
  let component: EntityFeatureSearchComponent;
  let fixture: ComponentFixture<EntityFeatureSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityFeatureSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntityFeatureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
