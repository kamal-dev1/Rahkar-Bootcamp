import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServerDataComponent } from './get-server-data.component';

describe('GetServerDataComponent', () => {
  let component: GetServerDataComponent;
  let fixture: ComponentFixture<GetServerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetServerDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
