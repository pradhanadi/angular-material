// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { render, fireEvent, screen } from '@testing-library/angular';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './menu.component';

test('it should open pages menu on button click', async () => {
  
  let component = await render(MenuComponent, {
    imports:[MatMenuModule]
  });
  let buttonCLick = fireEvent.click(screen.getByText('Menu'));
  expect(buttonCLick).toBeTruthy();

  await screen.findByRole('menu');

});