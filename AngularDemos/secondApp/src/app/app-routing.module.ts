import { AddPersonComponent } from './add-person/add-person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { IfComponent } from './if/if.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateformsL2Component } from './templateforms-l2/templateforms-l2.component';
import { RformComponent } from './rform/rform.component';
import { LoginComponent } from './login/login.component';
import { CheckTokenService } from './check-token.service';
import { AccessRouteParamsComponent } from './access-route-params/access-route-params.component';
import { T1ContainerComponent } from './t1-container/t1-container.component';
import { T2ContainerComponent } from './t2-container/t2-container.component';
import { UseDirectiveComponent } from './use-directive/use-directive.component';

const routes: Routes = [
  {path:'person/add', component:AddPersonComponent},
  {path:'people', component:PeopleComponent},
  {path:'if', component:IfComponent},
  {path:'template', component:TemplateRefComponent},
  {path:'templateform', component:TemplateFormsComponent},
  {path:'template/l2',component:TemplateformsL2Component, canActivate:[CheckTokenService]},
  {path:'react',component:RformComponent},
  {path:'login', component:LoginComponent},
  {path:'access/:p1/:p2', component:AccessRouteParamsComponent},
  {path:'c2c/type1', component:T1ContainerComponent},
  {path:'c2c/type2', component:T2ContainerComponent},
  {path:'highlight', component:UseDirectiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
