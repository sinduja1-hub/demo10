import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListService } from 'src/app/listservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharacterFilterPipe} from 'src/app/Filters/character-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CharacterFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
