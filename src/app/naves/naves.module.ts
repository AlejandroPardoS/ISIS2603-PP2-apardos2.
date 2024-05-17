import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesListComponent } from './naves-list/naves-list.component';
import { NavesDetailComponent } from './naves-detail/naves-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavesListComponent],
  declarations: [NavesListComponent, NavesDetailComponent]
})
export class NavesModule { }
