import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let login: LoginComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      providers: [CookieService],
    });

    fixture = TestBed.createComponent(LoginComponent);
    login = fixture.componentInstance;
    de = fixture.debugElement;

  }));

  it('should be created', () => {
    expect(login).toBeDefined();
  });
});

