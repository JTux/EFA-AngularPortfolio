import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { SubtitleComponent } from './components/navigation/sidebar/subtitle/subtitle.component';
import { NavItemComponent } from './components/navigation/sidebar/nav-item/nav-item.component';
import { FooterComponent } from './components/navigation/sidebar/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/pages/parts/header/header.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SectionComponent } from './components/pages/parts/section/section.component';
import { PageFooterComponent } from './components/pages/parts/footer/footer.component';

import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SubtitleComponent,
    NavItemComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    SectionComponent,
    PageFooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
