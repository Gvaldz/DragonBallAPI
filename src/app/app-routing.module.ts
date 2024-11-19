import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CharactersDashboardComponent } from './characters/characters-dashboard/characters-dashboard.component';

const routes: Routes = [
  { path: '',
    component: LoginComponent    
  },
  {
    path: 'inicio',
    component: LoginComponent
  },
  {
    path: 'personajes',
    component: CharactersDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
