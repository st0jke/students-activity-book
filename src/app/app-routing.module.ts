import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrikazOdeljenjaComponent } from './prikaz-odeljenja/prikaz-odeljenja.component';

const routes: Routes = [
  {path:"odeljenja", component : PrikazOdeljenjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
