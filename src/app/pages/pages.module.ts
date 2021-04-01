import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{ path: '', component: PagesComponent }];

@NgModule({
  declarations: [PagesComponent, MenuComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class PagesModule {}
