import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
   {
  path: '',
  component: BodyComponent
},
{
  path: 'resume',
  component: ResumeComponent
},
{
  path: 'projects',
  component: ProjectComponent
},

{
  path: 'contact',
  component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
