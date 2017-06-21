import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdRadioModule, MdCardModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LomakeComponent } from './lomake/lomake.component';
import { TuloksetComponent } from './tulokset/tulokset.component';

@NgModule({
  declarations: [
    AppComponent,
    LomakeComponent,
    TuloksetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdRadioModule,
    MdCardModule,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
