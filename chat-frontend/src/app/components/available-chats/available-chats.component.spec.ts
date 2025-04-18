import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableChatsComponent } from './available-chats.component';

describe('AvailableChatsComponent', () => {
  let component: AvailableChatsComponent;
  let fixture: ComponentFixture<AvailableChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableChatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
