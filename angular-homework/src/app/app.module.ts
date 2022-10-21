import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main.component'
import {FormModule} from './modules/form/form.module'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
