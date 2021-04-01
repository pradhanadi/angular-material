import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  test('should create the app', () => {
    render(AppComponent, {
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

});
