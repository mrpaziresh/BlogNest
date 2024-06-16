import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCoreComponent } from './post-core.component';

describe('PostCoreComponent', () => {
  let component: PostCoreComponent;
  let fixture: ComponentFixture<PostCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCoreComponent]
    });
    fixture = TestBed.createComponent(PostCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
