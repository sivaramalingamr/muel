import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuelRoutingModule } from './muel-routing.module';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { DropElementComponent } from './components/drop-element/drop-element.component';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { DraggingModule } from '../dragging/dragging.module';

@NgModule({
  declarations: [    
    DragDropComponent,
    DropElementComponent,
    MatCardComponent
  ],
  imports: [
    CommonModule,
    MuelRoutingModule,
    DraggingModule
  ]
})
export class MuelModule { }
