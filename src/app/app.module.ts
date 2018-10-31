import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from "@angular/router";
import { TodoService } from './todo.service';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { AdminFrontComponent } from './admin-front/admin-front.component';
import { EventListPageComponent } from './event-list-page/event-list-page.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AdminFrontComponent,
    EventListPageComponent,
    CreateEventComponent,
    GlobalHeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    DlDateTimePickerDateModule,
    RouterModule.forRoot([
      { path: "", component: AdminFrontComponent }, 
      { path: "eventList", component: EventListPageComponent },  
      { path: "createEvent", component: CreateEventComponent },  
    ])
  ],
  providers: [TodoService, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
