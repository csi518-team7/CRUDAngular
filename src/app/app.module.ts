import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from './todo.service';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    DlDateTimePickerDateModule,
  ],
  providers: [TodoService, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
