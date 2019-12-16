import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { SubtitleComponent } from './components/navigation/sidebar/subtitle/subtitle.component';
import { NavItemComponent } from './components/navigation/sidebar/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SubtitleComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
