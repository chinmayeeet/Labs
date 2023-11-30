import { AddPersonComponent } from './add-person/add-person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { IfComponent } from './if/if.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateformsL2Component } from './templateforms-l2/templateforms-l2.component';
import { RformComponent } from './rform/rform.component';

const routes: Routes = [
  {path:'person/add', component:AddPersonComponent},
  {path:'people', component:PeopleComponent},
  {path:'if', component:IfComponent},
  {path:'template', component:TemplateRefComponent},
  {path:'templateform', component:TemplateFormsComponent},
  {path:'template/l2',component:TemplateformsL2Component},
  {path:'react',component:RformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
