import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'drag', pathMatch:'full'},
  {
    path: 'drag',
    loadChildren: () => import('./modules/dragging/dragging.module').then((m) => m.DraggingModule),
  },
  {
    path: 'muel',
    loadChildren: () => import('./modules/muel/muel.module').then((m) => m.MuelModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
