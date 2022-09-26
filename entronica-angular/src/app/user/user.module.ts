import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UserRoutingModule } from './user-routing.module'
import { UserListComponent } from '../user/user-list/user-list.component'
import { UserComponent } from './user.component'
import { EaUserModule } from '../shared/modules/ea-user/ea-user.module'

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [CommonModule, UserRoutingModule, EaUserModule],
  exports: [UserListComponent],
})
export class UserModule {}
