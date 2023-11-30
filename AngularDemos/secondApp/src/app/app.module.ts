import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { SearchPipe } from './search.pipe';
import { ReversePipe } from './reverse.pipe';
import { NameReverseComponent } from './name-reverse/name-reverse.component';
import { BlacklistPipe } from './blacklist.pipe';
import { ProhibitedWordsComponent } from './prohibited-words/prohibited-words.component';
import { IfComponent } from './if/if.component';
import { BuiltinpipeComponent } from './builtinpipe/builtinpipe.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TemplateformsL2Component } from './templateforms-l2/templateforms-l2.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PeopleComponent,
    SearchPipe,
    ReversePipe,
    NameReverseComponent,
    BlacklistPipe,
    ProhibitedWordsComponent,
    IfComponent,
    BuiltinpipeComponent,
    TemplateRefComponent,
    TemplateFormsComponent,
    TemplateformsL2Component,
    RformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
