import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CurriculumComponent } from './components/pages/curriculum/curriculum.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { TeachingComponent } from './components/pages/teaching/teaching.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
