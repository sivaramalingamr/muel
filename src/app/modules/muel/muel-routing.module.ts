import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { DropElementComponent } from './components/drop-element/drop-element.component';

const routes: Routes = [
  { path: '', component: DragDropComponent },
  { path: 'card', component: DropElementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuelRoutingModule { }
