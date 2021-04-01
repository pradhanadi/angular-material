
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { render } from '@testing-library/angular';
import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;

  test('should create the app', () => {
    render(PagesComponent, {
      schemas: [NO_ERRORS_SCHEMA]
    });
  });
});
