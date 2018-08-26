import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataViewModule} from 'primeng/dataview';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    SplitButtonModule,
    AppRoutingModule,
    DataViewModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
