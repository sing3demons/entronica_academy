import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserListComponent } from './user-list/user-list.component'
import { UserComponent } from './user.component'

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
