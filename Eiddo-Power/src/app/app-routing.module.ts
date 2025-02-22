import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { WhychooseusComponent } from './whychooseus/whychooseus.component'; // Correct import
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'our-services', component: ServicesComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'why-choose-us', component: WhychooseusComponent }, // Correct usage
  { path: 'our-projects', component: ProjectsComponent }, // Correct usage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }