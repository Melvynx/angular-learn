import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'random', component: RandomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
