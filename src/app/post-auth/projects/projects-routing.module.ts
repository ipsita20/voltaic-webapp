import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactProjectComponent } from './contact-project/contact-project.component';
import { SaleInfoComponent } from './sale-info/sale-info.component';
import { OtherInfoComponent } from './other-info/other-info.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'project-details',
    component: ProjectDetailsComponent,
    children: [
      { path: 'contact-info', component:ContactProjectComponent },
      { path: 'sale-info', component:SaleInfoComponent },
      { path: 'other-info', component:OtherInfoComponent }
   ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
