import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggingRoutingModule } from './dragging-routing.module';
import { ContainerCardComponent } from './components/container-card/container-card.component';


@NgModule({
  declarations: [ContainerCardComponent],
  imports: [
    CommonModule,
    DraggingRoutingModule
  ],
  exports:[ContainerCardComponent]
})
export class DraggingModule { }
