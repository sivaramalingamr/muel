import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggingRoutingModule } from './dragging-routing.module';
import { ContainerCardComponent } from './components/container-card/container-card.component';
import { NgDragDropModule } from 'ng-drag-drop';

@NgModule({
  declarations: [ContainerCardComponent],
  imports: [
    CommonModule,
    DraggingRoutingModule,
    NgDragDropModule.forRoot()
  ],
  exports:[ContainerCardComponent]
})
export class DraggingModule { }
